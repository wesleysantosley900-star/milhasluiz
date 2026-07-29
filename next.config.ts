import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Os placeholders em /public são SVGs locais; troque-os por .jpg/.png reais
    // quando substituir as imagens finais (o next/image continua otimizando normalmente).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
