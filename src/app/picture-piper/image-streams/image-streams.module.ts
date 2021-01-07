import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserLoginModule } from '@app/user-login/user-login.module';
import { SearchInputModule } from '@src/app/common/search-input/search-input.module';
import {
  ImageStreamsEffects,
  imageStreamsReducer,
} from './store/index';
import { ImageStreamsRoutingModule } from './image-streams.routes';
import { ImageStreamsComponent } from './image-streams.component';
// import { ImageStreamsExplorerModule } from './image-streams-explorer/image-streams-explorer.module';
import { IMAGE_STREAMS_SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule,
    SearchInputModule,
    // ImageStreamsExplorerModule,
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
