import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePiperComponent } from '@pp/picture-piper.component';

const routes: Routes = [
  {
    path: '',
    component: PicturePiperComponent,
    children: [
      {
        path: 'intro',
        loadChildren: () => import('@app/picture-piper/common/picture-piper-intro/picture-piper-intro.module').then(m => m.PicturePiperIntroModule)
      },
      {
        path: 'image-sources',
        loadChildren: () => import('@app/picture-piper/image-sources/image-sources.module').then(m => m.ImageSourcesModule)
      },
      {
        path: 'image-streams',
        loadChildren: () => import('@app/picture-piper/image-streams/image-streams.module').then(m => m.ImageStreamsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intro',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturePiperRoutingModule { }
