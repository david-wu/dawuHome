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
import { sortBy } from 'lodash';
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
  }

  public async uploadFile(file: File, user: User, fileMeta: any = {}) {
    const registeredFileId = await this.ffs.registerFileId(file, user, fileMeta);
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

  public getNearByUploadsForDistanceType$(distanceType$: any): Observable<any[]> {
    return distanceType$.pipe(
      switchMap((distanceType: string) => this.getNearByUploads$(distanceType)),
    );
  }

  public getNearByUploads$(distanceType: string = 'WALK'): Observable<any[]> {
    const nearByUploadStreams$ = new Subject<any>();
    const userLocation = this.userLocationService.getUserLocation()
      .then((userLocation: any) => {
        const nearbyUploads$ = this.ffs.getNearbyUploads$(userLocation, distanceType).pipe(
          map((uploads: any[]) => {
            return sortBy(uploads, (upload) => {
              return Math.pow(userLocation.latitude - upload.locationData.latitude, 2) + Math.pow(userLocation.longitude - upload.locationData.longitude, 2);
            });
          }),
        );
        nearByUploadStreams$.next(nearbyUploads$);
      });

    return nearByUploadStreams$.pipe(
      switchMap((nearbyUploads$) => nearbyUploads$)
    ) as Observable<any[]>;

  }

}