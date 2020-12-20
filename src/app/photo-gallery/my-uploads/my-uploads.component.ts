import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoGalleryService } from '@photo-gallery/services/index';
import { FirebaseAuthService } from '@services/index';
import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';

@Component({
  selector: 'dwu-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.scss']
})
export class MyUploadsComponent {

  public uploadedFiles$: Observable<UploadFile[]>;
  public zoomLevel = 3;

  constructor(
    public pgs: PhotoGalleryService,
    public firebaseAuthService: FirebaseAuthService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
  }

  public async onFileChange(file: File, user: User) {
    this.pgs.uploadFile(file, user);
  }

}
