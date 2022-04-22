import { Component, OnInit } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';

@Component({
  selector: 'app-list-scategories',
  templateUrl: './list-scategories.component.html',
  styleUrls: ['./list-scategories.component.css']
})
export class ListScategoriesComponent implements OnInit {
  listScategories:Scategorie[];
  constructor(private scatService:ScategorieService) { }

  ngOnInit(): void {
    this.getScategories();
  }
  getScategories = () => {
    this.scatService.fetchScategories().subscribe((data:Scategorie[]) => {
      this.listScategories = data;
    })
  }


}
