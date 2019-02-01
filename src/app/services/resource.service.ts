import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from './../models/resource';
import { Serializer } from './../models/serializer';

export class ResourceService<T extends Resource> {

    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string,
        private serializer: Serializer) { }
    
    list(): Observable<T[]> {
        return this.httpClient
            .get(`${this.url}/${this.endpoint}`)
            .pipe(
                map((data: any) => data[Object.keys(data)[0]]),
                map((data: any) => this.convertData(data))
            );
    }

    private convertData(data: any): T[] {
        return data.map(item => this.serializer.fromJson(item));
    }
}
