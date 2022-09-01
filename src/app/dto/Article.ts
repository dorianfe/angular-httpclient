import {Categorie} from "./Categorie";
import {Vendeur} from "./Vendeur";

export interface Article {
// private int noArticle;
//     private String nomArticle;
//
//     @Lob
//     private String description;
//     private LocalDate dateDebutEncheres;
//     private LocalDate dateFinEncheres;
//     private int miseAPrix;
//     private int prixVente;
//
//     private enum ETATVENTE {PAS_COMMENCEE, EN_COURS, TERMINEE};
  noArticle: number;
  nomArticle: string;
  description: string;
  dateDebutEncheres: Date;
  dateFinEncheres: Date;
  miseAPrix: number;
  prixVente: number;
  etatVente: string;
  categorie: Categorie;
  vendeur: Vendeur;
}
