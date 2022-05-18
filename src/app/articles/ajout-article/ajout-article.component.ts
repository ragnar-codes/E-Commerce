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
  categorieID: Categorie[];
  scategorieID: Scategorie[];
  tab: any = [];
  constructor(private artServ:ArticleService, private catServ: CategorieService, private scatServ: ScategorieService, private router:Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    return this.catServ.fetchCategories().subscribe(data => this.categorieID = data), (err:any) => console.log(err);
  }

  insertArticle = () => {
      this.artServ.AddArticle(this.art).subscribe(data => this.router.navigate(['/list-articles']),
      err=>console.log(err));
  }

  changeSuit(e:any) {
    this.categorieID=e.target.value;
    this.loadScategories();
  }
  loadScategories () {
    return this.scatServ.GetScategorieCat(this.categorieID).subscribe(data => {
            this.scategorieID = data ; }  ),(err:any)=>console.log(err) 
  }  
  onFileChanged(event:any) {
    this.art.imageartpetitf="images/"+event.target.files[0].name;
  }
  onFileChangedGF(event:any) {
    this.tab.push("images/"+event.target.files[0].name)
    this.art.imageArtGrandF.push("images/"+event.target.files[0].name);
    }


  

}
