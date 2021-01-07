import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceSetupComponent } from './image-source-setup.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceSetupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceSetupRoutingModule { }
