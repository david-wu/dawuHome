import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { BarcelonaModule } from '@src/app/barcelona/barcelona.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeModule } from '@src/app/about-me/about-me.module'
import { PortfolioModule } from '@src/app/portfolio/portfolio.module';
import { CoronaModule } from '@src/app/corona/corona.module';

import { AppModule as FuzzAppModule } from 'fuzz-demo-app';

@NgModule({
  imports: [
    AboutMeModule,
    PortfolioModule,
    CoronaModule,
    FuzzAppModule,
    BrowserModule,
    AppRoutingModule,
    BarcelonaModule,
    NoopAnimationsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
      Location,
      { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
