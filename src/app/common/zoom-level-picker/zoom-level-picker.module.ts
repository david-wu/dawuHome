import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomLevelPickerComponent } from './zoom-level-picker.component';

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
