import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PhotoGalleryComponent } from '@photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';

@NgModule({
  imports: [
    PhotoGalleryRoutingModule,
    CommonModule,
    FileUploaderModule,
    UserLoginModule,
  ],
  declarations: [
    PhotoGalleryComponent,
    MyUploadsComponent,
    NearMeComponent,
  ],
  exports: [
    PhotoGalleryComponent,
    MyUploadsComponent,
    NearMeComponent,
  ],
  providers: [
    ...PHOTO_GALLERY_SERVICES,
  ],
})
export class PhotoGalleryModule { }
