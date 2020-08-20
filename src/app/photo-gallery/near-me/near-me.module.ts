import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StoreModule } from '@ngrx/store';

import { PhotoGalleryCommonModule } from '@photo-gallery/photo-gallery-common/photo-gallery-common.module';
import { NearMeRoutingModule } from '@photo-gallery/near-me/near-me.routes';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { NearMeGridComponent } from '@photo-gallery/near-me/near-me-grid/near-me-grid.component';
import { NearMeListComponent } from '@photo-gallery/near-me/near-me-list/near-me-list.component';
import { PHOTO_GALLERY_SERVICES } from '@photo-gallery/services/index';
// import { nearMeReducerMap } from './store/near-me.store';
import { nearMeReducer } from './store/near-me.reducer';

const NEAR_ME_COMPONENTS = [
  NearMeComponent,
  NearMeGridComponent,
  NearMeListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PhotoGalleryCommonModule,
    NearMeRoutingModule,
    ScrollingModule,
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
