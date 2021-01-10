import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePiperIntroComponent } from '@src/app/picture-piper/common/picture-piper-intro/picture-piper-intro.component';

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
