import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  Subject,
  from,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { padStart } from 'lodash';
// import { bigInt, BigInteger } from 'big-integer';
const bigInt = require('big-integer');
// import bigInt from 'big-integer';

import { User } from '@models/index';
import { LocationData } from '@photo-gallery/models/index';

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
   * insertUploadDoc
   * Initial creation of upload document
   * @param {File} file
   * @param {User} user
   * @return {Promise<DocumentReference>} docRef
   */
  public async insertUploadDoc(uploadDoc: any): Promise<any> {
    return await this.firestore.collection('uploads').add(uploadDoc);
  }

  public async addUploadToUser(uploadDoc: any, userUid: string) {
    const userUploadDoc = this.firestore.doc(`users/${userUid}/uploads/${uploadDoc.id}`);
    return await userUploadDoc.set(uploadDoc);
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
    const querySnapshot$ = Observable.create((observer) => {
      return this.firestore
        .doc(`users/${user.uid}`)
        .collection('uploads')
        .onSnapshot(observer);
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

    // const collection = this.firestore.doc(`users/${user.uid}`).collection('uploads');
    // const uploadedFiles$ = new Subject();
    // // collection.where('isUploaded', "==", true)
    // collection.onSnapshot((querySnapshot) => {
    //   const docs = querySnapshot.docs.map((doc) => {
    //     return {
    //       ...doc.data(),
    //       id: doc.id,
    //     };
    //   });
    //   uploadedFiles$.next(docs);
    // });
    // return uploadedFiles$ as Observable<any[]>;
  }

  public getNearbyUploads$(userLocation: any, distanceType: string) {
    // const walkingRange = userLocation.geohash.slice(0, 5);
    // const lastGeohashChar = walkingRange[walkingRange.length - 1];
    // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
    // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;

    // const collection = this.firestore.collection(`uploads`)
    //   .where('locationData.geohash', ">=", walkingRange)
    //   .where('locationData.geohash', "<=", walkingRangeEnd);

    // lake merritt
    // const walkingDistanceInS2 = Math.pow(10, 12);

    // oakland
    // const walkingDistanceInS2 = Math.pow(10, 13);
    const distanceTargetsByType = {
      WALK: Math.pow(10, 12) * 7,
      BIKE: Math.pow(10, 12) * 7 * 5,
      DRIVE: Math.pow(10, 12) * 7 * 5 * 40,
    }
    const distanceTargetInS2 = bigInt(distanceTargetsByType[distanceType]);
    const userS2 = bigInt(userLocation.s2Id);
    // ignore first 4 chars to avoid big math
    // const preKeyStr = userLocation.s2Id.slice(0, 4);
    // const keyNum = Number(userLocation.s2Id.slice(4));

    const walkingRange = [
      padStart(userS2.minus(distanceTargetInS2).toString(), 22, '0'),
      padStart(userS2.add(distanceTargetInS2).toString(), 22, '0'),
    ];
    // const walkingRange = [
    //   String(Number(userLocation.s2Id) - walkingDistanceInS2),
    //   String(Number(userLocation.s2Id) + walkingDistanceInS2),
    // ];
    // const lastGeohashChar = walkingRange[walkingRange.length - 1];
    // const nextGeohashChar = String.fromCharCode(lastGeohashChar.charCodeAt(0) + 1);
    // const walkingRangeEnd = userLocation.geohash.slice(0, 4) + nextGeohashChar;
    const collection = this.firestore.collection(`uploads`)
      .where('locationData.s2Id', ">=", walkingRange[0])
      .where('locationData.s2Id', "<=", walkingRange[1]);

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