import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { CookieSettingsLink } from "@/components/consent/cookie-settings-link";

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
          Esta Política de Privacidade explica, em conformidade com a Lei nº 13.709/2018
          (Lei Geral de Proteção de Dados Pessoais — LGPD), como o site {siteConfig.name}{" "}
          coleta, usa, armazena e protege os seus dados pessoais.
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          1. Quem é o controlador dos seus dados
        </h2>
        <p>
          O controlador responsável pelo tratamento dos dados coletados neste site é{" "}
          <strong>{siteConfig.specialist.name}</strong>, pessoa física, atuando sob a marca{" "}
          {siteConfig.name}. Dúvidas sobre privacidade podem ser enviadas para{" "}
          <a href={siteConfig.social.email} className="text-premium underline">
            {siteConfig.social.email.replace("mailto:", "")}
          </a>
          .
        </p>
        <p className="rounded-lg border border-dashed border-border bg-canvas px-4 py-3 text-sm">
          ⚠️ Aviso: este site ainda opera como pessoa física (sem CNPJ). Caso o negócio
          seja formalizado (ex: abertura de MEI/CNPJ), atualize esta seção com a razão
          social e o CNPJ correspondentes. Revise todo este documento com um advogado
          especializado em proteção de dados antes de publicar em produção.
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          2. Quais dados coletamos e para quê
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Dados de contato voluntário:</strong> quando você nos chama no
            WhatsApp ou envia um e-mail, tratamos as informações que você mesmo
            compartilha (nome, telefone, e-mail, conteúdo da mensagem) para responder
            sua solicitação de consultoria ou dúvidas sobre a Comunidade VIP.
          </li>
          <li>
            <strong>Dados de pagamento:</strong> ao assinar a Comunidade VIP, o
            pagamento é processado diretamente pelas plataformas Stripe, Hotmart,
            Kiwify ou Hubla — não armazenamos dados de cartão de crédito em nossos
            próprios sistemas.
          </li>
          <li>
            <strong>Dados de navegação (cookies):</strong> com o seu consentimento,
            utilizamos Google Analytics e Meta Pixel para entender como os visitantes
            usam o site e medir o desempenho de campanhas publicitárias. Veja a seção 4.
          </li>
        </ul>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          3. Base legal para o tratamento
        </h2>
        <p>
          Tratamos seus dados com base: (i) no seu <strong>consentimento</strong>{" "}
          (ex: cookies de analytics/publicidade); (ii) na{" "}
          <strong>execução de contrato ou procedimentos preliminares</strong> a pedido
          do titular (ex: responder sua solicitação de consultoria, processar sua
          assinatura); e (iii) no <strong>legítimo interesse</strong> em manter e
          melhorar o funcionamento e a segurança do site.
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          4. Cookies e tecnologias de rastreamento
        </h2>
        <p>
          Ao visitar o site, você pode aceitar ou recusar cookies não essenciais no
          banner exibido. Utilizamos, mediante o seu consentimento:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Google Analytics</strong> (Google LLC): estatísticas de acesso e
            comportamento de navegação, de forma agregada.
          </li>
          <li>
            <strong>Meta Pixel</strong> (Meta Platforms, Inc.): medição e otimização de
            anúncios veiculados no Instagram/Facebook.
          </li>
        </ul>
        <p>
          Esses provedores podem processar dados em servidores localizados fora do
          Brasil, sujeitos às respectivas políticas de privacidade do Google e da Meta.
          Você pode revogar seu consentimento e alterar suas preferências a qualquer
          momento clicando no botão abaixo:
        </p>
        <CookieSettingsLink className="inline-flex items-center rounded-full border border-premium px-4 py-2 text-sm font-semibold text-premium transition-colors hover:bg-premium hover:text-white" />

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          5. Compartilhamento de dados
        </h2>
        <p>
          Não vendemos seus dados pessoais. Compartilhamos dados apenas com prestadores
          de serviço necessários à operação do negócio: processadores de pagamento
          (Stripe, Hotmart, Kiwify, Hubla), provedor de hospedagem, e as ferramentas de
          analytics/publicidade citadas na seção 4, sempre no limite necessário para a
          finalidade de cada serviço.
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          6. Por quanto tempo guardamos seus dados
        </h2>
        <p>
          Mantemos seus dados de contato pelo tempo necessário para atender sua
          solicitação e cumprir obrigações legais/fiscais aplicáveis, ou até que você
          solicite a exclusão, o que ocorrer primeiro.
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          7. Seus direitos como titular dos dados
        </h2>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Eliminação dos dados tratados com base no seu consentimento;</li>
          <li>Informação sobre com quem compartilhamos seus dados;</li>
          <li>Revogação do consentimento, a qualquer momento.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
          <a href={siteConfig.social.email} className="text-premium underline">
            {siteConfig.social.email.replace("mailto:", "")}
          </a>
          .
        </p>

        <h2 className="pt-2 font-heading text-xl font-bold text-navy">
          8. Alterações desta política
        </h2>
        <p>
          Esta política pode ser atualizada periodicamente para refletir mudanças em
          nossas práticas ou na legislação. A data da última atualização está sempre
          disponível nesta página.
        </p>

        <p className="text-sm text-muted-foreground/70">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}.
          Substitua o conteúdo desta página pelo texto jurídico definitivo, revisado por
          um profissional habilitado, antes de publicar em produção.
        </p>
      </div>
    </article>
  );
}
