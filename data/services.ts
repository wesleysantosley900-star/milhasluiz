export type Service = {
  id: string;
  icon: "plane" | "compass" | "users";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "emissao",
    icon: "plane",
    title: "Emissão de Passagens",
    description:
      "Encontramos as melhores oportunidades para emitir sua viagem utilizando milhas da forma mais inteligente possível.",
  },
  {
    id: "consultoria",
    icon: "compass",
    title: "Consultoria Premium",
    description:
      "Receba orientação individual para acelerar seu acúmulo de milhas e maximizar seus benefícios.",
  },
  {
    id: "comunidade",
    icon: "users",
    title: "Comunidade VIP",
    description:
      "Faça parte de um grupo seleto que recebe oportunidades exclusivas todos os dias.",
  },
];
