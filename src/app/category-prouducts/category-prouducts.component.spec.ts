import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProuductsComponent } from './category-prouducts.component';

describe('CategoryProuductsComponent', () => {
  let component: CategoryProuductsComponent;
  let fixture: ComponentFixture<CategoryProuductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProuductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProuductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
