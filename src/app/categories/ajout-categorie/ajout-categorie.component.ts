import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';
import { ScategorieService } from 'src/app/services/scategorie.service';


@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
  cat:Categorie = new Categorie();
  constructor(private catServ:CategorieService, private scatserv: ScategorieService, private router:Router) { }

  ngOnInit(): void {
  }
  loadScategories () {
  
    return this.scatserv.GetScategorieCat(this.categorieid).subscribe(data => {
            this.scategorieID = data ; }  ),
                                  (err:any)=>console.log(err) 
                                 
                                        }      
  insertCategorie = () => {
      this.catServ.addCategorie(this.cat).subscribe(data => this.router.navigate(['/list-categories']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.cat.imagecategorie="categories/"+event.target.files[0].name
    }

}
