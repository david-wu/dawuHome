import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceImagesComponent } from './image-source-images.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceImagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceImagesRoutingModule { }
