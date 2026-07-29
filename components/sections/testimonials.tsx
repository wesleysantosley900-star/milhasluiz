import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já economiza com a gente"
          className="mb-16"
        />

        <Reveal>
          <Carousel opts={{ align: "start", loop: true }} className="px-2">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
                    <Quote className="mb-4 h-7 w-7 text-gold/50" />
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="mb-6 grow text-sm leading-relaxed text-navy/80">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11">
                        <AvatarFallback className="bg-premium font-bold text-white">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold text-navy">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
