import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoronaComponent } from '@src/app/corona/corona.component';
import { CoronaFileViewerComponent } from '@src/app/corona/corona-file-viewer/corona-file-viewer.component';
import { CoronaRoutes } from '@src/app/corona/corona.routes';

// import { AppModule as FuzzAppModule } from 'fuzz-demo-app';
import { CommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@src/app/file-explorer/file-explorer.module';
import { CoronaCompareDashboardComponent } from './corona-compare-dashboard/corona-compare-dashboard.component';
import { CoronaDashboardComponent } from './corona-dashboard/corona-dashboard.component';
import { LatestPointsViewerComponent } from './latest-points-viewer/latest-points-viewer.component';
import { SERVICES } from './services/index';

@NgModule({
    imports: [
        RouterModule.forChild(CoronaRoutes),
        FormsModule,
        // FuzzAppModule,
        MatTableModule,
        MatSortModule,
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
        CoronaCompareDashboardComponent,
        CoronaDashboardComponent,
        LatestPointsViewerComponent,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class CoronaModule { }
