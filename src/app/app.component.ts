import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bottle-rocket-exam-cody-williams';

  constructor(private restaurants: RestaurantService) { }

  ngOnInit(): void {
    this.restaurants
      .list()
      .subscribe(data => console.log({ data }));
  }
}
