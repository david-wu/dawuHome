import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualScrollGridDemoComponent } from './virtual-scroll-grid-demo.component';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollGridDemoComponent,
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
export class VirtualScrollGridDemoRoutingModule { }
