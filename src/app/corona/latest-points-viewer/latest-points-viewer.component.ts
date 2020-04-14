import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    of,
    forkJoin,
    combineLatest,
} from 'rxjs';
import {
    filter,
    startWith,
    switchMap,
    map,
    shareReplay,
} from 'rxjs/operators';
import {
    mapValues,
    fromPairs,
    zip,
} from 'lodash';

import populationDataByFileName from '@src/assets/jh-corona/population-by-file-name.json';
import lockdownDataByLocation from '@src/assets/jh-corona/lockdown-data-by-file-name.json';
import { FileGroup, FileType, File } from '@file-explorer/index';
import { breadthFirstBy } from '@utils/index';
import {
    CoronaService,
    CoronaStoreService,
} from '../services/index';

@Component({
  selector: 'dwu-latest-points-viewer',
  templateUrl: './latest-points-viewer.component.html',
  styleUrls: ['./latest-points-viewer.component.scss']
})
export class LatestPointsViewerComponent {

    @Input() locations: string[];

    public tableData$: Observable<any[]>;
    public displayedColumns = ['location', 'cases', 'new', 'deaths', 'newDeaths'];

    constructor(
        public coronaService: CoronaService,
        public coronaStoreService: CoronaStoreService,
    ) {
        this.tableData$ = this.coronaStoreService.latestPointsByLocation$.pipe(
            map((latestPointsByLocation: Record<string, any>) => {
                const latestPointData = latestPointsByLocation[this.locations[0]] || {};
                const locations = Object.keys(latestPointData);
                return locations.map((location: string) => {
                    return {
                        ...latestPointData[location],
                        location,
                    };
                });
            }),
        );
    }

    public ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            const requests$ = this.locations.map((location: string) => {
                return this.coronaService.getCoronaLatestPoints(location);
            });
            const sub = forkJoin(requests$).pipe(
                map((files: File[]) => fromPairs(zip(this.locations, files))),
                startWith(undefined),
            ).subscribe((fileData: Record<string, any>) => {
                this.coronaStoreService.setLastestPointsData(fileData);
            });
        }
    }

    public onSortChange(sort) {
        console.log('onSortChange', sort);
    }

}
