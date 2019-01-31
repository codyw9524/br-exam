import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'br-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurants = this.getRestaurants();
  }

  private getRestaurants(): Observable<Restaurant[]> {
    return this.restaurantService.list();
  }
}
