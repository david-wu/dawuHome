import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { BackyardPatioComponent } from './backyard-patio.component';
// import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    // TooltipModule,
  ],
  declarations: [
    BackyardPatioComponent,
  ],
  exports: [
    BackyardPatioComponent,
  ],
})
export class BackyardPatioModule { }
