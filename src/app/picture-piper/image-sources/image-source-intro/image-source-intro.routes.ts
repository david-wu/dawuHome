import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceIntroComponent } from './image-source-intro.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceIntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceIntroRoutingModule { }
