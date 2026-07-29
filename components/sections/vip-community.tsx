import { Bell, Zap, Target, Lock, LineChart, Network, Check, ShieldCheck, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { vipBenefits } from "@/data/vip-benefits";
import { siteConfig } from "@/data/site-config";

const icons: Record<string, LucideIcon> = {
  bell: Bell,
  zap: Zap,
  target: Target,
  lock: Lock,
  lineChart: LineChart,
  network: Network,
};

const pricingFeatures = [
  "Acesso ao grupo VIP no WhatsApp",
  "Alertas de promoções em tempo real",
  "Conteúdo estratégico semanal",
  "Suporte direto com especialistas",
];

export function VipCommunity() {
  return (
    <section id="comunidade" className="relative overflow-hidden gradient-navy py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Comunidade VIP"
          title="A plataforma que te avisa antes de todo mundo"
          description="Enquanto você ainda pesquisa qual site tem a passagem 'mais barata', nossos membros já estão emitindo voos internacionais pagando só a taxa de embarque."
          tone="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {vipBenefits.map((benefit) => {
              const Icon = icons[benefit.icon];
              return (
                <StaggerItem key={benefit.id}>
                  <div className="h-full rounded-2xl glass p-6 transition-colors hover:bg-white/[0.08]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-heading text-base font-bold text-white">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl border-2 border-gold/40 bg-white p-8 shadow-premium">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-navy shadow-gold">
                Mais Popular
              </span>

              <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-premium">
                Plano Mensal
              </p>
              <div className="mb-2 text-center">
                <span className="font-heading text-5xl font-extrabold text-navy">R$ 49,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="mb-8 text-center text-xs text-muted-foreground">
                Cancele quando quiser, sem burocracia.
              </p>

              <ul className="mb-8 space-y-3">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-navy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-premium" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                render={<Link href={siteConfig.checkout.kiwify} />}
                nativeButton={false}
                size="lg"
                className="h-14 w-full bg-gold text-base font-bold text-navy shadow-gold hover:bg-gold-light"
              >
                Quero Participar
              </Button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" /> Pagamento 100% seguro
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
