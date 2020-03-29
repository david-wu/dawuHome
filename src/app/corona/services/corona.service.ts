
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { share } from 'rxjs/operators';

@Injectable()
export class CoronaService {

    constructor(public http: HttpClient) {}

    public getCoronaFileUrl(location: string): string {
        return `/assets/corona/by-location/${location}.json`
    }

    public getCoronaFileByLocation(location: string): Observable<any> {
        return this.http.get(this.getCoronaFileUrl(location));
    }

}