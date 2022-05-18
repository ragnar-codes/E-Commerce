import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Scategorie } from '../models/scategorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScategorieService {

  url = "http://localhost:3001/api/scategories";
  constructor(private http:HttpClient) { }

  fetchScategories = ():Observable<Scategorie[]>=>{
    return this.http.get<Scategorie[]>(this.url);
  }
  addScategorie = (scat:Scategorie):Observable<Scategorie> => {
      return this.http.post<Scategorie>(this.url,scat);
  }
  getScategorieById(id: object):Observable<Scategorie>{
    return this.http.get<Scategorie>(this.url + '/' + id);
  }
  updateScategorie(id: object, cat:Scategorie):Observable<Scategorie>{
    return this.http.put<Scategorie>(this.url + '/' + id, cat);
  }
  deleteScategorie(id: object):Observable<Scategorie>{
    return this.http.delete<Scategorie>(this.url + '/' + id);
  }
  GetScategorieCat(categorieID: object):Observable<Scategorie[]>{
    console.log(categorieID);
    return this.http.get<Scategorie[]>(this.url + '/cat/' + categorieID);
  }
}
