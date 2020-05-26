import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'corona',
    loadChildren: () => import('./corona/corona.module').then(m => m.CoronaModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'corona'
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(
        routes,
        {
          useHash: true,
          preloadingStrategy: PreloadAllModules,
        },
      ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
