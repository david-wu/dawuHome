import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { LineChartModule } from '@common/charts/line-chart/line-chart.module';
import { LineChartDemoComponent } from './line-chart-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
import { CodeSnippetModule } from '@common/code-snippet/code-snippet.module';

@NgModule({
  imports: [
    NgCommonModule,
    TooltipModule,
    LineChartModule,
    CodeSnippetModule,
  ],
  declarations: [
    LineChartDemoComponent,
  ],
  exports: [
    LineChartDemoComponent,
  ],
})
export class LineChartDemoModule { }
