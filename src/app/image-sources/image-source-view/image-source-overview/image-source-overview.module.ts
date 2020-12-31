import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageSourceOverviewComponent } from './image-source-overview.component';
import { ImageSourceOverviewRoutingModule } from './image-source-overview.routes';

@NgModule({
  imports: [
    CommonModule,
    ImageSourceOverviewRoutingModule,
  ],
  declarations: [
    ImageSourceOverviewComponent,
  ],
  exports: [
    ImageSourceOverviewComponent,
  ],
})
export class ImageSourceOverviewModule { }
