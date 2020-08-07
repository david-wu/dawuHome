import { Injectable } from '@angular/core';
import Geohash from 'latlon-geohash';
import { S2 } from 's2-geometry';

import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class UserLocationService {

  public getUserLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      const geolocationOptions = {
        enableHighAccuracy: false,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(
        (userLocation: any) => {
          const latitude = userLocation.coords.latitude;
          const longitude = userLocation.coords.longitude;
          // console.log('lat, long', latitude, longitude);
          const locationData = LocationData.fromLatLong(
            latitude,
            longitude,
            { locationSource: 'USER' },
          );
          resolve(locationData)
        },
        (error) => reject(error),
        geolocationOptions,
      );
    });
  }

}