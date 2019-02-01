import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RestaurantSingleComponent } from './components/restaurant-single/restaurant-single.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

const COMPONENTS = [
  RestaurantsComponent,
  RestaurantSingleComponent,
  RestaurantDetailComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  exports: [...COMPONENTS]
})
export class RestaurantsModule { }
