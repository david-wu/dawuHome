import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { CoronaComponent } from '@src/app/corona/corona.component';
import { CoronaFileViewerComponent } from '@src/app/corona/corona-file-viewer/corona-file-viewer.component';
import { CoronaRoutingModule } from '@src/app/corona/corona.routes';

import { CommonModule as MyCommonModule } from '@src/app/common/common.module';
import { FileExplorerModule } from '@src/app/file-explorer/file-explorer.module';
import { CoronaCompareDashboardComponent } from './corona-compare-dashboard/corona-compare-dashboard.component';
import { CoronaDashboardComponent } from './corona-dashboard/corona-dashboard.component';
import { LatestPointsViewerComponent } from './latest-points-viewer/latest-points-viewer.component';
import { SERVICES } from './services/index';

@NgModule({
    imports: [
        NgCommonModule,
        FormsModule,
        MatTableModule,
        MatSortModule,
        HttpClientModule,
        CoronaRoutingModule,
        MyCommonModule,
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
