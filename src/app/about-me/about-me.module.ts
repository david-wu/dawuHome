import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@src/app/app.component';
import { AboutMeComponent } from '@src/app/about-me/about-me.component';
import { AboutMeRoutingModule } from '@src/app/about-me/about-me.routes';

@NgModule({
  declarations: [
    AboutMeComponent,
  ],
  imports: [
    AboutMeRoutingModule,
    CommonModule,
  ],
  exports: [
    AboutMeComponent,
  ],
  providers: [],
})
export class AboutMeModule { }
