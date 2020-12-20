import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearMeComponent } from '@photo-gallery/near-me/near-me.component';
import { NearMeGridComponent } from '@photo-gallery/near-me/near-me-grid/near-me-grid.component';

const routes: Routes = [
  {
    path: '',
    component: NearMeComponent,
    children: [
      {
        path: 'grid',
        component: NearMeGridComponent,
      },
      {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NearMeRoutingModule { }
