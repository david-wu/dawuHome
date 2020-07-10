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

  public getFileUrl$() {
    const storageRef = this.firebaseStorage.ref();
    const uploadsRef = storageRef.child('uploads');
    const imageRef = uploadsRef.child('image.jpg');
    const urlPromise = imageRef.getDownloadURL();
    return from(urlPromise);
  }

}