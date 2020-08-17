import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { LineChartComponent } from './line-chart.component';

@NgModule({
  imports: [
    NgCommonModule,
  ],
  declarations: [
    LineChartComponent,
  ],
  exports: [
    LineChartComponent,
  ],
})
export class LineChartModule { }
