import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageSourceOverviewComponent } from './image-source-overview.component';
import { ImageSourceOverviewRoutingModule } from './image-source-overview.routes';
import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';

@NgModule({
  imports: [
    CommonModule,
    ImageSourceOverviewRoutingModule,
    InputStringEditorModule,
  ],
  declarations: [
    ImageSourceOverviewComponent,
  ],
  exports: [
    ImageSourceOverviewComponent,
  ],
})
export class ImageSourceOverviewModule { }
