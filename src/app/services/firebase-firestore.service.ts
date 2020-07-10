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

  public registerFileId(file: File, user: User) {
    const collection = this.firestore.doc(`users/${user.uid}`).collection('uploads');
    return collection.add({
      fileName: file.name,
    })
      .then((doc) => {
        return {
          id: doc.id
        };
      });
  }

  public registerFileUploaded(fileId: string, uploadMeta: any, user: User) {
    const doc = this.firestore.doc(`users/${user.uid}/uploads/${fileId}`)
    return doc.update({
      isUploaded: true,
      uploadMeta,
    });
  }

  public getUploadedFiles$(user: User): Observable<any[]> {
    const collection = this.firestore.doc(`users/${user.uid}`).collection('uploads');
    const uploadedFiles$ = new Subject();
    collection.where('isUploaded', "==", true).onSnapshot((querySnapshot) => {
      console.log('querySnapshot', querySnapshot)
      const docs = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log('docs', docs)
      uploadedFiles$.next(docs);
    });
    return uploadedFiles$ as Observable<any[]>;
  }

}