import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageStreamsIntroComponent } from './image-streams-intro.component';

const routes: Routes = [
  {
    path: '',
    component: ImageStreamsIntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageStreamsIntroRoutingModule { }
