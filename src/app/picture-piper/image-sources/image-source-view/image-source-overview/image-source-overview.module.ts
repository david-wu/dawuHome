import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';
import { ImageSourceOverviewComponent } from '@src/app/picture-piper/image-sources/image-source-view/image-source-overview/image-source-overview.component';
import { ImageSourceOverviewRoutingModule } from '@src/app/picture-piper/image-sources/image-source-view/image-source-overview/image-source-overview.routes';

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
