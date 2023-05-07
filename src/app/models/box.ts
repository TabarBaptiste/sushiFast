export interface Box {
  quantite: number;
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  saveurs: string;
  aliments: { nom: string; quantite: number }[];
}
