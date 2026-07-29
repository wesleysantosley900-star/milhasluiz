import { ArrowRight, PlaneTakeoff } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { savingsResults } from "@/data/savings-results";
import { formatCurrency } from "@/lib/format";

export function SavingsResults() {
  return (
    <section id="resultados" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Resultados Reais"
          title="Quanto nossos clientes economizaram"
          description="Exemplos reais de emissões feitas com milhas por membros da comunidade."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savingsResults.map((result, index) => (
            <Reveal key={result.id} delay={(index % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-navy">
                  <PlaneTakeoff className="h-4 w-4 text-premium" />
                  {result.route}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-muted-foreground">Preço normal</p>
                    <p className="font-semibold text-navy line-through decoration-destructive/60">
                      {formatCurrency(result.normalPrice)}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-muted-foreground">Emitido</p>
                    <p className="font-bold text-premium">{formatCurrency(result.issuedPrice)}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-gold/10 px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Economia de
                  </p>
                  <p className="font-heading text-xl font-extrabold text-navy">
                    {formatCurrency(result.economy)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
