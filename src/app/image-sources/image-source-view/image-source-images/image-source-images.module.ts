import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageSourceImagesComponent } from './image-source-images.component';
import { ImageSourceImagesRoutingModule } from './image-source-images.routes';
import { FileUploaderModule } from '@common/file-uploader/file-uploader.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploaderModule,
    ImageSourceImagesRoutingModule,
  ],
  declarations: [
    ImageSourceImagesComponent,
  ],
  exports: [
    ImageSourceImagesComponent,
  ],
})
export class ImageSourceImagesModule { }
