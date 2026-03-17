export interface Work {
  id: number;
  title: string;
  description: string;
  category: string;
  city: string;
  year: number;
  image: string;
  status: "Concluída" | "Em Andamento" | "Planejada";
  investment: string;
}

export interface FilterState {
  city: string;
  category: string;
  year: string;
}
