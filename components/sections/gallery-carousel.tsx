"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Watermark } from "@/components/shared/watermark";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  if (images.length === 0) return null;

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
      className="px-2"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="sm:basis-1/2 lg:basis-1/3">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onContextMenu={(e) => e.preventDefault()}
              className="no-copy group relative aspect-4/3 overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <Watermark />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <MapPin className="h-4 w-4 text-gold" />
                {image.caption}
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex justify-center gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
