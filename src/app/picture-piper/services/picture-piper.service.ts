import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  Subject,
  of,
  from,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';
import { sortBy } from 'lodash';
import * as Jimp from 'jimp';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/index';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
  ExifService,
  ImageProcessingService,
} from '@services/index';

@Injectable()
export class PicturePiperService {

  constructor(
    public firestore: FirebaseFirestoreService,
    public storage: FirebaseStorageService,
    public imageProcessing: ImageProcessingService,
    public exifService: ExifService,
  ) {}

  public getResourceList$(user: User, resource: any): Observable<any[]> {
    return this.firestore.query((db) => {
      return db
        .collection(resource.path)
        .where('userId', '==', user.uid)
        .orderBy('updatedAt', 'desc')
    });
  }

  public getImageSources$(user: User): Observable<any[]> {
    return this.firestore.query((db) => {
      return db
        .collection('imageSources')
        .where('userId', '==', user.uid)
        .orderBy('updatedAt', 'desc')
    });
  }

  public getImageStreams$(user: User): Observable<any[]> {
    return this.firestore.query((db) => {
      return db
        .collection('imageStreams')
        .where('userId', '==', user.uid)
        .orderBy('updatedAt', 'desc')
    });
  }

}