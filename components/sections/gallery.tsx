import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryCarousel } from "@/components/sections/gallery-carousel";
import { getGalleryImages } from "@/lib/gallery";

export function Gallery() {
  const images = getGalleryImages();

  return (
    <section id="galeria" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Galeria"
          title="Viagens Realizadas com Milhas"
          description="Fotos de viagens reais realizadas utilizando estratégias de milhas."
          className="mb-16"
        />

        <Reveal>
          <GalleryCarousel images={images} />
        </Reveal>
      </div>
    </section>
  );
}
