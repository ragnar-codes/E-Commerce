import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  listCategories:Categorie[];
  constructor(private catService:CategorieService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories = () => {
    this.catService.fetchCategories().subscribe((data:Categorie[]) => {
      this.listCategories = data;
    })
  }

}
