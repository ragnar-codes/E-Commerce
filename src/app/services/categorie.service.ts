import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categorie } from '../models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  url = "http://localhost:3001/api/categories";
  constructor(private http:HttpClient) { }
  fetchCategories = ():Observable<Categorie[]>=>{
    return this.http.get<Categorie[]>(this.url);
  }
  addCategorie = (cat:Categorie):Observable<Categorie> => {
      return this.http.post<Categorie>(this.url,cat);
  }
  getCategorieById(id: object):Observable<Categorie>{
    return this.http.get<Categorie>(this.url + '/' + id);
  }
  updateCategorie(id: object, cat:Categorie):Observable<Categorie>{
    return this.http.put<Categorie>(this.url + '/' + id, cat);
  }
  deleteCategorie(id: object):Observable<Categorie>{
    return this.http.delete<Categorie>(this.url + '/' + id);
  }
}
