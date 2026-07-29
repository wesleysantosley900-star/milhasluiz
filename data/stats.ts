export type Stat = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isMoney?: boolean;
};

export const stats: Stat[] = [
  {
    id: "clientes",
    value: 3000,
    prefix: "+",
    label: "Clientes Atendidos",
  },
  {
    id: "economia",
    value: 2,
    prefix: "+R$ ",
    suffix: " Milhões",
    label: "Economizados pelos Clientes",
  },
  {
    id: "passagens",
    value: 1200,
    prefix: "+",
    label: "Passagens Emitidas",
  },
  {
    id: "satisfacao",
    value: 98,
    suffix: "%",
    label: "Satisfação dos Clientes",
  },
];
