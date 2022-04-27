import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  url = "http://localhost:3001/api/articles";
  constructor(private http:HttpClient) { }
  ListArticles = ():Observable<Article[]> => {
    return this.http.get<Article[]>(this.url);
  }

  UpdateArticle(id: object, art:Article):Observable<Article>{
    return this.http.put<Article>(this.url + '/' + id, art);
  }

  DeleteArticle(id: object):Observable<Article>{
    return this.http.delete<Article>(this.url + '/' + id);
  }
}
