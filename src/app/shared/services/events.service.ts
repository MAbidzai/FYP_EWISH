import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../Models/Event';

@Injectable()
export class EventsService {

  _url = './../../../assets/data/events.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this._url);
  }
}
