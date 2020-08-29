import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PhotoGalleryComponent } from '@photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { PhotoGalleryCommonModule } from '@photo-gallery/photo-gallery-common/photo-gallery-common.module';

import {
  PhotoGalleryEffects,
  photoGalleryReducer,
} from '@photo-gallery/store/index';

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
    StoreModule.forFeature('photoGallery', photoGalleryReducer),
    EffectsModule.forFeature([PhotoGalleryEffects]),
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
