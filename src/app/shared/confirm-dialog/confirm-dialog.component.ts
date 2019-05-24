import { Component, OnInit, Inject } from '@angular/core';
import { EventsService } from './../services/events.service';
import { Event } from '../Models/Event';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  title: string;
  eventID: string;
}
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent implements OnInit {


  public eventList: Event[] = [];


  constructor(public eventsService: EventsService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents().subscribe(allEvents => {
      this.eventList = allEvents;
    });
  }

}
