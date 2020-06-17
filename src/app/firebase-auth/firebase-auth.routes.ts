import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseAuthComponent } from '@src/app/firebase-auth/firebase-auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: FirebaseAuthComponent
  },
  {
    path: 'auth-success',
    component: FirebaseAuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseAuthRoutingModule { }
