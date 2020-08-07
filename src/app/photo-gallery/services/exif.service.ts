import { Injectable } from '@angular/core';
import * as EXIFStatic from 'exif-js';

import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class ExifService {

  public getMetaData(file: File): Promise<LocationData> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result
        const exif = (EXIFStatic as any).EXIF.readFromBinaryFile(arrayBuffer);
        if (!exif || !exif.GPSLatitude) {
          console.log('missing exif?.GPSLatitude', exif)
          resolve();
          return;
        }
        const latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
        const longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);

        const latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
        const longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
        const locationData = LocationData.fromLatLong(
          latitude,
          longitude,
          { locationSource: 'EXIF' },
        );
        resolve(locationData);
      }
      reader.readAsArrayBuffer(file);
    });
  }

}