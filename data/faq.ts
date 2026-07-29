export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "o-que-sao-milhas",
    question: "O que são milhas aéreas?",
    answer:
      "Milhas aéreas são pontos acumulados através de cartões de crédito, programas de fidelidade e compras que podem ser trocados por passagens aéreas, upgrades e outros benefícios, reduzindo drasticamente o valor pago em viagens.",
  },
  {
    id: "vale-a-pena",
    question: "Vale a pena acumular milhas?",
    answer:
      "Sim. Com a estratégia correta é possível emitir passagens nacionais e internacionais pagando apenas taxas de embarque, gerando uma economia real de milhares de reais por ano.",
  },
  {
    id: "como-funciona-consultoria",
    question: "Como funciona a consultoria?",
    answer:
      "A consultoria é individual e personalizada: analisamos seu perfil de gastos, cartões disponíveis e objetivos de viagem para montar uma estratégia de acúmulo e resgate sob medida.",
  },
  {
    id: "como-funciona-comunidade",
    question: "Como funciona a comunidade?",
    answer:
      "Ao assinar a Comunidade VIP você entra em um grupo exclusivo no WhatsApp com alertas em tempo real de promoções, milhas em oferta e emissões relâmpago, além de conteúdo estratégico semanal.",
  },
  {
    id: "posso-cancelar",
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, a assinatura da Comunidade VIP não possui fidelidade e pode ser cancelada a qualquer momento, sem burocracia.",
  },
];
