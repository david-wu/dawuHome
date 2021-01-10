import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageSourcesIntroComponent } from '@src/app/picture-piper/common/image-sources-intro/image-sources-intro.component';

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
