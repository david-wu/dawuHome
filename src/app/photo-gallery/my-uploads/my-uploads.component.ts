import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from '@services/index';
import {
  ExifService,
  PhotoGalleryService,
  UserLocationService,
} from '@photo-gallery/services/index';
import { User } from '@models/index';
// import * as EXIFStatic from 'exif-js';

@Component({
  selector: 'dwu-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.scss']
})
export class MyUploadsComponent {

  public uploadedFiles$: Observable<any[]>;

  constructor(
    public firebaseAuthService: FirebaseAuthService,
    public pgs: PhotoGalleryService,
    public exifService: ExifService,
    public userLocationService: UserLocationService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
  }

  public async onFileChange(file: File, user: User) {
    const exifLocationData = await this.exifService.getMetaData(file);
    const myLocationData = await this.userLocationService.getUserLocation();
    this.pgs.uploadFile(file, user, exifLocationData || myLocationData);
  }

  public onDeleteFile(file: any, user: User) {
    this.pgs.deleteFile(file.id, user);
  }

  public trackById(file: any) {
    return file.id;
  }

}
