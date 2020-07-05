import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    NgCommonModule,
  ],
  declarations: [
    BarChartComponent,
  ],
  exports: [
    BarChartComponent,
  ],
})
export class BarChartModule { }
