import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserLoginModule } from '@app/user-login/user-login.module';
import { PicturePiperComponent } from '@src/app/picture-piper/picture-piper.component';
import { PicturePiperRoutingModule } from '@src/app/picture-piper/picture-piper.routes';
import { PICTURE_PIPER_SERVICES } from '@src/app/picture-piper/services';
import {
  PicturePiperEffects,
  picturePiperReducer,
} from '@src/app/picture-piper/store/index';

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
