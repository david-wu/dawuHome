import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageStreamViewComponent } from './image-stream-view.component';
import { ImageStreamViewRoutingModule } from './image-stream-view.routes';

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
