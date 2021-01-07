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
export class ImageSourcesService {

  constructor(
    public firestore: FirebaseFirestoreService,
    public storage: FirebaseStorageService,
    public imageProcessing: ImageProcessingService,
    public exifService: ExifService,
  ) {}

  /**
   * generateImageSourceToken
   * @param {string} imageSourceId
   * @param {User}   user
   */
  public async generateImageSourceToken(imageSourceId: string) {
    const generateToken = window.firebase.functions().httpsCallable('generateImageSourceTokenTask');
    // imageSourceId = 'bOuFUgQtaPzYTUiBQHaI';
    return await generateToken({ imageSourceId });
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
   * uploadImageSourceFile
   * @param {File} file
   * @param {User} user
   */
  public async uploadImageSourceFile(file: File, user: User, sourceId: string) {
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

  public updateImageSource(imageSourceId, patch) {
    return this.firestore.db.collection('imageSources')
      .doc(imageSourceId)
      .update(patch)
  }

  public loadImageSourceTokens(imageSourceId: string): Observable<any[]> {
    const querySnapshot$ = Observable.create((observer) => {
      return this.firestore.db
        .collection('imageSources')
        .doc(imageSourceId)
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