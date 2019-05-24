import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProductsService } from 'app/shared/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'app/shared/Models/Product';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.scss']
})
export class AllProductsListComponent implements OnInit {
  // public eventModelArray = [];
  public productList: Product[] = [];

  productListMatDS: MatTableDataSource<Product>;
  displayedColumns = ['product_id', 'title', 'price', 'discount', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllEvents();
    // this.eventsService.getEvents()
    //   .subscribe(data => this.eventModelArray = data);
  }




  getAllEvents() {
    this.productService.getProducts().subscribe(allProducts => {
      this.productList = allProducts;
      if (this.productList) {
        this.productListMatDS = new MatTableDataSource<Product>(this.productList);
        this.productListMatDS.paginator = this.paginator;
        this.productListMatDS.sort = this.sort;
      };
    });
  }

  showEventList(event) {
    this.router.navigate([event.event_id], { relativeTo: this.route });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.productListMatDS.filter = filterValue;
  }
}
