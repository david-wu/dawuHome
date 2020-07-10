import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  from,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {

  public firebaseStorage = window.firebase.storage();

  public uploadFile(file: File, fileName: string= 'image.jpg') {
    const storageRef = this.firebaseStorage.ref();
    const imageRef = storageRef.child('uploads').child(fileName);
    return imageRef.put(file);
  }

  public deleteFile(fileName: string= 'image.jpg') {
    const storageRef = this.firebaseStorage.ref();
    const imageRef = storageRef.child(`uploads/${fileName}`);
    return imageRef.delete();
  }

}