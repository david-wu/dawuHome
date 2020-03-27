import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeRoutes } from './about-me/about-me.routes';
import { PortfolioRoutes } from './portfolio/portfolio.routes';
import { CoronaRoutes } from './corona/corona.routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portfolio'
  },
  {
    path: 'about-me',
    children: AboutMeRoutes,
  },
  {
    path: 'portfolio',
    children: PortfolioRoutes,
  },
  {
    path: 'corona',
    children: CoronaRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
