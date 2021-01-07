import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourcesComponent } from './image-sources.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourcesComponent,
    children: [
      {
        path: 'intro',
        loadChildren: () => import('./image-source-intro/image-source-intro.module').then(m => m.ImageSourceIntroModule),
      },
      {
        path: ':imageSourceId',
        loadChildren: () => import('./image-source-view/image-source-view.module').then(m => m.ImageSourceViewModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intro',
      },
    ],
  },





  // {
  //   path: 'intro',
  //   component: ImageSourcesComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./image-source-intro/image-source-intro.module').then(m => m.ImageSourceIntroModule),
  //     },
  //   ],
  // },
  // {
  //   path: ':imageSourceId',
  //   component: ImageSourcesComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./image-source-view/image-source-view.module').then(m => m.ImageSourceViewModule)
  //     },
  //   ],
  // },
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
export class ImageSourcesRoutingModule { }
