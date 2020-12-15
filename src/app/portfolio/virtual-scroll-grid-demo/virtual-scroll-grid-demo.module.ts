import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { LineChartModule } from '@common/charts/line-chart/line-chart.module';
import { VirtualScrollGridDemoComponent } from './virtual-scroll-grid-demo.component';
import { CodeSnippetModule } from '@src/app/portfolio/code-snippet/code-snippet.module';
import { VirtualScrollGridModule } from '@common/virtual-scroll-grid/virtual-scroll-grid.module';
import { VirtualScrollGridDemoRoutingModule } from './virtual-scroll-grid-demo.routes';
import { TooltipModule } from '@common/tooltip/tooltip.module';

@NgModule({
  imports: [
    NgCommonModule,
    VirtualScrollGridModule,
    TooltipModule,
    VirtualScrollGridDemoRoutingModule,
    FormsModule,
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
