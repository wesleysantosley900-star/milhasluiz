// Configuração central de integrações e links externos.
// Troque apenas os valores abaixo para conectar as contas reais.
export const siteConfig = {
  name: "MilhasClub",
  url: "https://www.milhasclub.com.br",
  description:
    "Consultoria de milhas aéreas e comunidade VIP para você viajar pagando muito menos.",
  specialist: {
    name: "Luiz Thomazi",
    role: "Especialista em Milhas Aéreas e Consultoria de Viagens",
  },
  social: {
    instagram: "https://instagram.com/luizthomazi",
    youtube: "https://youtube.com/@seucanal",
    whatsapp:
      "https://wa.me/5531992974815?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Comunidade%20VIP%20de%20Milhas.",
    whatsappConsultoria:
      "https://wa.me/5531992974815?text=Ol%C3%A1!%20Quero%20agendar%20uma%20Consultoria%20Premium%20de%20Milhas.",
    email: "mailto:contato@milhasclub.com.br",
  },
  checkout: {
    stripe: "https://checkout.stripe.com/SEU-LINK-AQUI",
    hotmart: "https://pay.hotmart.com/SEU-LINK-AQUI",
    kiwify: "https://pay.kiwify.com.br/SEU-LINK-AQUI",
    hubla: "https://pay.hubla.com.br/SEU-LINK-AQUI",
  },
} as const;

// Prefixados com "/" para funcionar tanto na home (scroll) quanto em outras rotas (navegação + scroll).
export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Comunidade VIP", href: "/#comunidade" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
] as const;
