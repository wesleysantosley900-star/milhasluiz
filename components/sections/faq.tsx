import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { buildFaqSchema } from "@/lib/schema";

export function Faq() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <section id="faq" className="bg-canvas py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Dúvidas Frequentes"
          title="Perguntas Frequentes sobre Milhas Aéreas"
          className="mb-14"
        />

        <Reveal>
          <Accordion className="rounded-2xl border border-border bg-white px-6">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="py-5 font-heading text-base font-semibold text-navy">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
