import { Award, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { FallbackImage } from "@/components/shared/fallback-image";
import { siteConfig } from "@/data/site-config";

const credentials = [
  { label: "Anos de experiência", value: "8+" },
  { label: "Milhas gerenciadas", value: "50M+" },
  { label: "Programas dominados", value: "12+" },
];

export function About() {
  return (
    <section id="sobre" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] shadow-premium">
              <FallbackImage
                src="/specialist.jpg"
                fallbackSrc="/specialist.svg"
                alt={siteConfig.specialist.name}
                width={900}
                height={1200}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-between rounded-2xl bg-white px-6 py-5 shadow-premium">
              {credentials.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-heading text-xl font-extrabold text-navy">{item.value}</p>
                  <p className="text-[11px] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Sobre o Especialista"
              title="Quem está por trás dessa comunidade?"
              align="left"
              className="mb-6"
            />

            <div className="mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              <span className="font-semibold text-navy">{siteConfig.specialist.name}</span>
              <span className="text-muted-foreground">— {siteConfig.specialist.role}</span>
            </div>

            <p className="mb-4 leading-relaxed text-muted-foreground">
              Depois de emitir sua própria passagem internacional pagando apenas a taxa de
              embarque, percebeu que a maioria das pessoas simplesmente não sabe que esse
              mundo existe — e que ele está mais acessível do que parece.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Desde então, já ajudou milhares de viajantes a transformar gastos do dia a dia
              em passagens reais, unindo estratégia financeira e paixão por viagens em uma
              metodologia simples de aplicar.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-colors hover:border-premium hover:text-premium"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-colors hover:border-premium hover:text-premium"
              >
                <Youtube className="h-4 w-4" /> YouTube
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-colors hover:border-premium hover:text-premium"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
