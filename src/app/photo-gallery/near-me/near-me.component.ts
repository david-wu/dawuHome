import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from '@services/index';
import {
  ExifService,
  PhotoGalleryService,
  UserLocationService,
} from '@photo-gallery/services/index';
import { User } from '@models/index';

@Component({
  selector: 'dwu-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent {

  public nearByUploads$: Observable<any[]>;

  constructor(
    public firebaseAuthService: FirebaseAuthService,
    public pgs: PhotoGalleryService,
    public exifService: ExifService,
    public userLocationService: UserLocationService,
  ) {
    // this.uploadedFiles$ = this.pgs.getUploadedFiles$();
    this.nearByUploads$ = this.pgs.getNearByUploads$();
    console.log('this.nearByUploads$', this.nearByUploads$);
    this.nearByUploads$.subscribe(console.log)
  }

  public trackById(file: any) {
    return file.id;
  }


}
