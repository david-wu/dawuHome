import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageSourceViewComponent } from './image-source-view.component';
import { ImageSourceViewRoutingModule } from './image-source-view.routes';

@NgModule({
  imports: [
    CommonModule,
    ImageSourceViewRoutingModule,
  ],
  declarations: [
    ImageSourceViewComponent,
  ],
  exports: [
    ImageSourceViewComponent,
  ],
})
export class ImageSourceViewModule { }
