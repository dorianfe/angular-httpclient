import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { CategorieComponent } from './categorie/categorie.component';
import { ArticleAddComponent } from './article-add/article-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CategorieComponent,
    ArticleAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

