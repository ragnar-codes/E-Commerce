import { Component, OnInit } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-scategories',
  templateUrl: './edit-scategories.component.html',
  styleUrls: ['./edit-scategories.component.css']
})
export class EditScategoriesComponent implements OnInit {

  scat: Scategorie = new Scategorie();
  id: object;
  constructor(private scatService: ScategorieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.scatService.getScategorieById(this.id).subscribe(data => this.scat = data)
  }

  UpdateScategorie(){
    this.scatService.updateScategorie(this.id,this.scat).subscribe(data=>this.router.navigate(['list-scategories']));
  }
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.scat.imagescat="/images"+event.target.files[0].name
    }

}
