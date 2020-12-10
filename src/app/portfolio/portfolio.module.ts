import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { PortfolioRoutingModule } from '@src/app/portfolio/portfolio.routes';
import { CommonModule as MyCommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@file-explorer/file-explorer.module';
import { TooltipDemoModule } from '@src/app/portfolio/tooltip-demo/tooltip-demo.module';
import { BarChartDemoModule } from '@src/app/portfolio/bar-chart-demo/bar-chart-demo.module';
import { LineChartDemoModule } from '@src/app/portfolio/line-chart-demo/line-chart-demo.module'
import { BackyardPatioModule } from '@src/app/portfolio/backyard-patio/backyard-patio.module';
import { FuzzDemoModule } from '@src/app/portfolio/fuzz-demo/fuzz-demo.module';
import { MissingDemoModule } from '@src/app/portfolio/missing-demo/missing-demo.module';
import { CodeSnippetModule } from '@src/app/portfolio/code-snippet/code-snippet.module';
import { CodeSnippetDemoModule } from '@src/app/portfolio/code-snippet-demo/code-snippet-demo.module';
import { FileExplorerDemoModule } from '@src/app/portfolio/file-explorer-demo/file-explorer-demo.module';

@NgModule({
  imports: [
    BackyardPatioModule,
    PortfolioRoutingModule,
    CodeSnippetModule,
    CodeSnippetDemoModule,
    FileExplorerDemoModule,
    MissingDemoModule,
    FuzzDemoModule,
    CommonModule,
    MyCommonModule,
    FileExplorerModule,
    TooltipDemoModule,
    BarChartDemoModule,
    LineChartDemoModule,
  ],
  declarations: [
    PortfolioComponent,
  ],
  providers: [],
})
export class PortfolioModule { }
