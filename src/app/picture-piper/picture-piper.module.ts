import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserLoginModule } from '@app/user-login/user-login.module';
import {
  PicturePiperEffects,
  picturePiperReducer,
} from './store/index';
import { PICTURE_PIPER_SERVICES } from './services';
import { PicturePiperRoutingModule } from './picture-piper.routes';
import { PicturePiperComponent } from './picture-piper.component';

@NgModule({
  imports: [
    CommonModule,
    PicturePiperRoutingModule,
    UserLoginModule,
    StoreModule.forFeature('picturePiper', picturePiperReducer),
    EffectsModule.forFeature([PicturePiperEffects]),
  ],
  declarations: [
    PicturePiperComponent,
  ],
  exports: [
    PicturePiperComponent,
  ],
  providers: [
    ...PICTURE_PIPER_SERVICES,
  ],
})
export class PicturePiperModule { }
