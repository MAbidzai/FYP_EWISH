import { Component, OnInit } from '@angular/core';
import { Category } from './../shared/Models/category';
import { CategoriesService } from 'app/shared/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category = new Category;
  selectedFile: Blob;
  categoryModelArray: any;

  constructor(public categoryService: CategoriesService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => this.categoryModelArray = data);
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.category.img =  this.selectedFile;
   console.log(this.category);

  }

}
