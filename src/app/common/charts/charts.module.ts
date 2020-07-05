import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';
import { StatViewerComponent } from './stat-viewer/stat-viewer.component';
import { BarChartModule } from './bar-chart/bar-chart.module';

@NgModule({
  imports: [
    CommonModule,
    BarChartModule,
  ],
  declarations: [
    LineChartComponent,
    ChartLegendComponent,
    StatViewerComponent,
  ],
  exports: [
    BarChartModule,
    LineChartComponent,
    ChartLegendComponent,
    StatViewerComponent,
  ],
  providers: [],
})
export class ChartsModule { }

