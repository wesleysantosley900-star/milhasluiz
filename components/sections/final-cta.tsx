import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden gradient-premium py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/25 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Quantas oportunidades você já perdeu por não conhecer o poder das milhas?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Cada dia sem uma estratégia é dinheiro deixado na mesa e uma viagem dos sonhos
            adiada. A liberdade de viajar mais, gastando menos, começa com uma decisão simples:
            entrar para quem já está economizando.
          </p>

          <Button
            render={<Link href="/#comunidade" />}
            nativeButton={false}
            size="lg"
            className="mt-10 h-16 bg-gold px-10 text-lg font-bold text-navy shadow-gold hover:bg-gold-light"
          >
            Entrar para Comunidade VIP
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
