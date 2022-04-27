import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  cat: Categorie = new Categorie();
  id: object;
  constructor(private catService: CategorieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.catService.getCategorieById(this.id).subscribe(data => this.cat = data)
  }

  UpdateCategorie(){
    this.catService.updateCategorie(this.id,this.cat).subscribe(data=>this.router.navigate(['list-categories']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.cat.imagecategorie="categories/"+event.target.files[0].name
    }
  

}
