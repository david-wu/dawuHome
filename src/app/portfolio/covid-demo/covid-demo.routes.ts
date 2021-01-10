import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidDemoComponent } from '@src/app/portfolio/covid-demo/covid-demo.component';
// import { CoronaModule } from '@src/app/corona/corona.module';
const routes: Routes = [
  {
    path: '',
    component: CovidDemoComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@src/app/corona/corona.module').then(m => m.CoronaModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidDemoRoutingModule { }
