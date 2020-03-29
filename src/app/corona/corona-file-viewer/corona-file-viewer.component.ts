import {
    Component,
    Input,
} from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    of,
} from 'rxjs';
import {
    startWith,
    switchMap,
    map,
    shareReplay,
} from 'rxjs/operators';

import coronaLocations from '@src/assets/corona/locations.json';
import countryNamesByCode from '@src/assets/country-names-by-code.json';
import stateNamesByCode from '@src/assets/state-names-by-code.json';
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
    public location$ = new BehaviorSubject(undefined);
    public coronaFile$: Observable<any>;
    public isLoading$: Observable<boolean>;
    public fileUrl: string;
    public readonly countryNamesByCode = countryNamesByCode;

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
