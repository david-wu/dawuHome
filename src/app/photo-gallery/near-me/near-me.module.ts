import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { NearMeRoutingModule } from '@photo-gallery/near-me/near-me.routes';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { NearMeGridComponent } from '@photo-gallery/near-me/near-me-grid/near-me-grid.component';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
import { nearMeReducer } from './store/near-me.reducer';
import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module'
import { ImageGridModule } from '@photo-gallery/photo-gallery-common/image-grid/image-grid.module';

const NEAR_ME_COMPONENTS = [
  NearMeComponent,
  NearMeGridComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ImageGridModule,
    NearMeRoutingModule,
    ZoomLevelPickerModule,
    StoreModule.forFeature('nearMe', nearMeReducer)
  ],
  declarations: [
    ...NEAR_ME_COMPONENTS,
  ],
  exports: [
    ...NEAR_ME_COMPONENTS,
  ],
  providers: [
    ...PHOTO_GALLERY_SERVICES,
  ],
})
export class NearMeModule { }
