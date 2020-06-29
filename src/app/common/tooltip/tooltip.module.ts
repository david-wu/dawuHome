import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';
import { TooltipViewComponent } from './tooltip-view.component';
import { TooltipService } from './tooltip.service';

@NgModule({
  imports: [
    NgCommonModule,
  ],
  entryComponents: [ TooltipViewComponent ],
  declarations: [
    TooltipComponent,
    TooltipViewComponent,
  ],
  exports: [
    TooltipComponent,
    TooltipViewComponent,
  ],
  providers: [
    TooltipService,
  ],
})
export class TooltipModule { }
