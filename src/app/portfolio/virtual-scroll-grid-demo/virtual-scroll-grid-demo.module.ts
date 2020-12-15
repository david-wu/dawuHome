import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

// import { LineChartModule } from '@common/charts/line-chart/line-chart.module';
import { VirtualScrollGridDemoComponent } from './virtual-scroll-grid-demo.component';
import { TooltipModule } from '@common/tooltip/tooltip.module';
import { CodeSnippetModule } from '@src/app/portfolio/code-snippet/code-snippet.module';
import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
import { VirtualScrollGridDemoRoutingModule } from './virtual-scroll-grid-demo.routes';

@NgModule({
  imports: [
    NgCommonModule,
    VirtualScrollGridModule,
    TooltipModule,
    VirtualScrollGridDemoRoutingModule,
    // LineChartModule,
    CodeSnippetModule,
  ],
  declarations: [
    VirtualScrollGridDemoComponent,
  ],
  exports: [
    VirtualScrollGridDemoComponent,
  ],
})
export class VirtualScrollGridDemoModule { }
