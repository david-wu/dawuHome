import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PhotoGalleryComponent } from '@photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { PhotoGalleryCommonModule } from '@photo-gallery/photo-gallery-common/photo-gallery-common.module';

const PHOTO_GALLERY_COMPONENTS = [
  PhotoGalleryComponent,
  MyUploadsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PhotoGalleryCommonModule,
    PhotoGalleryRoutingModule,
    FileUploaderModule,
    UserLoginModule,
  ],
  declarations: [
    ...PHOTO_GALLERY_COMPONENTS,
  ],
  exports: [
    ...PHOTO_GALLERY_COMPONENTS,
  ],
  providers: [
    ...PHOTO_GALLERY_SERVICES,
  ],
})
export class PhotoGalleryModule { }
