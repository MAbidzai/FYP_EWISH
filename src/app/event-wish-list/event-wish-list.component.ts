import { EventsService } from './../shared/services/events.service';
import { Product } from './../shared/Models/Product';
import { Event } from './../shared/Models/Event';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from './../shared/services/products.service';

@Component({
  selector: 'app-event-wish-list',
  templateUrl: './event-wish-list.component.html',
  styleUrls: ['./event-wish-list.component.scss']
})
export class EventWishListComponent implements OnInit {
  static eventId;
  public eventName: string;
  product: Product[] = [];
  public eventList: Event[] = [];


  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private eventService: EventsService
              ) { }


  ngOnInit() {

    this.productsService.getProducts()
    .subscribe(data => this.product = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      EventWishListComponent.eventId = id;
    }
    )
  }

  removeProduct(product) {
      console.log(product);
  }

  getTitle() {
    this.eventService.getEvents()
      .subscribe(data => {
        for (const item of data) {
          if (item.event_id === EventWishListComponent.eventId) {
            this.eventName = item.title;
          }
        }
      });
  }
}
