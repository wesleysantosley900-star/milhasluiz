import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade da ${siteConfig.name}.`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="mb-8 font-heading text-3xl font-extrabold text-navy">
        Política de Privacidade
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          A {siteConfig.name} respeita a sua privacidade. Esta página descreve, de forma
          resumida, como tratamos os dados coletados através deste site.
        </p>
        <p>
          Coletamos apenas as informações necessárias para viabilizar o contato via
          WhatsApp, e-mail ou formulários de consultoria, como nome e telefone/e-mail
          informados voluntariamente.
        </p>
        <p>
          Não compartilhamos seus dados com terceiros para fins comerciais alheios ao
          nosso serviço, exceto processadores de pagamento (Stripe, Hotmart, Kiwify, Hubla)
          necessários para a contratação da Comunidade VIP e da Consultoria Premium.
        </p>
        <p>
          Você pode solicitar a exclusão dos seus dados a qualquer momento entrando em
          contato pelo e-mail informado no rodapé deste site.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Substitua este conteúdo pelo texto jurídico definitivo, revisado por um
          profissional habilitado, antes de publicar em produção.
        </p>
      </div>
    </article>
  );
}
