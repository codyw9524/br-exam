import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSingleComponent } from './restaurant-single.component';

describe('RestaurantSingleComponent', () => {
  let component: RestaurantSingleComponent;
  let fixture: ComponentFixture<RestaurantSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
