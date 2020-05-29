import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageWrapperModule } from 'fuzz-demo-app';

import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { PortfolioRoutingModule } from '@src/app/portfolio/portfolio.routes';
import { CommonModule as MyCommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@file-explorer/file-explorer.module';

@NgModule({
  imports: [
    PortfolioRoutingModule,
    DemoPageWrapperModule,
    CommonModule,
    MyCommonModule,
    FileExplorerModule,
  ],
  declarations: [
    PortfolioComponent,
  ],
  providers: [],
})
export class PortfolioModule { }
