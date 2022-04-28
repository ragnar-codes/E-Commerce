import { Component, OnInit } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-scategories',
  templateUrl: './ajout-scategories.component.html',
  styleUrls: ['./ajout-scategories.component.css']
})
export class AjoutScategoriesComponent implements OnInit {

  scat:Scategorie = new Scategorie();
  constructor(private scatServ:ScategorieService, private router:Router) { }

  ngOnInit(): void {
  }
  insertScategorie = () => {
      this.scatServ.addScategorie(this.scat).subscribe(data => this.router.navigate(['/list-scategories']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.scat.imagescat="images/"+event.target.files[0].name
    }

}
