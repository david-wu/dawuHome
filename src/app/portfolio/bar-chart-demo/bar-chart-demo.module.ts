import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { BarChartModule } from '@common/charts/bar-chart/bar-chart.module';
import { BarChartDemoComponent } from './bar-chart-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    TooltipModule,
    BarChartModule,
  ],
  declarations: [
    BarChartDemoComponent,
  ],
  exports: [
    BarChartDemoComponent,
  ],
})
export class BarChartDemoModule { }
