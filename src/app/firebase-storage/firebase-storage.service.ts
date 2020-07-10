import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  from,
} from 'rxjs';

import { User } from '@firebase-auth/user.model';

@Injectable()
export class FirebaseStorageService {

  public firebaseStorage = window.firebase.storage();
  // public FirebaseAuthUI = window.firebaseui.auth.AuthUI;
  // public firebaseAuthUI: any;

  public defaultUiConfig = {
  };

  public user$ = new BehaviorSubject<User>(undefined);
  public initializing$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.initialize();
  }

  public initialize() {
  }


  public uploadFile(file: File) {
    const storageRef = this.firebaseStorage.ref();
    const imageRef = storageRef.child('image.jpg');
    console.log('storageRef', storageRef, imageRef)
    return imageRef.put(file)
      .then((snapshot) => {
        console.log('put success snapshot:', snapshot)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  public getFileUrl$() {
    const storageRef = this.firebaseStorage.ref();
    const imageRef = storageRef.child('image.jpg');
    const urlPromise = imageRef.getDownloadURL();
    urlPromise.then(console.log);
    return from(urlPromise);
  }



}