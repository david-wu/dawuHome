import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { PortfolioRoutes } from '@src/app/portfolio/portfolio.routes';

import { AppModule } from 'fuzz-demo-app';
import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@src/app/file-explorer/file-explorer.module';

@NgModule({
  imports: [
    RouterModule.forChild(PortfolioRoutes),
    FormsModule,
    AppModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonModule,
    FileExplorerModule,
  ],
  declarations: [
    PortfolioComponent,
  ],
  providers: [],
})
export class PortfolioModule { }
