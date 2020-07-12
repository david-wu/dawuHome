import { Injectable } from '@angular/core';
import Geohash from 'latlon-geohash';

@Injectable()
export class UserLocationService {

  public getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((userLocation: any) => {
        console.log('userLocation', userLocation);
        const latitude = userLocation.coords.latitude;
        const longitude = userLocation.coords.longitude;

        const geohash = Geohash.encode(
          latitude,
          longitude,
          12,
        );
        resolve({
          geohash,
          latitude,
          longitude,
        })
      });
    });
  }

}