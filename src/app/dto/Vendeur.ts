import {Article} from "./Article";

export interface Vendeur {

  noUtilisateur?: string;
  pseudo: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: number;
  rue: string;
  codePostal: number;
  ville: string;
  motDePasse: string;
  credit?: number;
  administrateur: boolean;
  listeArticles?: [];
  listeEncheres?: [];


}
