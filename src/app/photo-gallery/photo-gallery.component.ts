import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from '@services/index';
import { PhotoGalleryService } from '@app/photo-gallery/services/photo-gallery.service';
import { User } from '@models/index';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {

  public uploadedFiles$: Observable<any[]>;

  constructor(
    public firebaseAuthService: FirebaseAuthService,
    public pgs: PhotoGalleryService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
  }

  public onFileChange(file: File, user: User) {
    this.pgs.uploadFile(file, user);
  }

  public onDeleteFile(file: any, user: User) {
    this.pgs.deleteFile(file.id, user);
  }

  public trackById(file: any) {
    return file.id;
  }

}
