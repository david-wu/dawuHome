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
    every,
    mapValues,
    fromPairs,
    zip,
} from 'lodash';

import populationDataByLocation from '@src/assets/jh-corona/population-by-file-name.json';
// import lockdownDataByLocation from '@src/assets/corona/lockdown-data-by-location.json';
import lockdownDataByLocation from '@src/assets/jh-corona/lockdown-data-by-file-name.json';
import { FileGroup, FileType, File } from '@file-explorer/index';
import { breadthFirstBy } from '@utils/index';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'dwu-corona-file-viewer',
  templateUrl: './corona-file-viewer.component.html',
  styleUrls: ['./corona-file-viewer.component.scss']
})
export class CoronaFileViewerComponent {

    @Input() selectedFileIds: Set<string>;
    @Input() filesById: Record<string, File>;
    @Input() locationsByFileId: Record<string, string>;
    @Input() isComparing: boolean = false;

    @Input() disabledBarKeys = new Set<string>();
    @Output() disabledBarKeysChange = new EventEmitter<Set<string>>();
    @Input() disabledNormalKeys = new Set<string>();
    @Output() disabledNormalKeysChange = new EventEmitter<Set<string>>();
    @Input() isViewingNormalized: boolean = false;
    @Output() isViewingNormalizedChange = new EventEmitter<boolean>();
    @Input() isViewingLineChart: boolean = false;
    @Output() isViewingLineChartChange = new EventEmitter<boolean>();

    public selectedFileIds$ = new BehaviorSubject<Set<string>>(undefined);
    public filesById$ = new BehaviorSubject<Record<string, File>>(undefined);
    public locationsByFileId$ = new BehaviorSubject<Record<string, string>>(undefined);
    public totalPopulation$: Observable<number>;
    public populationsByFileId$: Observable<any>;
    public firstCoronaFile$: Observable<any>;

    public locationsWithLatestPointData$: Observable<string[]>;
    public coronaFiles$: Observable<any>;
    public latestCoronaFilesWithFileId$: Observable<any>;
    public isLoading$: Observable<boolean>;
    // public fileUrl: string;
    public readonly lockdownDataByLocation = lockdownDataByLocation;

    constructor(public coronaService: CoronaService) {

        const coronaDataByFileId$ = combineLatest(
            this.selectedFileIds$,
            this.locationsByFileId$,
        ).pipe(
            switchMap(([fileIdSet, locationsByFileId]: [Set<string>, Record<string, string>]) => {
                const fileIds = Array.from(fileIdSet);
                const requests$ = fileIds.map((fileId: string) => {
                   return this.coronaService.getCoronaFileByLocation(locationsByFileId[fileId]);
                });
                return forkJoin(requests$).pipe(
                    map((files: File[]) => fromPairs(zip(fileIds, files))),
                    startWith(undefined),
                );
            }),
            shareReplay(1),
        );
        this.isLoading$ = combineLatest(
            this.selectedFileIds$,
            coronaDataByFileId$,
            (selectedFileIds: Set<string>, coronaDataByFileId: Record<string, any>) => {
                return Boolean(selectedFileIds && !coronaDataByFileId);
            },
        );
        this.latestCoronaFilesWithFileId$ = combineLatest(
            this.selectedFileIds$,
            coronaDataByFileId$,
            (fileIdSet: Set<string>, coronaDataByFileId: Record<string, any>) => {
                if (!fileIdSet || !coronaDataByFileId) {
                    return;
                }
                return Array.from(fileIdSet).map((fileId) => [coronaDataByFileId[fileId], fileId])
            }
        ).pipe(filter(Boolean));
        this.firstCoronaFile$ = combineLatest(
            this.selectedFileIds$,
            coronaDataByFileId$,
            (fileIdSet: Set<string>, coronaDataByFileId: Record<string, any>) => {
                const selectedFileId = Array.from(fileIdSet)[0];
                return coronaDataByFileId && coronaDataByFileId[selectedFileId];
            }
        ).pipe(filter(Boolean));

        this.populationsByFileId$ = this.locationsByFileId$.pipe(
            map((locationsByFileId: Record<string, string>) => {
                return mapValues(locationsByFileId, (location: string) => {
                    return populationDataByLocation[location];
                });
            }),
        );
        this.totalPopulation$ = combineLatest(
            this.selectedFileIds$,
            this.populationsByFileId$,
            (fileIdSet: Set<string>, populationByFileId: Record<string, number>) => {
                return Array.from(fileIdSet).reduce((sum: number, fileId: string) => {
                    return sum + Number((populationByFileId[fileId] || 0));
                }, 0);
            },
        );

        this.locationsWithLatestPointData$ = combineLatest(
            this.selectedFileIds$,
            this.filesById$,
            this.locationsByFileId$,
            (
                selectedFileIds: Set<string>,
                filesById: Record<string, File>,
                locationsByFileId: Record<string, string>,
            ) => {
                return Array.from(selectedFileIds)
                    .filter((fileId: string) => filesById[fileId].childIds)
                    .map((fileId: string) => locationsByFileId[fileId]);
            }
        );

        // const latestPointDataByFileId$ = combineLatest(
        //     this.selectedFileIds$,
        //     this.filesById$,
        //     this.locationsByFileId$,
        // ).pipe(
        //     filter((args: any[]) => every(args, Boolean)),
        //     switchMap(([fileIdSet, filesById, locationsByFileId]: [Set<string>, Record<string, any>, Record<string, string>]) => {
        //         const filesIds = Array.from(fileIdSet)
        //             .filter((fileId: string) => filesById[fileId].childIds);

        //         const requests$ = filesIds.map((fileId: string) => {
        //            return this.coronaService.getCoronaLatestPoints(locationsByFileId[fileId]);
        //         });
        //         return forkJoin(requests$).pipe(
        //             map((files: File[]) => fromPairs(zip(filesIds, files))),
        //             startWith(undefined),
        //         );
        //     }),
        //     shareReplay(1),
        // );
        // latestPointDataByFileId$.subscribe(console.log);

    }

    public ngOnChanges(changes) {
        if (changes.selectedFileIds) {
            this.selectedFileIds$.next(this.selectedFileIds);
        }
        if (changes.locationsByFileId) {
            this.locationsByFileId$.next(this.locationsByFileId);
        }
        if (changes.filesById) {
            this.filesById$.next(this.filesById);
        }
    }

    public getHeaderText() {
        const fileIds = Array.from(this.selectedFileIds || []);
        if (this.isComparing) {
            return `Comparing ${fileIds.length} locations`;
        }
        return this.filesById && this.filesById[fileIds[0]] && this.filesById[fileIds[0]].label;
    }

    public getFirstSelectedFileLockdownInfo() {
        const fileId = Array.from(this.selectedFileIds || [])[0];
        const location = this.locationsByFileId && this.locationsByFileId[fileId];
        return this.lockdownDataByLocation && this.lockdownDataByLocation[location]
    }



}
