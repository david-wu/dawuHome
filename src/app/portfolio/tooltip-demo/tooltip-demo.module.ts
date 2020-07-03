import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    TooltipModule,
  ],
  declarations: [
    TooltipDemoComponent,
  ],
  exports: [
    TooltipDemoComponent,
  ],
})
export class TooltipDemoModule { }
