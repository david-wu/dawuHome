import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratedImageComponent } from './decorated-image.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DecoratedImageComponent,
  ],
  exports: [
    DecoratedImageComponent,
  ],
  providers: [],
})
export class DecoratedImageModule { }
