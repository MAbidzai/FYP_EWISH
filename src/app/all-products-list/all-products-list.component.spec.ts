import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsListComponent } from './all-products-list.component';

describe('AllProductsListComponent', () => {
  let component: AllProductsListComponent;
  let fixture: ComponentFixture<AllProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
