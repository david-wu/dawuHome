import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { PicturePiperDemoRoutingModule } from './picture-piper-demo.routes';
import { PicturePiperDemoComponent } from './picture-piper-demo.component';

@NgModule({
  imports: [
    NgCommonModule,
    PicturePiperDemoRoutingModule,
  ],
  declarations: [
    PicturePiperDemoComponent,
  ],
  exports: [
    PicturePiperDemoComponent,
  ],
})
export class PicturePiperDemoModule { }
