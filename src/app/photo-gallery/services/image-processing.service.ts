import { Injectable } from '@angular/core';
// import {
//   Observable,
//   BehaviorSubject,
//   Subject,
//   of,
// } from 'rxjs';
// import {
//   map,
//   switchMap,
// } from 'rxjs/operators';
// import { sortBy } from 'lodash';
import * as Jimp from 'jimp';

// import { User } from '@models/index';
// import {
//   FirebaseAuthService,
//   FirebaseFirestoreService,
//   FirebaseStorageService,
// } from '@services/index';
// import { UserLocationService } from './user-location.service';

@Injectable()
export class ImageProcessingService {

  public static imageSizes = {
    lg: 1080,
    md: 640,
    sm: 320,
    xs: 150,
  };

  public async sizeImageFile(file: File): Promise<File>{
    const fileBlob = new Blob([file]) as any;
    const fileBuffer = await fileBlob.arrayBuffer();
    const image = await Jimp.read(fileBuffer as any);
    const resizedJimp = image.resize(
      ImageProcessingService.imageSizes.lg,
      Jimp.AUTO,
    ).quality(80);
    return await this.getFileFromJimp(resizedJimp, file.name);
  }

  public getFileFromJimp(jimpImage, fileName): Promise<File> {
    return new Promise((resolve, reject) => {
      jimpImage.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
        if (err) {
          reject(err);
        }
        const newBlob = new Blob([buffer]);
        const file = new File([newBlob], fileName);
        resolve(file);
      });
    });
  }

}