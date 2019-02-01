import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'br-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent {
  @Input() restaurant: Restaurant;
}

