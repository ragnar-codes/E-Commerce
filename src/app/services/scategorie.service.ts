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
}
