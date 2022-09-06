import {Component, Input, OnInit} from '@angular/core';
import { RestService} from "../rest.service";
import { ActivatedRoute, Router} from "@angular/router";
import {Article} from "../dto/Article";
import {Categorie} from "../dto/Categorie";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  constructor( public rest: RestService, private route: ActivatedRoute, private router:Router) { }

 /* @Input() articleData : Article =
    { nomArticle:'',
      description: '',
      dateDebutEncheres: new Date(),
      dateFinEncheres: new Date(),
      miseAPrix: 0,
      prixVente: 0,
      etatVente: '',
      categorie: {
        libelle: "",
        noCategorie: 0
      },
      vendeur:  {
        //utliser localStorage
      }
    }*/


  ngOnInit(): void {

  }
/*
  ajouterArticle(): void {
    this.rest.ajouterArticle(this.articleData).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }
  */

}
