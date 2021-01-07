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
export class ImageStreamsService {

  constructor(
    public firestore: FirebaseFirestoreService,
    public storage: FirebaseStorageService,
    public imageProcessing: ImageProcessingService,
    public exifService: ExifService,
  ) {}

  /**
   * generateImageStreamToken
   * @param {string} imageStreamId
   * @param {User}   user
   */
  public async generateImageStreamToken(imageStreamId: string) {
    const generateToken = window.firebase.functions().httpsCallable('generateImageStreamTokenTask');
    // imageStreamId = 'bOuFUgQtaPzYTUiBQHaI';
    return await generateToken({ imageStreamId });
  }

  /**
   * deleteFile
   * @param {string} uploadFileId
   * @param {User}   user
   */
  public async deleteFile(uploadFileId: string) {
    await this.storage.deleteFile(uploadFileId);
    return await this.firestore.unregisterFile(uploadFileId);
  }

  /**
   * uploadImageStreamFile
   * @param {File} file
   * @param {User} user
   */
  public async uploadImageStreamFile(file: File, user: User, sourceId: string) {
    const exifData = await this.exifService.getExifData(file);
    const exifLocationData = this.exifService.getLocationData(exifData);

    const uploadDoc = {
      userId: user.uid,
      fileName: file.name,
      isUploaded: false,
      sourceId,
      locationData: { ...exifLocationData },
    } as UploadFile;
    const insertedUploadDocRef = await this.firestore.insertUploadDoc(uploadDoc);
    const insertedUploadDoc = {
      ...uploadDoc,
      id: insertedUploadDocRef.id,
    };

    const sizedFile = await this.imageProcessing.processImageFile(file, exifData);
    const fileUploadResponse = await this.storage.uploadFile(sizedFile, insertedUploadDoc.id)
    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = { downloadUrl: downloadUrl };
    return await this.firestore.registerFileUploaded(insertedUploadDoc.id, uploadMeta);
  }

  public updateImageStream(imageStreamId, patch) {
    return this.firestore.db.collection('imageStreams')
      .doc(imageStreamId)
      .update(patch)
  }

  public loadImageStreamTokens(imageStreamId: string): Observable<any[]> {
    const querySnapshot$ = Observable.create((observer) => {
      return this.firestore.db
        .collection('imageStreams')
        .doc(imageStreamId)
        .collection('accessTokens')
        .orderBy('createdAt', 'desc')
        .onSnapshot(observer);
      // return this.db
      //   .collection('uploads')
      //   .where('userId', '==', user.uid)
      //   .orderBy('updatedAt', 'desc')
      //   .onSnapshot(observer);
    });
    return querySnapshot$.pipe(
      map((querySnapshot: any) => {
        return querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
      }),
    );
  }

// db.collection("users").doc(doc.id).update({foo: "bar"});
}