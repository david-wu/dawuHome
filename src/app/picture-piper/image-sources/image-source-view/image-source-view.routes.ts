import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSourceViewComponent } from './image-source-view.component';

const routes: Routes = [
  {
    path: '',
    component: ImageSourceViewComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./image-source-overview/image-source-overview.module').then(m => m.ImageSourceOverviewModule)
      },
      {
        path: 'images',
        loadChildren: () => import('./image-source-images-view/image-source-images-view.module').then(m => m.ImageSourceImagesViewModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('./image-source-setup/image-source-setup.module').then(m => m.ImageSourceSetupModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSourceViewRoutingModule { }
