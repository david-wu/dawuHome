import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserLoginModule } from '@app/user-login/user-login.module';
// import { SearchInputModule } from '@src/app/common/search-input/search-input.module';
// import {
//   PicturePiperEffects,
//   PicturePiperReducer,
// } from './store/index';
import { PicturePiperRoutingModule } from './picture-piper.routes';
import { PicturePiperComponent } from './picture-piper.component';
// import { PicturePiperExplorerModule } from './picture-piper-explorer/picture-piper-explorer.module';
// import { IMAGE_SOURCES_SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule,
    // SearchInputModule,
    // PicturePiperExplorerModule,
    PicturePiperRoutingModule,
    UserLoginModule,
    // StoreModule.forFeature('imageSources', imageSourcesReducer),
    // EffectsModule.forFeature([PicturePiperEffects]),
  ],
  declarations: [
    PicturePiperComponent,
  ],
  exports: [
    PicturePiperComponent,
  ],
  providers: [
    // ...IMAGE_SOURCES_SERVICES,
  ],
})
export class PicturePiperModule { }
