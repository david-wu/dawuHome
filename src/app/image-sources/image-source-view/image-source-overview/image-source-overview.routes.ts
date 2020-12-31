import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceOverviewComponent } from './image-source-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceOverviewRoutingModule { }
