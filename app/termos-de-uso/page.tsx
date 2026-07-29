import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de uso da ${siteConfig.name}.`,
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="mb-8 font-heading text-3xl font-extrabold text-navy">Termos de Uso</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Ao acessar e utilizar este site e os serviços da {siteConfig.name} (Comunidade
          VIP, Consultoria Premium e conteúdos relacionados), você concorda com os termos
          descritos a seguir.
        </p>
        <p>
          Os conteúdos sobre milhas aéreas, cartões e estratégias de emissão têm caráter
          educacional e informativo. Resultados de economia dependem de fatores como
          disponibilidade de assentos, regras dos programas de fidelidade e perfil de
          gastos de cada pessoa, podendo variar.
        </p>
        <p>
          A assinatura da Comunidade VIP é recorrente (mensal) e pode ser cancelada a
          qualquer momento, sem multa, através do canal de suporte informado no rodapé.
        </p>
        <p>
          A Consultoria Premium é um serviço individual, agendado previamente, sujeito à
          disponibilidade de agenda do especialista.
        </p>

        <h2 className="pt-4 font-heading text-xl font-bold text-navy">
          Propriedade intelectual
        </h2>
        <p>
          Todo o conteúdo deste site — incluindo textos, layout, design, código-fonte,
          identidade visual, fotografias e a marca {siteConfig.name} — é de propriedade
          exclusiva da {siteConfig.name} ou de seus licenciadores, protegido pela Lei nº
          9.610/98 (Lei de Direitos Autorais) e pela Lei nº 9.279/96 (Propriedade
          Industrial), quando aplicável.
        </p>
        <p>
          É proibida a reprodução, cópia, distribuição, engenharia reversa, raspagem
          (scraping) automatizada ou criação de obras derivadas deste site ou de qualquer
          parte dele — incluindo suas fotografias — sem autorização prévia e por escrito.
          O uso não autorizado poderá resultar em notificação de remoção (takedown),
          medidas administrativas e responsabilização civil e criminal, nos termos da
          legislação aplicável.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Substitua este conteúdo pelo texto jurídico definitivo, revisado por um
          profissional habilitado, antes de publicar em produção.
        </p>
      </div>
    </article>
  );
}
