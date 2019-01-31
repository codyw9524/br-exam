import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './../../../../models/restaurant';

@Component({
  selector: 'br-restaurant-single',
  templateUrl: './restaurant-single.component.html',
  styleUrls: ['./restaurant-single.component.scss']
})
export class RestaurantSingleComponent {
  @Input() restaurant: Restaurant;

  getURL(): string {
    return `url('${this.restaurant.backgroundImageURL}')`;
  }
}
