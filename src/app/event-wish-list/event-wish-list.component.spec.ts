import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWishListComponent } from './event-wish-list.component';

describe('EventWishListComponent', () => {
  let component: EventWishListComponent;
  let fixture: ComponentFixture<EventWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
