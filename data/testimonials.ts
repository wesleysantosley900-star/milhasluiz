export type Testimonial = {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "mariana",
    name: "Mariana Ferreira",
    city: "São Paulo, SP",
    rating: 5,
    initials: "MF",
    text: "Emiti minha passagem para Lisboa pagando só a taxa de embarque. Economizei mais de R$ 3.000 seguindo as dicas da comunidade.",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Camargo",
    city: "Curitiba, PR",
    rating: 5,
    initials: "RC",
    text: "A consultoria mudou minha forma de usar o cartão de crédito. Em 4 meses já tinha milhas suficientes para uma viagem internacional.",
  },
  {
    id: "ana",
    name: "Ana Lúcia Prado",
    city: "Belo Horizonte, MG",
    rating: 5,
    initials: "AL",
    text: "Os alertas em tempo real são incríveis. Consegui uma passagem para Orlando por menos de R$ 200 usando milhas.",
  },
  {
    id: "joao",
    name: "João Pedro Almeida",
    city: "Porto Alegre, RS",
    rating: 5,
    initials: "JP",
    text: "Nunca imaginei que fosse tão simples. Hoje só compro passagem com milhas, e o suporte do grupo é excelente.",
  },
  {
    id: "camila",
    name: "Camila Souza",
    city: "Recife, PE",
    rating: 5,
    initials: "CS",
    text: "A comunidade VIP se pagou no primeiro mês. Economizei o valor da assinatura várias vezes em uma única emissão.",
  },
  {
    id: "thiago",
    name: "Thiago Barros",
    city: "Brasília, DF",
    rating: 5,
    initials: "TB",
    text: "Atendimento excelente e estratégias que realmente funcionam. Já indiquei para toda a minha família.",
  },
];
