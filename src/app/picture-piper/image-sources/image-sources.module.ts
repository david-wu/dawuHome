import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserLoginModule } from '@app/user-login/user-login.module';
import { SearchInputModule } from '@src/app/common/search-input/search-input.module';
import {
  ImageSourcesEffects,
  imageSourcesReducer,
} from './store/index';
import { ImageSourcesRoutingModule } from './image-sources.routes';
import { ImageSourcesComponent } from './image-sources.component';
import { IMAGE_SOURCES_SERVICES } from './services';
import { ResourceSelectorModule } from '@pp/common/resource-selector/resource-selector.module';

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
