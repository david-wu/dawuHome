import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageStreamSettingsComponent } from './image-stream-settings.component';
import { ImageStreamSettingsRoutingModule } from './image-stream-settings.routes';
// import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';

@NgModule({
  imports: [
    CommonModule,
    ImageStreamSettingsRoutingModule,
    // InputStringEditorModule,
  ],
  declarations: [
    ImageStreamSettingsComponent,
  ],
  exports: [
    ImageStreamSettingsComponent,
  ],
})
export class ImageStreamSettingsModule { }
