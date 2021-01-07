import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceImagesViewComponent } from './image-source-images-view.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceImagesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceImagesViewRoutingModule { }
