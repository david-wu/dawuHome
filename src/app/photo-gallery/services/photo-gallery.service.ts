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
import * as Jimp from 'jimp';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/index';
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';
import { ExifService } from './exif.service';
import { UserLocationService } from './user-location.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable()
export class PhotoGalleryService {

  constructor(
    public auth: FirebaseAuthService,
    public firestore: FirebaseFirestoreService,
    public storage: FirebaseStorageService,
    public userLocationService: UserLocationService,
    public imageProcessing: ImageProcessingService,
    public exifService: ExifService,
  ) {}

  /**
   * deleteFile
   * @param {string} uploadFileId
   * @param {User}   user
   */
  public async deleteFile(uploadFileId: string, user: User) {
    await this.storage.deleteFile(uploadFileId);
    await this.firestore.unregisterFile(uploadFileId, user);
  }

  /**
   * uploadFile
   * @param {File} file
   * @param {User} user
   */
  public async uploadFile(file: File, user: User) {
    const exifData = await this.exifService.getExifData(file);
    const exifLocationData = this.exifService.getLocationData(exifData);
    const locationData = exifLocationData || await this.userLocationService.getUserLocation();

    const uploadDoc = {
      userId: user.uid,
      fileName: file.name,
      isUploaded: false,
      locationData: { ...locationData },
      uploadMeta: undefined,
    } as UploadFile;
    const insertedUploadDocRef = await this.firestore.insertUploadDoc(uploadDoc);
    const insertedUploadDoc = {
      ...uploadDoc,
      id: insertedUploadDocRef.id,
    }
    await this.firestore.addUploadToUser(insertedUploadDoc, user.uid);

    const sizedFile = await this.imageProcessing.processImageFile(file, exifData);
    const fileUploadResponse = await this.storage.uploadFile(sizedFile, insertedUploadDoc.id)

    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = {
      downloadUrl: downloadUrl,
    };
    await this.firestore.registerFileUploaded(insertedUploadDoc.id, uploadMeta, user);
  }

  public getUploadedFiles$(): Observable<any[]> {
    return this.auth.user$.pipe(
      switchMap((user: User) => {
        if (!user) {
          return of([]);
        } else {
          return this.firestore.getUploadedFiles$(user);
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
        const nearbyUploads$ = this.firestore.getNearbyUploads$(userLocation, distanceType).pipe(
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