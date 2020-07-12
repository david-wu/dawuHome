import { Injectable } from '@angular/core';
import Geohash from 'latlon-geohash';
import { S2 } from 's2-geometry';

@Injectable()
export class UserLocationService {

  public getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((userLocation: any) => {
        const latitude = userLocation.coords.latitude;
        const longitude = userLocation.coords.longitude;

        const geohash = Geohash.encode(
          latitude,
          longitude,
          12,
        );
        const s2Key = S2.latLngToKey(latitude, longitude, 30);
        const s2Id = S2.keyToId(s2Key);
        resolve({
          geohash,
          s2Id,
          // s2Key,
          latitude,
          longitude,
        })
      });
    });
  }

}