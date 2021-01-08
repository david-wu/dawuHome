import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageStreamOverviewComponent } from './image-stream-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ImageStreamOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageStreamOverviewRoutingModule { }
