import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './articles/ajout-article/ajout-article.component';
import { EditArticlesComponent } from './articles/edit-articles/edit-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { AjoutCategorieComponent } from './categories/ajout-categorie/ajout-categorie.component';
import { EditCategorieComponent } from './categories/edit-categorie/edit-categorie.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { AjoutScategoriesComponent } from './scategories/ajout-scategories/ajout-scategories.component';
import { EditScategoriesComponent } from './scategories/edit-scategories/edit-scategories.component';
import { ListScategoriesComponent } from './scategories/list-scategories/list-scategories.component';

const routes: Routes = [
  {path: 'list-articles', component: ListArticlesComponent},
  {path: 'edit-articles', component: EditArticlesComponent},
  {path: 'ajout-articles', component: AjoutArticleComponent},
  {path: 'list-categories', component: ListCategoriesComponent},
  {path: 'edit-categories', component: EditCategorieComponent},
  {path: 'ajout-categorie', component: AjoutCategorieComponent},
  {path: 'list-scategories', component: ListScategoriesComponent},
  {path: 'edit-scategories', component: EditScategoriesComponent},
  {path: 'ajout-scategorie', component: AjoutScategoriesComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
