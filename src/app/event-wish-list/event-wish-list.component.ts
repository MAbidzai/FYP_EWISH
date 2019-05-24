import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-wish-list',
  templateUrl: './event-wish-list.component.html',
  styleUrls: ['./event-wish-list.component.scss']
})
export class EventWishListComponent implements OnInit {
  public eventId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.eventId = id;
    })

  }
}
