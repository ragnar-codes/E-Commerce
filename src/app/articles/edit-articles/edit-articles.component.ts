import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  _id:object;
  article: Article = new Article()
  categorieID:Categorie[];
  scategorieID:Scategorie[];
  categorieid:object;
  constructor(private artserv:ArticleService, private catserv:CategorieService,private scatserv:ScategorieService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadSCategories();
    this.article=new Article();
    this._id=this.route.snapshot.params['_id'];
    this.artserv.GetArticle(this._id).subscribe(data=>this.article=data);
  }
  modifarticle(){
    this.artserv.UpdateArticle(this._id,this.article).subscribe(data=>this.router.navigate(['/artciles/listarticles']))
    }
    loadCategories () {
    return this.catserv.fetchCategories().subscribe(data => {
    this.categorieID = data ;} ),
    (err:any)=>console.log(err)
    }
    loadSCategories () {
    return this.scatserv.fetchScategories().subscribe(data => {
    this.scategorieID = data ;} ),
    (err:any)=>console.log(err)
    } 

    changeSuit(e:any) {
      this.categorieid=e.target.value;
      this.loadScategories(e.target.value);
      }

      loadScategories (categorieID:object) {
        return this.scatserv.GetScategorieCat(categorieID).subscribe(data => {
        this.scategorieID = data ; } ),
        (err:any)=>console.log(err)
        }
        onFileChanged(event:any) {
        this.article.imageartpetitf="images/"+event.target.files[0].name
        }
        onFileChangedg(event:any) {
        this.article.imageArtGrandF.push("images/"+event.target.files[0].name)}
}

