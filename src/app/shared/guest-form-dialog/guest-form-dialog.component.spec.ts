import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormDialogComponent } from './guest-form-dialog.component';

describe('GuestFormDialogComponent', () => {
  let component: GuestFormDialogComponent;
  let fixture: ComponentFixture<GuestFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
