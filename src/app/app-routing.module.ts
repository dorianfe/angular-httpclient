import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import { ArticleAddComponent} from "./article-add/article-add.component";


const routes: Routes = [
  {
    path: 'articles',
    component: ArticleComponent,
    data: {title: 'Article List'}
  },
  {
    path: 'ajouter-article',
    component: ArticleAddComponent,
    data: { title: 'Article add'}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
