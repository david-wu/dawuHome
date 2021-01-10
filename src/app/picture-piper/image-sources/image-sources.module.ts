import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserLoginModule } from '@app/user-login/user-login.module';
import { ResourceSelectorModule } from '@pp/common/resource-selector/resource-selector.module';
import { SearchInputModule } from '@src/app/common/search-input/search-input.module';
import { ImageSourcesComponent } from '@src/app/picture-piper/image-sources/image-sources.component';
import { ImageSourcesRoutingModule } from '@src/app/picture-piper/image-sources/image-sources.routes';
import { IMAGE_SOURCES_SERVICES } from '@src/app/picture-piper/image-sources/services';
import {
  ImageSourcesEffects,
  imageSourcesReducer,
} from '@src/app/picture-piper/image-sources/store/index';

@NgModule({
  imports: [
    CommonModule,
    SearchInputModule,
    ResourceSelectorModule,
    ImageSourcesRoutingModule,
    UserLoginModule,
    StoreModule.forFeature('imageSources', imageSourcesReducer),
    EffectsModule.forFeature([ImageSourcesEffects]),
  ],
  declarations: [
    ImageSourcesComponent,
  ],
  exports: [
    ImageSourcesComponent,
  ],
  providers: [
    ...IMAGE_SOURCES_SERVICES,
  ],
})
export class ImageSourcesModule { }
