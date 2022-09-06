import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import { ArticleAddComponent} from "./article-add/article-add.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";


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
  },
  { path: 'login',
    component: LoginComponent },
  { path: 'register',
    component: RegisterComponent },
  { path: 'profile',
    component: ProfileComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
