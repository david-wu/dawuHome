import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from '@services/index';
import { PhotoGalleryService } from '@photo-gallery/services/index';
import { User } from '@models/index';

@Component({
  selector: 'dwu-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.scss']
})
export class MyUploadsComponent {

  public uploadedFiles$: Observable<any[]>;

  constructor(
    public pgs: PhotoGalleryService,
    public firebaseAuthService: FirebaseAuthService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
  }

  public async onFileChange(file: File, user: User) {
    this.pgs.uploadFile(file, user);
  }

  public onDeleteFile(file: any, user: User) {
    this.pgs.deleteFile(file.id, user);
  }

  public trackById(file: any) {
    return file.id;
  }

}
