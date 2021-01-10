import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { TooltipComponent } from '@src/app/common/tooltip/tooltip.component';
import { TooltipViewComponent } from '@src/app/common/tooltip/tooltip-view.component';
import { TooltipService } from '@src/app/common/tooltip/tooltip.service';

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
