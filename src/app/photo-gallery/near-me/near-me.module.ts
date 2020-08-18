import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from '@app/app.component';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PhotoGalleryComponent } from '@photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { UploadFileListViewerComponent } from '@photo-gallery/upload-file-list-viewer/upload-file-list-viewer.component';
import { UploadFileGridViewerComponent } from '@photo-gallery/upload-file-grid-viewer/upload-file-grid-viewer.component';

const PHOTO_GALLERY_COMPONENTS = [
  PhotoGalleryComponent,
  MyUploadsComponent,
  NearMeComponent,
  UploadFileListViewerComponent,
  UploadFileGridViewerComponent,
];

@NgModule({
  imports: [
    PhotoGalleryRoutingModule,
    CommonModule,
    FileUploaderModule,
    ScrollingModule,
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
