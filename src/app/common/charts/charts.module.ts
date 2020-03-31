
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';
import { StatViewerComponent } from './stat-viewer/stat-viewer.component';
@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
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

