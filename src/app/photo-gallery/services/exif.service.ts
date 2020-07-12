import { Injectable } from '@angular/core';
import * as EXIFStatic from 'exif-js';
import Geohash from 'latlon-geohash';
import { S2 } from 's2-geometry';

@Injectable()
export class ExifService {

  public getMetaData(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result
        const exif = (EXIFStatic as any).EXIF.readFromBinaryFile(arrayBuffer);
        if (!exif || !exif.GPSLatitude) {
          resolve({});
          return;
        }
        const latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
        const longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
        const latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
        const longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
        const geohash = Geohash.encode(latitude, longitude, 12);

        const s2Key = S2.latLngToKey(latitude, longitude, 30);
        const s2Id = S2.keyToId(s2Key);
        resolve({
          latitude,
          longitude,
          geohash,
          s2Id,
          s2Key,
        });
      }
      reader.readAsArrayBuffer(file);
    });
  }

}