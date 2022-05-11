import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  art:Article = new Article();
  constructor(private catServ:ArticleService, private router:Router) { }

  ngOnInit(): void {
  }
  insertArticle = () => {
      this.catServ.AddArticle(this.art).subscribe(data => this.router.navigate(['/list-articles']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.art.imageartpetitf="assets/"+event.target.files[0].name
    }
  

}
