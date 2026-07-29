import { Plane, Compass, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  plane: Plane,
  compass: Compass,
  users: Users,
};

export function Services() {
  return (
    <section id="servicos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="O Que Oferecemos"
          title="Três formas de você economizar em cada viagem"
          description="Do primeiro acúmulo à emissão da passagem, cuidamos de cada etapa da sua estratégia de milhas."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.1}>
                <div className="group h-full rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-premium/30 hover:shadow-premium">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl gradient-premium text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-navy">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
