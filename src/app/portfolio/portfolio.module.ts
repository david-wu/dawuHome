import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageWrapperModule } from 'fuzz-demo-app';

import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { PortfolioRoutingModule } from '@src/app/portfolio/portfolio.routes';
import { CommonModule as MyCommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@file-explorer/file-explorer.module';
import { TooltipDemoModule } from '@src/app/portfolio/tooltip-demo/tooltip-demo.module';
import { BarChartDemoModule } from '@src/app/portfolio/bar-chart-demo/bar-chart-demo.module'

@NgModule({
  imports: [
    PortfolioRoutingModule,
    DemoPageWrapperModule,
    CommonModule,
    MyCommonModule,
    FileExplorerModule,
    TooltipDemoModule,
    BarChartDemoModule,
  ],
  declarations: [
    PortfolioComponent,
  ],
  providers: [],
})
export class PortfolioModule { }
