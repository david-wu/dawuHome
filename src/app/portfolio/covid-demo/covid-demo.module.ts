import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CovidDemoRoutingModule } from './covid-demo.routes';
import { CovidDemoComponent } from './covid-demo.component';
// import { CoronaModule } from '@src/app/corona/corona.module';
// import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
// import { ZoomLevelPickerModule } from '@common/zoom-level-picker/zoom-level-picker.module'
// import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    CovidDemoRoutingModule,
    // VirtualScrollGridModule,
    // ZoomLevelPickerModule,
    // TooltipModule,
  ],
  declarations: [
    CovidDemoComponent,
  ],
  exports: [
    CovidDemoComponent,
  ],
})
export class CovidDemoModule { }
