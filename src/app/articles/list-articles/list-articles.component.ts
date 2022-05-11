import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  listArticles: Article[];
  constructor(private articleServ: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }
  loadArticles(){
    return this.articleServ.ListArticles().subscribe(data => this.listArticles = data), (err:any) => console.log(err);
  }
  
  getArticles = () => {
    this.articleServ.ListArticles().subscribe((data: Article[]) => {
      this.listArticles = data;
    })
  }
}
