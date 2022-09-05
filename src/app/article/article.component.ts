import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Router} from "@angular/router";
import {Article} from "../dto/Article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];
  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.rest.getArticles().subscribe((resp: any) => {
      this.articles = resp;
      console.log(this.articles);
    });
  }
  add(): void {
    this.router.navigate(['/ajouter-article']);
  }
}
