import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RestaurantSingleComponent } from './components/restaurant-single/restaurant-single.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const COMPONENTS = [
  RestaurantsComponent,
  RestaurantSingleComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class RestaurantsModule { }
