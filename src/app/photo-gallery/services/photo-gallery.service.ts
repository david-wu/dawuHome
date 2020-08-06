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
import * as Jimp from 'jimp';

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
    const fileBlob = new Blob([file]);
    const fileBuffer = await fileBlob.arrayBuffer();
    Jimp.read(fileBuffer as any)
      .then((image) => {
        const resizedJimp = image.resize(1080, Jimp.AUTO);
        resizedJimp.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
          const newBlob = new Blob([buffer]);
          const resizedFile = new File([newBlob], file.name);
          // const resizedFile = this.blobToFile(newBlob, file);
          this.uploadFile2(resizedFile, user, fileMeta);
        });
      })
  }

  public async uploadFile2(file: File, user: User, fileMeta: any = {}) {
    const registeredFileId = await this.ffs.registerFileId(file, user, fileMeta);
    const fileUploadResponse = await this.fss.uploadFile(file, registeredFileId)
    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = {
      downloadUrl: downloadUrl,
    };
    await this.ffs.registerFileUploaded(registeredFileId, uploadMeta, user);
  }

// public blobToFile = (blob: Blob, originalFile: File): File => {
//   const file = Object.create(File.prototype)
//   blob.name = originalFile.name;
//   return Object.assign(file, originalFile, blob);
//     // var b: any = theBlob;
//     // //A Blob() is almost a File() - it's just missing the two properties below which we will add
//     // b.lastModifiedDate = new Date();
//     // b.name = fileName;

//     // //Cast to a File() type
//     // return <File>theBlob;
// }


  // public async uploadFile2(file: File, user: User, fileMeta: any = {}) {
  //   const registeredFileId = await this.ffs.registerFileId(file, user, fileMeta);
  //   const fileUploadResponse = await this.fss.uploadFile(file, registeredFileId)
  //   const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
  //   const uploadMeta = {
  //     downloadUrl: downloadUrl,
  //   };
  //   await this.ffs.registerFileUploaded(registeredFileId, uploadMeta, user);
  // }

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