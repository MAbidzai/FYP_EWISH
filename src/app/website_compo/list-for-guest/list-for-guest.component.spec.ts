import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForGuestComponent } from './list-for-guest.component';

describe('ListForGuestComponent', () => {
  let component: ListForGuestComponent;
  let fixture: ComponentFixture<ListForGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListForGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
