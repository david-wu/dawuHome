
import { Injectable } from '@angular/core';
import {
    Observable,
    BehaviorSubject
} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CoronaStoreService {

    public latestPointsByLocation$ = new BehaviorSubject({});

    public setLastestPointsData(latestPointsByLocation: Record<string, any>) {
        this.latestPointsByLocation$.next({
            ...this.latestPointsByLocation$.value,
            ...latestPointsByLocation,
        });
    }

}
