import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-for-guest',
  templateUrl: './list-for-guest.component.html',
  styleUrls: ['./list-for-guest.component.scss']
})
export class ListForGuestComponent implements OnInit {

  listId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.listId = id;
    })
  }

}
