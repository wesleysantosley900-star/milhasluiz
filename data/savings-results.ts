export type SavingsResult = {
  id: string;
  route: string;
  normalPrice: number;
  issuedPrice: number;
  economy: number;
};

const raw: Omit<SavingsResult, "economy">[] = [
  { id: "sp-orlando", route: "São Paulo → Orlando", normalPrice: 5800, issuedPrice: 1320 },
  { id: "rj-lisboa", route: "Rio de Janeiro → Lisboa", normalPrice: 4900, issuedPrice: 890 },
  { id: "sp-nova-york", route: "São Paulo → Nova York", normalPrice: 6200, issuedPrice: 1150 },
  { id: "bh-paris", route: "Belo Horizonte → Paris", normalPrice: 7100, issuedPrice: 1480 },
  { id: "sp-dubai", route: "São Paulo → Dubai", normalPrice: 8300, issuedPrice: 1990 },
  { id: "poa-cancun", route: "Porto Alegre → Cancún", normalPrice: 4300, issuedPrice: 760 },
];

export const savingsResults: SavingsResult[] = raw.map((r) => ({
  ...r,
  economy: r.normalPrice - r.issuedPrice,
}));
