import { Product } from './../shared/Models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from './../shared/services/products.service';

@Component({
  selector: 'app-event-wish-list',
  templateUrl: './event-wish-list.component.html',
  styleUrls: ['./event-wish-list.component.scss']
})
export class EventWishListComponent implements OnInit {
  public eventId;

  product: Product[] = [];

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService
              ) { }


  ngOnInit() {

    this.productsService.getProducts()
    .subscribe(data => this.product = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.eventId = id;
    }
    )
  }

  removeProduct(product) {
      console.log(product);
  }
}
