import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartLegendComponent } from './chart-legend/chart-legend.component';
import { StatViewerComponent } from './stat-viewer/stat-viewer.component';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LineChartModule } from './line-chart/line-chart.module';

@NgModule({
  imports: [
    CommonModule,
    BarChartModule,
    LineChartModule,
  ],
  declarations: [
    ChartLegendComponent,
    StatViewerComponent,
  ],
  exports: [
    BarChartModule,
    LineChartModule,
    ChartLegendComponent,
    StatViewerComponent,
  ],
  providers: [],
})
export class ChartsModule { }

