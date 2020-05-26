import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';
import { StatViewerComponent } from './stat-viewer/stat-viewer.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BarChartComponent,
    LineChartComponent,
    ChartLegendComponent,
    StatViewerComponent,
  ],
  exports: [
    BarChartComponent,
    LineChartComponent,
    ChartLegendComponent,
    StatViewerComponent,
  ],
  providers: [],
})
export class ChartsModule { }

