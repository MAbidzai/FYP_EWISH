import { GuestFormDialogComponent } from './../../shared/guest-form-dialog/guest-form-dialog.component';
import { EventsService } from './../../shared/services/events.service';
import { Product } from './../../shared/Models/Product';
import { Event } from './../../shared/Models/Event';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';

export interface DialogData {
  name: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-list-for-guest',
  templateUrl: './list-for-guest.component.html',
  styleUrls: ['./list-for-guest.component.scss']
})
export class ListForGuestComponent implements OnInit {
  static eventId;
  public eventName: string;

  product: Product[] = [];
  selected: true;
  eventList: Event[] = [];


  constructor(private route: ActivatedRoute,
    private productsService: ProductsService,
    private eventsService: EventsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(data => this.product = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      ListForGuestComponent.eventId = id;
    }
    );

    this.getTitle();
  }

  openDialog(product): void {
    const dialogRef = this.dialog.open(GuestFormDialogComponent, {
      data: { title: product.title }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        console.log('Event id= ' + ListForGuestComponent.eventId + ' and product id= ' + product.product_id);
        console.log(result);
        // this.DeleteFile(docId)
      }
    });
  }

  getTitle() {
    this.eventsService.getEvents()
      .subscribe(data => {
        for (const item of data) {
          if (item.event_id === ListForGuestComponent.eventId) {
            this.eventName = item.title;
          }
        }
      });
  }

}
