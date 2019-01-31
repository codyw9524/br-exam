import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from './../models/restaurant';
import { RestaurantSerializer } from './../models/restaurant.serializer';
import { ResourceService } from './resource.service';

@Injectable()
export class RestaurantService extends ResourceService<Restaurant> {
    restaurants: any;
    $restaurants: Observable<any>;

    constructor(httpClient: HttpClient) {
        const baseURL = environment.baseURL;
        const endpoint = `br-codingexams/restaurants.json`;
        const serializer = new RestaurantSerializer();

        super(httpClient, baseURL, endpoint, serializer);
    }

}
