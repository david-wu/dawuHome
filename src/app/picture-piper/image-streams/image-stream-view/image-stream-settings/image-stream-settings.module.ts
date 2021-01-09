import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageStreamSettingsComponent } from './image-stream-settings.component';
import { ImageStreamSettingsRoutingModule } from './image-stream-settings.routes';
import { ImageStreamSettingsSelectorComponent } from './image-stream-settings-selector/image-stream-settings-selector.component';
import { ResourceSelectorModule } from '@pp/common/resource-selector/resource-selector.module';
import { SearchInputModule } from '@app/common/search-input/search-input.module';

// import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';

@NgModule({
  imports: [
    CommonModule,
    ImageStreamSettingsRoutingModule,
    // InputStringEditorModule,
    SearchInputModule,
    ResourceSelectorModule,
  ],
  declarations: [
    ImageStreamSettingsComponent,
    ImageStreamSettingsSelectorComponent,
  ],
  exports: [
    ImageStreamSettingsComponent,
    ImageStreamSettingsSelectorComponent,
  ],
})
export class ImageStreamSettingsModule { }
