import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageSourceImagesViewComponent } from './image-source-images-view.component';
import { ImageSourceImagesComponent } from './image-source-images/image-source-images.component';
import { ImageSourceUploaderComponent } from './image-source-uploader/image-source-uploader.component';
import { ImageSourceImagesViewRoutingModule } from './image-source-images-view.routes';
import { FileUploaderModule } from '@common/file-uploader/file-uploader.module';
import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module';
import { ImageGridModule } from '@common/image-grid/image-grid.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploaderModule,
    ZoomLevelPickerModule,
    ImageGridModule,
    ImageSourceImagesViewRoutingModule,
  ],
  declarations: [
    ImageSourceImagesViewComponent,
    ImageSourceImagesComponent,
    ImageSourceUploaderComponent,
  ],
  exports: [
    ImageSourceImagesViewComponent,
    ImageSourceImagesComponent,
    ImageSourceUploaderComponent,
  ],
})
export class ImageSourceImagesViewModule { }
