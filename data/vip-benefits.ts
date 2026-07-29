export type VipBenefit = {
  id: string;
  icon: "bell" | "zap" | "target" | "lock" | "lineChart" | "network";
  title: string;
  description: string;
};

export const vipBenefits: VipBenefit[] = [
  {
    id: "alertas",
    icon: "bell",
    title: "Alertas de Promoções",
    description: "Avisos em tempo real de milhas e passagens em oferta.",
  },
  {
    id: "tempo-real",
    icon: "zap",
    title: "Oportunidades em Tempo Real",
    description: "Emissões relâmpago compartilhadas assim que aparecem.",
  },
  {
    id: "estrategias",
    icon: "target",
    title: "Estratégias Práticas",
    description: "Passo a passo validado para acumular e resgatar milhas.",
  },
  {
    id: "grupo",
    icon: "lock",
    title: "Grupo Exclusivo",
    description: "Comunidade fechada, sem ruído, só quem quer economizar.",
  },
  {
    id: "acompanhamento",
    icon: "lineChart",
    title: "Acompanhamento",
    description: "Conteúdo estratégico semanal e suporte direto.",
  },
  {
    id: "networking",
    icon: "network",
    title: "Networking",
    description: "Troque experiências com outros viajantes inteligentes.",
  },
];
