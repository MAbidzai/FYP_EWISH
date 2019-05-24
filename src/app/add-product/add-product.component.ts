import { Product } from './../shared/Models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/shared/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product = new Product;
  selectedFile: Blob;
  productModelArray: any;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.productModelArray = data);
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.product.img2 =  this.selectedFile;
   console.log(this.product);

  }

}
