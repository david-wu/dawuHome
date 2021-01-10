import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageStreamViewComponent } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-view.component';
import { ImageStreamViewRoutingModule } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-view.routes';

@NgModule({
  imports: [
    CommonModule,
    ImageStreamViewRoutingModule,
  ],
  declarations: [
    ImageStreamViewComponent,
  ],
  exports: [
    ImageStreamViewComponent,
  ],
})
export class ImageStreamViewModule { }
