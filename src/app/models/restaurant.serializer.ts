import { Serializer } from './serializer';
import { Restaurant } from './restaurant';

export class RestaurantSerializer implements Serializer {
    fromJson(json: any): Restaurant {
        const restaurant = new Restaurant();
        Object.keys(json).forEach((key: string) => restaurant[key] = json[key]);
        return restaurant;
    }

    toJson(restaurant: Restaurant): any {
        return {};
    }
}
