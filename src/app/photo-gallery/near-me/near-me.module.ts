import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NearMeRoutingModule } from '@photo-gallery/near-me/near-me.routes';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { NearMeGridComponent } from '@photo-gallery/near-me/near-me-grid/near-me-grid.component';
import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module'
import { ImageGridModule } from '@common/image-grid/image-grid.module';
import { LocationPickerModule } from '@common/location-picker/location-picker.module';

const NEAR_ME_COMPONENTS = [
  NearMeComponent,
  NearMeGridComponent,
];

@NgModule({
  imports: [
    CommonModule,
    LocationPickerModule,
    ImageGridModule,
    NearMeRoutingModule,
    ZoomLevelPickerModule,
  ],
  declarations: [
    ...NEAR_ME_COMPONENTS,
  ],
  exports: [
    ...NEAR_ME_COMPONENTS,
  ],
})
export class NearMeModule { }
