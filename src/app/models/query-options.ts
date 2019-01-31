import { QueryBuilder } from './query-builder';

export class QueryOptions implements QueryBuilder {
    offset = 0;
    limit = 10000;
    queries: any;

    constructor(queries: any) {
        this.queries = queries;
        this.queries.offset = queries.offset || this.offset;
        this.queries.limit = queries.limit || this.limit;
    }

    toQueryMap() {
        const queryMap = new Map<string, string>();
        for (const key of Object.keys(this.queries)) {
            switch (key) {
                case 'offset': {
                    queryMap.set('page[offset]', `${this.queries[key]}`);
                    break;
                }
                case 'limit': {
                    queryMap.set('page[limit]', `${this.queries[key]}`);
                    break;
                }
                case 'filter': {
                    for (const filterKey of Object.keys(this.queries[key])) {
                        queryMap.set(`filter[${filterKey}]`, `${this.queries[key][filterKey]}`);
                    }
                    break;
                }
                default: {
                    queryMap.set(`[${key}]`, `${this.queries[key]}`);
                }
            }
        }
        return queryMap;
    }

    toQueryString() {
        let queryString = '';
        this.toQueryMap().forEach((value: string, key: string) => {
            queryString = queryString.concat(`${key}=${value}&`);
        });

        return queryString.substring(0, queryString.length - 1);
    }
}
