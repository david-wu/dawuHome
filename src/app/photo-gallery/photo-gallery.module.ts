import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@src/app/app.component';
import { PhotoGalleryComponent } from '@src/app/photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@src/app/photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@src/app/user-login/user-login.module';
import { FileUploaderModule } from '@src/app/file-uploader/file-uploader.module';

@NgModule({
  imports: [
    PhotoGalleryRoutingModule,
    CommonModule,
    FileUploaderModule,
    UserLoginModule,
  ],
  declarations: [
    PhotoGalleryComponent,
  ],
  exports: [
    PhotoGalleryComponent,
  ],
  providers: [],
})
export class PhotoGalleryModule { }
