import { Injectable } from '@angular/core';
import * as EXIFStatic from 'exif-js';

import { LocationData } from '@photo-gallery/models/index';

@Injectable()
export class ExifService {

  public getExifData(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result
        const exif = (EXIFStatic as any).EXIF.readFromBinaryFile(arrayBuffer);
        resolve(exif);
        // if (!exif || !exif.GPSLatitude) {
        //   console.log('fileUploadMissingExif');
        //   window.firebase.analytics.logEvent('fileUploadMissingExif');
        //   resolve();
        //   return;
        // }
      }
      reader.readAsArrayBuffer(file);
    });
  }

  public getLocationData(exif: any): LocationData {
    if (!exif || !exif.GPSLatitude) {
      return;
    }
    // const exif = await this.getExifData(file);
    const latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
    const longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);

    const latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
    const longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
    const locationData = LocationData.fromLatLong(
      latitude,
      longitude,
      { locationSource: 'EXIF' },
    );
    return locationData;
  }

}