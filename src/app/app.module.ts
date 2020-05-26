import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
// import { CoronaModule } from '@src/app/corona/corona.module';

@NgModule({
  imports: [
    NoopAnimationsModule,
    // CoronaModule,
    AppRoutingModule,
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
