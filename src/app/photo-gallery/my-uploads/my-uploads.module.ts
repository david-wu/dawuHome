import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { PhotoGalleryCommonModule } from '@photo-gallery/photo-gallery-common/photo-gallery-common.module';
import { MyUploadsRoutingModule } from '@photo-gallery/my-uploads/my-uploads.routes';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module'
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { DecoratedImageModule } from '@common/decorated-image/decorated-image.module'

const MY_UPLOADS_COMPONENTS = [
  MyUploadsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    DecoratedImageModule,
    PhotoGalleryCommonModule,
    MyUploadsRoutingModule,
    VirtualScrollGridModule,
    ZoomLevelPickerModule,
    UserLoginModule,
    FileUploaderModule,
  ],
  declarations: [
    ...MY_UPLOADS_COMPONENTS,
  ],
  exports: [
    ...MY_UPLOADS_COMPONENTS,
  ],
  providers: [
    ...PHOTO_GALLERY_SERVICES,
  ],
  bootstrap: [MyUploadsComponent],
})
export class MyUploadsModule { }
