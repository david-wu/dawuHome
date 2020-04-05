
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    public setFavoriteLocations(locations: string[] = []) {
        const locationsStr = JSON.stringify(locations);
        localStorage.setItem('favorites-jh', locationsStr);
    }

    public getFavoriteLocations(): string[] {
        const locationsStr = localStorage.getItem('favorites-jh') || '[]';
        const locations = JSON.parse(locationsStr);

        return locations.length ? locations : [
            // 'USA',
            // 'CA, USA',
            // 'Santa Clara County, CA, USA',
            // 'ITA',
            // 'CHN',
        ];
    }

}