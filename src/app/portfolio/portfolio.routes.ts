
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { DemoPageWrapperComponent as FuzzDemoPageComponent } from 'fuzz-demo-app';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
