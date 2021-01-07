import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturePiperComponent } from './picture-piper.component';
// import { ImageSourcesModule } from '@app/picture-piper/image-sources';

const routes: Routes = [
  {
    path: 'intro',
    component: PicturePiperComponent,
  },
  {
    path: '',
    component: PicturePiperComponent,
    children: [
      {
        path: 'image-sources',
        loadChildren: () => import('@app/picture-piper/image-sources/image-sources.module').then(m => m.ImageSourcesModule)
      },
      {
        path: 'image-streams',
        loadChildren: () => import('@app/picture-piper/image-streams/image-streams.module').then(m => m.ImageStreamsModule)
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturePiperRoutingModule { }
