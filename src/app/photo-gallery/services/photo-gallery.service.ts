import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  Subject,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';
import Geohash from 'latlon-geohash';

import { User } from '@models/index';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';
import { UserLocationService } from './user-location.service';

@Injectable()
export class PhotoGalleryService {

  constructor(
    public fas: FirebaseAuthService,
    public ffs: FirebaseFirestoreService,
    public fss: FirebaseStorageService,
    public userLocationService: UserLocationService,
  ) {}

  public async deleteFile(fileId: string, user: User) {
    await this.fss.deleteFile(fileId);
    await this.ffs.unregisterFile(fileId, user);
    console.log('fileDeleted', fileId);
  }

  public async uploadFile(file: File, user: User, fileMeta: any = {}) {
    const registeredFileId = await this.ffs.registerFileId(file, user, fileMeta);
    // const registeredFileId = registrationResponse.id;
    const fileUploadResponse = await this.fss.uploadFile(file, registeredFileId)
    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = {
      downloadUrl: downloadUrl,
    };
    await this.ffs.registerFileUploaded(registeredFileId, uploadMeta, user);
  }

  public getUploadedFiles$(): Observable<any[]> {
    return this.fas.user$.pipe(
      switchMap((user: User) => {
        if (!user) {
          return of([]);
        } else {
          return this.ffs.getUploadedFiles$(user);
        }
      })
    );
  }

  public getNearByUploads$(): Observable<any[]> {
    const nearByUploadStreams$ = new Subject<any>();
    const userLocation = this.userLocationService.getUserLocation()
      .then((userLocation: any) => {
        nearByUploadStreams$.next(this.ffs.getNearbyUploads$(userLocation));
      });
    return nearByUploadStreams$.pipe(
      switchMap((nearbyUploads$) => {
        return nearbyUploads$
      })
    ) as Observable<any[]>;

  }

}