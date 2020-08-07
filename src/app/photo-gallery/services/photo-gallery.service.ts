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
import {
  FirebaseAuthService,
  FirebaseFirestoreService,
  FirebaseStorageService,
} from '@services/index';
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
  ) {}

  public async deleteFile(fileId: string, user: User) {
    await this.storage.deleteFile(fileId);
    await this.firestore.unregisterFile(fileId, user);
  }

  public async uploadFile(file: File, user: User, locationData: any = {}) {
    const sizedFile = await this.imageProcessing.sizeImageFile(file);
    console.log('sizedFile', sizedFile, locationData)
    const uploadDoc = {
      userId: user.uid,
      fileName: sizedFile.name,
      locationData: { ...locationData },
    };
    const insertedUploadDoc = await this.firestore.insertUploadDoc(uploadDoc);
    await this.firestore.addUploadToUser(insertedUploadDoc, user.uid);
    const fileUploadResponse = await this.storage.uploadFile(sizedFile, insertedUploadDoc.id)
    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = {
      downloadUrl: downloadUrl,
    };
    await this.firestore.registerFileUploaded(insertedUploadDoc.id, uploadMeta, user);
  }

  // public async sizeImageFile(file: File): Promise<File>{
  //   const fileBlob = new Blob([file]) as any;
  //   const fileBuffer = await fileBlob.arrayBuffer();
  //   return new Promise((resolve, reject) => {
  //     Jimp.read(fileBuffer as any)
  //       .then((image) => {
  //         const resizedJimp = image.resize(1080, Jimp.AUTO).quality(80);
  //         resizedJimp.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
  //           const newBlob = new Blob([buffer]);
  //           const resizedFile = new File([newBlob], file.name);
  //           resolve(resizedFile);
  //         });
  //       });
  //   });
  // }

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