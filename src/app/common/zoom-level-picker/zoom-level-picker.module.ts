import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomLevelPickerComponent } from '@src/app/common/zoom-level-picker/zoom-level-picker.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ZoomLevelPickerComponent,
  ],
  exports: [
    ZoomLevelPickerComponent,
  ],
  providers: [],
})
export class ZoomLevelPickerModule { }
