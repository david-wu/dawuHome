import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturePiperIntroComponent } from './picture-piper-intro.component';

const routes: Routes = [
  {
    path: '',
    component: PicturePiperIntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturePiperIntroRoutingModule { }
