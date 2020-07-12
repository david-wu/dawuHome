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
    // const walkingRange = userLocation.geohash.slice(0, 5);
    // const lastGeohashChar = walkingRange[walkingRange.length - 1];
    // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
    // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;

    // const collection = this.firestore.collection(`uploads`)
    //   .where('fileMeta.geohash', ">=", walkingRange)
    //   .where('fileMeta.geohash', "<=", walkingRangeEnd);

    // lake merritt
    // const walkingDistanceInS2 = Math.pow(10, 12);

    // oakland
    const walkingDistanceInS2 = Math.pow(10, 13);
    // ignore first 4 chars to avoid big math
    const preKeyStr = userLocation.s2Id.slice(0, 4);
    const keyNum = Number(userLocation.s2Id.slice(4));

    const walkingRange = [
      preKeyStr + String(keyNum - walkingDistanceInS2),
      preKeyStr + String(keyNum + walkingDistanceInS2),
    ];
    // const walkingRange = [
    //   String(Number(userLocation.s2Id) - walkingDistanceInS2),
    //   String(Number(userLocation.s2Id) + walkingDistanceInS2),
    // ];
    // const lastGeohashChar = walkingRange[walkingRange.length - 1];
    // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
    // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;
console.log('walkingRange', walkingRange)
    const collection = this.firestore.collection(`uploads`)
      .where('fileMeta.s2Id', ">=", walkingRange[0])
      .where('fileMeta.s2Id', "<=", walkingRange[1]);

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