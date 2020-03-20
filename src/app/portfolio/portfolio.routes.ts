
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
import { DemoPageWrapperComponent as FuzzDemoPageComponent } from 'fuzz-demo-app';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    redirectTo: 'fuzz',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'overview',
        component: FuzzDemoPageComponent,
      },
      {
        path: 'fuzz',
        component: FuzzDemoPageComponent,
      },
    ],
  },
];
