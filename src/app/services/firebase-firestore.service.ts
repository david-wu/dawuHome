import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  Subject,
  from,
} from 'rxjs';

import { User } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFirestoreService {

  public firestore = window.firebase.firestore();

  public updateUser(user: User) {
    const userDoc = this.firestore.doc(`users/${user.uid}`);
    userDoc.set({ ...user });
  }

  public async unregisterFile(fileId: string, user: User) {
    const userDoc = this.firestore.doc(`users/${user.uid}/uploads/${fileId}`);
    await userDoc.delete();
    const uploadDoc = this.firestore.doc(`uploads/${fileId}`);
    return await uploadDoc.delete();
  }

  /**
   * registerFileId
   * Initial creation of upload document
   * @param {File} file
   * @param {User} user
   * @return {Promise<string>} id
   */
  public async registerFileId(file: File, user: User, fileMeta: any): Promise<string> {
    const upload = {
      userId: user.uid,
      fileName: file.name,
      fileMeta: fileMeta,
    };
    const collection = this.firestore.collection('uploads');
    const uploadDoc = await collection.add(upload);

    const userUploadDoc = this.firestore.doc(`users/${user.uid}/uploads/${uploadDoc.id}`)
    await userUploadDoc.set(upload);
    return uploadDoc.id;
  }

  public async registerFileUploaded(fileId: string, uploadMeta: any, user: User) {
    const uploadIndexDoc = this.firestore.doc(`uploads/${fileId}`);
    await uploadIndexDoc.update({
      isUploaded: true,
      uploadMeta,
    });

    const uploadDoc = this.firestore.doc(`users/${user.uid}/uploads/${fileId}`)
    return uploadDoc.update({
      isUploaded: true,
      uploadMeta,
    });
  }

  public getUploadedFiles$(user: User): Observable<any[]> {
    const collection = this.firestore.doc(`users/${user.uid}`).collection('uploads');
    const uploadedFiles$ = new Subject();
    // collection.where('isUploaded', "==", true)
    collection.onSnapshot((querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      uploadedFiles$.next(docs);
    });
    return uploadedFiles$ as Observable<any[]>;
  }

  public getNearbyUploads$(userLocation) {
    console.log('userLocation', userLocation);
    const walkingRange = userLocation.geohash.slice(0, 5);
    const lastGeohashChar = walkingRange[walkingRange.length - 1];
    const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
    const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;

    console.log('range', [walkingRange, walkingRangeEnd])
//     if (nextGeohashChar === 'i') {
// nextGeohashChar = 'j'
//     }
//     if (nextGeohashChar === 'l') {
// nextGeohashChar = 'm'
//     }
//     if (nextGeohashChar === '{') {
// nextGeohashChar = 'p'
//     }

    const collection = this.firestore.collection(`uploads`)
      .where('fileMeta.geohash', ">=", walkingRange)
      .where('fileMeta.geohash', "<=", walkingRangeEnd);
      // .where('fileMeta.longitude', ">", uploadLongitudeBounds[0])
      // .where('fileMeta.longitude', "<", uploadLongitudeBounds[1]);

    // client filtering
    // const userLoc = [
    //   userLocation.latitude,
    //   userLocation.longitude,
    // ];
    // const milesAway = 0.5;
    // const degreesAway = milesAway / 69;
    // const uploadLatitudeBounds = [
    //   userLoc[0] - milesAway,
    //   userLoc[0] + milesAway,
    // ];
    // const uploadLongitudeBounds = [
    //   userLoc[1] - milesAway,
    //   userLoc[1] + milesAway,
    // ];

    const nearbyUploads$ = new Subject<any[]>();
    collection.onSnapshot((querySnapshot) => {
      console.log('querySnapshot', querySnapshot)
      const docs = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      nearbyUploads$.next(docs);
    });
    return nearbyUploads$;
  }

}