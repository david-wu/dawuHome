import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    CoronaDataExtractor,
    CoronaKeys,
    NormalKeys,
} from '../models/index';

@Component({
  selector: 'dwu-corona-dashboard',
  templateUrl: './corona-dashboard.component.html',
  styleUrls: ['./corona-dashboard.component.scss']
})
export class CoronaDashboardComponent {

    @Input() coronaFile: any;
    @Input() disabledBarKeys = new Set<string>();
    @Output() disabledBarKeysChange = new EventEmitter<Set<string>>();
    @Input() disabledNormalKeys = new Set<string>();
    @Output() disabledNormalKeysChange = new EventEmitter<Set<string>>();

    public coronaData: any[];
    public normalizedData: any[];
    public coronaExtractor = new CoronaDataExtractor();
    public hoverIndex = 0;

    public readonly CoronaKeys = CoronaKeys;
    public readonly NormalKeys = NormalKeys;
    public readonly coronaKeys = [
        CoronaKeys.NEW,
        CoronaKeys.ACTIVE,
        CoronaKeys.RECOVERED,
        CoronaKeys.DEATHS,
    ];
    public readonly coronaColorsByKey = {
        [CoronaKeys.NEW]: '#ED9797',
        [CoronaKeys.ACTIVE]: '#AD3E3E',
        [CoronaKeys.RECOVERED]: '#34A2AA',
        [CoronaKeys.DEATHS]: '#2B1919',
    };

    public readonly normalKeys = [
        NormalKeys.CASES,
        NormalKeys.R,
        NormalKeys.NEW,
        NormalKeys.ACTIVE,
        NormalKeys.RECOVERED,
        NormalKeys.DEATHS,
        NormalKeys.R_AVG,
    ];
    public readonly normalColorsByKeys = {
        [NormalKeys.CASES]: '#2B1919',
        [NormalKeys.R]: '#34A2AA',
        [NormalKeys.NEW]: '#AD3E3E',
        [NormalKeys.ACTIVE]: '#ED9797',
        [NormalKeys.RECOVERED]: '#2B1919',
        [NormalKeys.DEATHS]: '#34A2AA',
        [NormalKeys.R_AVG]: '#AD3E3E',
    };

    public ngOnChanges(changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile);
            this.normalizedData = this.coronaExtractor.getNormalizedData(this.coronaData, this.coronaFile.population);
            this.hoverIndex = this.coronaData.length - 1;
        }
    }
}
