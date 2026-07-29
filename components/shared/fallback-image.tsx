"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type FallbackImageProps = ImageProps & {
  fallbackSrc: string;
};

// Evita ícone de imagem quebrada quando o arquivo final (ex: /specialist.jpg)
// ainda não foi adicionado ao projeto — mostra `fallbackSrc` até que exista.
export function FallbackImage({ fallbackSrc, src, alt, ...props }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={currentSrc}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
