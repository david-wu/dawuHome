import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageStreamsComponent } from './image-streams.component';

const routes: Routes = [
  {
    path: '',
    component: ImageStreamsComponent,
    children: [
      // {
      //   path: 'intro',
      //   loadChildren: () => import('./image-streams-intro/image-streams-intro.module').then(m => m.ImageSourceIntroModule),
      // },
      // {
      //   path: ':imageSourceId',
      //   loadChildren: () => import('./image-source-view/image-source-view.module').then(m => m.ImageSourceViewModule)
      // },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'intro',
      // },
    ],
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'intro',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageStreamsRoutingModule { }
