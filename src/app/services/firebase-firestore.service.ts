import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  from,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseFirestoreService {

  public firestore = window.firebase.firestore();

  public updateUser(user: any) {
    const userDoc = this.firestore.doc(`users/${user.uid}`);
    userDoc.set({ ...user });
  }

}