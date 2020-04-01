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
} from 'rxjs';
import {
    filter,
    startWith,
    switchMap,
    map,
    shareReplay,
} from 'rxjs/operators';

import lockdownDataByLocation from '@src/assets/corona/lockdown-data-by-location.json';
import { FileGroup, FileType, File } from '@file-explorer/index';
import { breadthFirstBy } from '@utils/index';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'dwu-corona-file-viewer',
  templateUrl: './corona-file-viewer.component.html',
  styleUrls: ['./corona-file-viewer.component.scss']
})
export class CoronaFileViewerComponent {

    @Input() location: string;
    @Input() fileName: string;
    @Input() disabledBarKeys = new Set<string>();
    @Output() disabledBarKeysChange = new EventEmitter<Set<string>>();
    @Input() disabledNormalKeys = new Set<string>();
    @Output() disabledNormalKeysChange = new EventEmitter<Set<string>>();
    @Input() isViewingNormalized: boolean = false;
    @Output() isViewingNormalizedChange = new EventEmitter<boolean>();
    @Input() isViewingLineChart: boolean = false;
    @Output() isViewingLineChartChange = new EventEmitter<boolean>();

    public location$ = new BehaviorSubject(undefined);
    public coronaFile$: Observable<any>;
    public latestCoronaFile$: Observable<any>;
    public isLoading$: Observable<boolean>;
    public fileUrl: string;
    public readonly lockdownDataByLocation = lockdownDataByLocation;

    constructor(public coronaService: CoronaService) {
        this.coronaFile$ = this.location$.pipe(
            switchMap((location: string) => {
                if (!location) {
                    return of(undefined);
                }
                this.fileUrl = this.coronaService.getCoronaFileUrl(location);
                return this.coronaService.getCoronaFileByLocation(location).pipe(
                    startWith(undefined),
                );
            }),
            shareReplay(1),
        );
        this.latestCoronaFile$ = this.coronaFile$.pipe(
            filter(Boolean),
        );
        this.isLoading$ = this.location$.pipe(
            switchMap((location: string) => {
                return this.coronaFile$.pipe(
                    map((file: any) => Boolean(location && !file)),
                );
            }),
        );
    }

    public ngOnChanges(changes) {
        if (changes.location) {
            this.location$.next(this.location);
        }
    }

}
