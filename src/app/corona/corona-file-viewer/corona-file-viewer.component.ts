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
import { mapValues } from 'lodash';

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

    @Input() selectedFileIds: Set<string>;
    @Input() locationsByFileId: Record<string, string>;
    @Input() filesById: Record<string, File>;
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
    public locationsByFileId$ = new BehaviorSubject<Record<string, string>>(undefined);
    public filesById$ = new BehaviorSubject<Record<string, File>>(undefined);
    public totalPopulation$: Observable<number>;

    public coronaFiles$: Observable<any>;
    public latestCoronaFilesWithFileId$: Observable<any>;
    public isLoading$: Observable<boolean>;
    // public fileUrl: string;
    public readonly lockdownDataByLocation = lockdownDataByLocation;

    constructor(public coronaService: CoronaService) {

        // type: [location, fileId][]
        const selectedlocationsWithFileId$: Observable<[string, string][]> = combineLatest(
            this.selectedFileIds$,
            this.locationsByFileId$,
            this.filesById$,
            (fileIds: Set<string>, locationsByFileId: Record<string, string>, filesById: Record<string, File>) => {
                if (!fileIds || !locationsByFileId || !filesById) {
                    return;
                }

                const locationsWithFileId = [];
                Array.from(fileIds).forEach((fileId: string) => {
                    const file = filesById[fileId];
                    const location = locationsByFileId[fileId];
                    if (location) {
                        locationsWithFileId.push([location, file.id]);
                    }
                })
                return locationsWithFileId;
            },
        );

        const coronaFilesWithFileId$: Observable<[File, string][]> = selectedlocationsWithFileId$.pipe(
            switchMap((locationsWithFileId: [string, string][]) => {
                if (!locationsWithFileId) {
                    return of(undefined);
                }
                const requests$ = locationsWithFileId.map((locationWithFileId: [string, string]) => {
                   return this.coronaService.getCoronaFileByLocation(locationWithFileId[0]);
                });
                return forkJoin(requests$).pipe(
                    map((files: File[]) => {
                        return files.map((file: File, index: number) => [file, locationsWithFileId[index][1]]);
                    }),
                    startWith(undefined),
                );
            }),
            shareReplay(1),
        );
        this.latestCoronaFilesWithFileId$ = coronaFilesWithFileId$.pipe(
            filter(Boolean),
        );

        this.totalPopulation$ = coronaFilesWithFileId$.pipe(
            map((coronaFilesWithFileId: [any, string]) => {
                if (!coronaFilesWithFileId) {
                    return 0;
                }
                return coronaFilesWithFileId.reduce((sum: number, [coronaFile, fileId]: [any, string]) => {
                    return sum + (coronaFile.population || 0);
                }, 0);
            }),
        )
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

    public getHeader() {
        const fileIds = Array.from(this.selectedFileIds || []);
        if (this.isComparing) {
            return `Comparing ${fileIds.length} locations`;
        }
        return this.filesById && this.filesById[fileIds[0]] && this.filesById[fileIds[0]].label;

        // const labels = fileIds.map((fileId: string) => {
        //     return this.filesById && this.filesById[fileId] && this.filesById[fileId].label;
        // }).filter(Boolean);
        // return labels.join(', ');
    }

    public getFirstSelectedFileLockdownInfo() {
        const fileId = Array.from(this.selectedFileIds || [])[0];
        const location = this.locationsByFileId && this.locationsByFileId[fileId];
        return this.lockdownDataByLocation && this.lockdownDataByLocation[location]
    }

}
