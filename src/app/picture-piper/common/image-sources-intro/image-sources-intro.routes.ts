import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourcesIntroComponent } from './image-sources-intro.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourcesIntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourcesIntroRoutingModule { }
