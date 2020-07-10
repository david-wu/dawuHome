import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { PhotoGalleryComponent } from '@app/photo-gallery/photo-gallery.component';
import { PhotoGalleryRoutingModule } from '@app/photo-gallery/photo-gallery.routes';
import { UserLoginModule } from '@app/user-login/user-login.module';
import { FileUploaderModule } from '@app/file-uploader/file-uploader.module';
import { PhotoGalleryService } from '@app/photo-gallery/services/photo-gallery.service';

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
  providers: [
    PhotoGalleryService,
  ],
})
export class PhotoGalleryModule { }
