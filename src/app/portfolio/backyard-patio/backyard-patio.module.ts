import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { BackyardPatioComponent } from './backyard-patio.component';
import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
// import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    VirtualScrollGridModule,
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
