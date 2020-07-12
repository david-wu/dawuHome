import Geohash from 'latlon-geohash';
import { S2 } from 's2-geometry';


export class LocationData {

  public static fromLatLong(
    latitude: number,
    longitude: number,
    overrides: Partial<LocationData> = {},
  ): LocationData {
    const geohash = Geohash.encode(latitude, longitude, 12);
    const s2Key = S2.latLngToKey(latitude, longitude, 30);
    const s2Id = S2.keyToId(s2Key);

    return Object.assign(new LocationData(), {
      latitude,
      longitude,
      geohash,
      s2Id,
      ...overrides,
    });
  }

  public latitude: number;

  public longitude: number;

  public geohash: string;

  public s2Id: string;

  public locationSource: string;

}
