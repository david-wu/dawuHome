import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageStreamOverviewComponent } from './image-stream-overview.component';
import { ImageStreamOverviewRoutingModule } from './image-stream-overview.routes';
import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';

@NgModule({
  imports: [
    CommonModule,
    ImageStreamOverviewRoutingModule,
    InputStringEditorModule,
  ],
  declarations: [
    ImageStreamOverviewComponent,
  ],
  exports: [
    ImageStreamOverviewComponent,
  ],
})
export class ImageStreamOverviewModule { }
