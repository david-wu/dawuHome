import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocationPickerComponent } from '@photo-gallery/photo-gallery-common/location-picker/location-picker.component';
// import { DecoratedImageModule } from '@common/decorated-image/decorated-image.module'
// import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
import { LocationViewerModule } from '@common/location-viewer/location-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    LocationViewerModule,
    // DecoratedImageModule,
    // VirtualScrollGridModule,
  ],
  declarations: [
    LocationPickerComponent,
  ],
  exports: [
    LocationPickerComponent,
  ],
})
export class LocationPickerModule { }
