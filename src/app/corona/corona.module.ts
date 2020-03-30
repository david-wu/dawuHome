import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoronaComponent } from '@src/app/corona/corona.component';
import { CoronaFileViewerComponent } from '@src/app/corona/corona-file-viewer/corona-file-viewer.component';
import { CoronaRoutes } from '@src/app/corona/corona.routes';

import { AppModule as FuzzAppModule } from 'fuzz-demo-app';
import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@src/app/file-explorer/file-explorer.module';
import { CoronaService } from './services/corona.service';
import { LocalStorageService } from './services/localStorage.service';
import { CoronaDashboardComponent } from './corona-dashboard/corona-dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild(CoronaRoutes),
        FormsModule,
        FuzzAppModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        CommonModule,
        FileExplorerModule,
    ],
    declarations: [
        CoronaComponent,
        CoronaFileViewerComponent,
        CoronaDashboardComponent,
    ],
    providers: [
        CoronaService,
        LocalStorageService,
    ],
})
export class CoronaModule { }
