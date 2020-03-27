
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaComponent } from '@src/app/corona/corona.component';
import { DemoPageWrapperComponent as FuzzDemoPageComponent } from 'fuzz-demo-app';

export const CoronaRoutes: Routes = [
  {
    path: '',
    component: CoronaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
