
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { share } from 'rxjs/operators';

@Injectable()
export class CoronaService {

    public latestPointsPath = '/assets/jh-corona/latest-points';

    constructor(public http: HttpClient) {}

    public getCoronaFileUrl(location: string): string {
        return `/assets/jh-corona/time-series/${location}.json`
    }

    public getCoronaFileByLocation(location: string): Observable<any> {
        return this.http.get(this.getCoronaFileUrl(location));
    }

    public getCoronaLatestPoints(location: string): Observable<any> {
        return this.http.get(`${this.latestPointsPath}/${location}.json`);
    }

}