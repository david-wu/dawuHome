import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserLoginModule } from '@app/user-login/user-login.module';
import { ResourceSelectorModule } from '@pp/common/resource-selector/resource-selector.module';
import { SearchInputModule } from '@src/app/common/search-input/search-input.module';
import { ImageStreamsComponent } from '@src/app/picture-piper/image-streams/image-streams.component';
import { ImageStreamsRoutingModule } from '@src/app/picture-piper/image-streams/image-streams.routes';
import { IMAGE_STREAMS_SERVICES } from '@src/app/picture-piper/image-streams/services';
import {
  ImageStreamsEffects,
  imageStreamsReducer,
} from '@src/app/picture-piper/image-streams/store/index';

@NgModule({
  imports: [
    CommonModule,
    SearchInputModule,
    ResourceSelectorModule,
    ImageStreamsRoutingModule,
    UserLoginModule,
    StoreModule.forFeature('imageStreams', imageStreamsReducer),
    EffectsModule.forFeature([ImageStreamsEffects]),
  ],
  declarations: [
    ImageStreamsComponent,
  ],
  exports: [
    ImageStreamsComponent,
  ],
  providers: [
    ...IMAGE_STREAMS_SERVICES,
  ],
})
export class ImageStreamsModule { }
