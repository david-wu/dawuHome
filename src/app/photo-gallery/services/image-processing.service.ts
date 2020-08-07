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

  constructor(
  ) {}

  public async sizeImageFile(file: File): Promise<File>{
    const fileBlob = new Blob([file]) as any;
    const fileBuffer = await fileBlob.arrayBuffer();
    return new Promise((resolve, reject) => {
      Jimp.read(fileBuffer as any)
        .then((image) => {
          const resizedJimp = image.resize(1080, Jimp.AUTO).quality(80);
          resizedJimp.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
            const newBlob = new Blob([buffer]);
            const resizedFile = new File([newBlob], file.name);
            resolve(resizedFile);
          });
        });
    });
  }

}