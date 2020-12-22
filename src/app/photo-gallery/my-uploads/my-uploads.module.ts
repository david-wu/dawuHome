import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MyUploadsRoutingModule } from '@photo-gallery/my-uploads/my-uploads.routes';
import { MyUploadsComponent } from '@photo-gallery/my-uploads/my-uploads.component';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module'
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { ImageGridModule } from '@common/image-grid/image-grid.module';

@NgModule({
  imports: [
    CommonModule,
    MyUploadsRoutingModule,
    ZoomLevelPickerModule,
    UserLoginModule,
    FileUploaderModule,
    ImageGridModule,
  ],
  declarations: [
    MyUploadsComponent,
  ],
  exports: [
    MyUploadsComponent,
  ],
  providers: [
    ...PHOTO_GALLERY_SERVICES,
  ],
})
export class MyUploadsModule { }
