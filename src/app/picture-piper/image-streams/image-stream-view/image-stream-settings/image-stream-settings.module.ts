import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchInputModule } from '@app/common/search-input/search-input.module';
import { ResourceSelectorModule } from '@pp/common/resource-selector/resource-selector.module';
import { ImageStreamSettingsEditorComponent } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-settings/image-stream-settings-editor/image-stream-settings-editor.component';
import { ImageStreamSettingsSelectorComponent } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-settings/image-stream-settings-selector/image-stream-settings-selector.component';
import { ImageStreamSettingsComponent } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-settings/image-stream-settings.component';
import { ImageStreamSettingsRoutingModule } from '@src/app/picture-piper/image-streams/image-stream-view/image-stream-settings/image-stream-settings.routes';

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
    ImageStreamSettingsEditorComponent,
    ImageStreamSettingsSelectorComponent,
  ],
  exports: [
    ImageStreamSettingsComponent,
    ImageStreamSettingsEditorComponent,
    ImageStreamSettingsSelectorComponent,
  ],
})
export class ImageStreamSettingsModule { }
