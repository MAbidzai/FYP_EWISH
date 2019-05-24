import { EventsService } from './../shared/services/events.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from './../shared/Models/Event';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

  // public eventModelArray = [];
  public eventList: Event[] = [];

  eventListMatDS: MatTableDataSource<Event>;
  displayedColumns = ['title', 'startDate', 'endDate', 'address', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private eventsService: EventsService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getAllEvents();
    // this.eventsService.getEvents()
    //   .subscribe(data => this.eventModelArray = data);
  }




 getAllEvents() {
    this.eventsService.getEvents().subscribe(allEvents => {
      this.eventList = allEvents;
      if (this.eventList) {
        this.eventListMatDS = new MatTableDataSource<Event>(this.eventList);
        this.eventListMatDS.paginator = this.paginator;
        this.eventListMatDS.sort = this.sort;
      };
    });
  }

  showEventList(event) {
    this.router.navigate([event.event_id], {relativeTo: this.route});
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.eventListMatDS.filter = filterValue;
  }

}
