
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  declarations: [
    BarChartComponent,
    LineChartComponent,
    ChartLegendComponent,
  ],
  exports: [
    BarChartComponent,
    LineChartComponent,
    ChartLegendComponent,
  ],
  providers: [],
})
export class ChartsModule { }

