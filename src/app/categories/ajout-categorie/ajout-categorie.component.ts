import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
  cat:Categorie = new Categorie();
  constructor(private catServ:CategorieService, private router:Router) { }

  ngOnInit(): void {
  }
  insertCategorie = () => {
      this.catServ.addCategorie(this.cat).subscribe(data => this.router.navigate(['/list-categories']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.cat.imagecategorie="categories/"+event.target.files[0].name
    }

}
