import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindListDialogComponent } from './find-list-dialog.component';

describe('FindListDialogComponent', () => {
  let component: FindListDialogComponent;
  let fixture: ComponentFixture<FindListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
