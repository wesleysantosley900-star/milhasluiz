// Estrutura preparada para futura integração com um CMS (ex: Contentful, Sanity, WordPress headless).
// Basta trocar esta fonte estática por uma chamada assíncrona ao CMS mantendo o mesmo shape (BlogPost).
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "como-acumular-milhas-rapidamente",
    title: "Como Acumular Milhas Rapidamente",
    excerpt:
      "As estratégias mais eficientes para sair do zero e chegar à sua primeira passagem gratuita em poucos meses.",
    category: "Acúmulo",
    readingTime: "6 min",
    publishedAt: "2026-05-12",
  },
  {
    id: "2",
    slug: "melhores-cartoes-para-viajar",
    title: "Melhores Cartões para Viajar",
    excerpt:
      "Comparamos os cartões que mais entregam pontos por real gasto e quais valem a anuidade.",
    category: "Cartões",
    readingTime: "8 min",
    publishedAt: "2026-05-28",
  },
  {
    id: "3",
    slug: "como-emitir-passagens-gastando-menos",
    title: "Como Emitir Passagens Gastando Menos",
    excerpt:
      "O passo a passo para transformar milhas acumuladas em passagens nacionais e internacionais reais.",
    category: "Emissão",
    readingTime: "7 min",
    publishedAt: "2026-06-10",
  },
  {
    id: "4",
    slug: "vale-a-pena-comprar-milhas",
    title: "Vale a Pena Comprar Milhas?",
    excerpt:
      "Quando a compra de milhas em promoção compensa e quando é melhor guardar seu dinheiro.",
    category: "Estratégia",
    readingTime: "5 min",
    publishedAt: "2026-06-24",
  },
];
