import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { LineChartModule } from '@common/charts/line-chart/line-chart.module';
import { ChartLegendDemoComponent } from './chart-legend-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
import { ChartsModule } from '@common/charts/charts.module';
import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';

@NgModule({
  imports: [
    NgCommonModule,
    TooltipModule,
    LineChartModule,
    CodeSnippetModule,
    ChartsModule,
  ],
  declarations: [
    ChartLegendDemoComponent,
  ],
  exports: [
    ChartLegendDemoComponent,
  ],
})
export class ChartLegendDemoModule { }
