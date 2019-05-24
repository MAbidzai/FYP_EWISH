import { EventsService } from './../shared/services/events.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from './../shared/Models/Event';
import { AppUserService } from 'app/shared/services/appuser.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventModel = new Event;
  public eventModelArray = [];

  eventForm: FormGroup;
  Sentflag: boolean;

  constructor(private eventsService: EventsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createEventForm();
    this.eventsService.getEvents()
      .subscribe(data => this.eventModelArray = data);
  }




  createEventForm() {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postelCode: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.eventModel = this.eventForm.value;
    console.log(this.eventModel);
    // this.appuserService.enroll(this.userModel)
    //   .subscribe(data => {
    //     if (data) {
    //       this.Sentflag = true;
    //     } else {
    //       this.Sentflag = false;
    //     }
    //   });
  }

}
