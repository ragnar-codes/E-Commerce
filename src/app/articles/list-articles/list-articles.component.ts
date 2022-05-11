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
    this.getArticles()
  }
  
  getArticles = () => {
    this.articleServ.ListArticles().subscribe((data: Article[]) => {
      this.listArticles = data;
    })
  }
}
