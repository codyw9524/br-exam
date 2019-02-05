import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'br-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  currentWindowWidth: number;
  restaurants: Restaurant[];
  restaurants_columnA: Restaurant[];
  restaurants_columnB: Restaurant[];

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  constructor(
    private restaurantService: RestaurantService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getRestaurants();
    this.currentWindowWidth = window.innerWidth;
  }

  animate(detailsElement: any, restaurantElement: any): void {
    if (this.isMobileView() && !this.isOpen(detailsElement)) {
      restaurantElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.isOpen(detailsElement)) {
      this.renderer.removeClass(detailsElement, 'open');
      this.renderer.addClass(detailsElement, 'closed')

    } else {
      this.renderer.removeClass(detailsElement, 'closed');
      this.renderer.addClass(detailsElement, 'open');
    }
  }

  setZoom(restaurant: Restaurant): number {
    switch(restaurant.name) {
      case 'Hopdoddy Burger Bar': {
        return 18;
      }
      case `Chuy's`: {
        return 17;
      }
      case 'The Original Pancake House': {
        return 19;
      }
      case 'Buffalo Wild Wings': {
        return 17;
      }
      default: {
        return 16;
      }
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

  private isMobileView(): boolean {
    return this.currentWindowWidth < 768;
  }

  private isOpen(detailsElement: any): boolean {
    return detailsElement.classList.contains('open');
  }
}
