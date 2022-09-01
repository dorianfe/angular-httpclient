import {Article} from "./Article";

export interface Vendeur {
  //vendeur":    {
  //       "noUtilisateur": 0,
  //       "pseudo": "gzetsu",
  //       "nom": "tur",
  //       "prenom": "ant",
  //       "email": "mail",
  //       "telephone": "8522",
  //       "rue": "54res rere",
  //       "codePostal": "79000",
  //       "ville": "niort",
  //       "motDePasse": "zbeub",
  //       "credit": 25,
  //       "administrateur": false,
  //       "listeArticles": null,
  //       "listeEncheres": null

  noUtilisateur: string;
  pseudo: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: number;
  rue: string;
  codePostal: number;
  ville: string;
  motDePasse: string;
  credit: number;
  administrateur: boolean;
  listeArticles: [];
  listeEncheres: [];


}
