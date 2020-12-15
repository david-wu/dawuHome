import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '@src/app/portfolio/portfolio.component';
// import { DemoPageWrapperComponent } from 'fuzz-demo-app';

import { BackyardPatioComponent } from './backyard-patio/backyard-patio.component';
import { BarChartDemoComponent } from './bar-chart-demo/bar-chart-demo.component';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { FuzzDemoComponent } from './fuzz-demo/fuzz-demo.component'
import { MissingDemoComponent } from '@src/app/portfolio/missing-demo/missing-demo.component';
import { CodeSnippetDemoComponent } from './code-snippet-demo/code-snippet-demo.component';
import { FileExplorerDemoComponent } from './file-explorer-demo/file-explorer-demo.component';
import { ChartLegendDemoComponent } from './chart-legend-demo/chart-legend-demo.component';
// console.log('DemoPageWrapperComponent', DemoPageWrapperComponent)

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'BACKYARD_PATIO',
        component: BackyardPatioComponent,
      },
      {
        path: 'PHOTO_APP',
        loadChildren: () => import('../photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
      },
      {
        path: 'ML_APP',
        loadChildren: () => import('../ml-app/ml-app.module').then(m => m.MlAppModule)
      },
      {
        path: 'FUZZ',
        component: FuzzDemoComponent,
      },
      {
        path: 'BAR_CHART',
        component: BarChartDemoComponent,
      },
      {
        path: 'LINE_CHART',
        component: LineChartDemoComponent,
      },
      {
        path: 'CHART_LEGEND',
        component: ChartLegendDemoComponent,
      },
      {
        path: 'TOOLTIP',
        component: TooltipDemoComponent,
      },
      {
        path: 'CODE_SNIPPET',
        component: CodeSnippetDemoComponent,
      },
      {
        path: 'FILE_EXPLORER',
        component: FileExplorerDemoComponent,
      },
      {
        path: 'VIRTUAL_SCROLL_GRID',
        loadChildren: () => import('./virtual-scroll-grid-demo/virtual-scroll-grid-demo.module').then(m => m.VirtualScrollGridDemoModule)
      },
      {
        path: ':tab',
        pathMatch: 'full',
        component: MissingDemoComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'BACKYARD_PATIO',
      },
    ]
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
export class PortfolioRoutingModule { }
