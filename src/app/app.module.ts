import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { EditCategorieComponent } from './categories/edit-categorie/edit-categorie.component';
import { AjoutCategorieComponent } from './categories/ajout-categorie/ajout-categorie.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { EditArticlesComponent } from './articles/edit-articles/edit-articles.component';
import { AjoutArticleComponent } from './articles/ajout-article/ajout-article.component';
import { ListScategoriesComponent } from './scategories/list-scategories/list-scategories.component';
import { EditScategoriesComponent } from './scategories/edit-scategories/edit-scategories.component';
import { AjoutScategoriesComponent } from './scategories/ajout-scategories/ajout-scategories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    EditCategorieComponent,
    AjoutCategorieComponent,
    ListArticlesComponent,
    EditArticlesComponent,
    AjoutArticleComponent,
    ListScategoriesComponent,
    EditScategoriesComponent,
    AjoutScategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
