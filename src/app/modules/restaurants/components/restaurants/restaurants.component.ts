import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'br-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  restaurants_columnA: Restaurant[];
  restaurants_columnB: Restaurant[];
  mapReady: boolean;

  constructor(
    private restaurantService: RestaurantService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  mapIsReady(): void {
    this.mapReady = true;
  }

  animate(el: any): void {
    if (el.classList.contains('closed')) {
      this.renderer.removeClass(el, 'closed');
      this.renderer.addClass(el, 'open');
    } else {
      this.renderer.removeClass(el, 'open');
      this.renderer.addClass(el, 'closed')
    }
  }

  private getRestaurants(): void {
    this.restaurantService
      .list()
      .subscribe((res: Restaurant[]) => {
        this.restaurants = res;
        this.restaurants_columnA = res.slice(0, Math.ceil(res.length/2));
        this.restaurants_columnB = res.slice(Math.ceil(res.length/2));
      })
  }
}
