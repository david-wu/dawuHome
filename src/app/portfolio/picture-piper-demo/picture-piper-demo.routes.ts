import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicturePiperDemoComponent } from './picture-piper-demo.component';
// import { CoronaModule } from '@src/app/corona/corona.module';
const routes: Routes = [
  {
    path: '',
    component: PicturePiperDemoComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@src/app/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturePiperDemoRoutingModule { }
