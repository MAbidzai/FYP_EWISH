import { Product } from './../shared/Models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../shared/services/products.service';
import { CategoriesService } from './../shared/services/categories.service';
import { Category } from 'app/shared/Models/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product = new Product;
  selectedFile: Blob;
  productModelArray: any;
  public categoryList: Category[] = [];

  constructor(public productService: ProductsService, public categoryService: CategoriesService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.productModelArray = data);

      this.categoryService.getCategories()
      .subscribe(data => this.categoryList = data);
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.product.img2 =  this.selectedFile;
   console.log(this.product);
  }

}
