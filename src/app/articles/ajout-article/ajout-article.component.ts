import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  art:Article = new Article();
  CategorieID: Categorie[];
  ScategorieID: Scategorie[];
  constructor(private artServ:ArticleService, private catServ: CategorieService, private scatServ: ScategorieService, private router:Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    return this.catServ.fetchCategories().subscribe(data => this.CategorieID = data), (err:any) => console.log(err);
  }

  insertArticle = () => {
      this.artServ.AddArticle(this.art).subscribe(data => this.router.navigate(['/list-articles']),
      err=>console.log(err));
  }

  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.art.imageartpetitf="assets/"+event.target.files[0].name
    }
  

}
