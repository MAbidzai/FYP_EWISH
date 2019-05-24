import { ConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../shared/Models/Product';
import { ProductsService } from './../shared/services/products.service';
import { MatDialog } from '@angular/material';


export interface DialogData {
  title: string;
  eventID: string;
}

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  public product: Product[] = [];
  eventID: string;

  constructor(private productsService: ProductsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(data => this.product = data);
  }


  openDialog(product): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: product.title, eventID: this.eventID }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
         this.eventID = result;
        console.log('Event id= ' + this.eventID + ' and product id= ' + product.product_id);
        // this.DeleteFile(docId)
      }

    });
  }

}
