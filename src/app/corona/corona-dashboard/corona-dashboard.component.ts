import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { round } from 'lodash';

import {
    CoronaDataExtractor,
    CoronaKeys,
    NormalKeys,
    Labels,
} from '../models/index';
import { getDateFromStr } from '@src/app/utils/index';

@Component({
  selector: 'dwu-corona-dashboard',
  templateUrl: './corona-dashboard.component.html',
  styleUrls: ['./corona-dashboard.component.scss']
})
export class CoronaDashboardComponent {

    @Input() lockdownInfo: any;
    @Input() coronaFile: any;
    @Input() disabledBarKeys = new Set<string>();
    @Output() disabledBarKeysChange = new EventEmitter<Set<string>>();
    @Input() disabledNormalKeys = new Set<string>();
    @Output() disabledNormalKeysChange = new EventEmitter<Set<string>>();

    @Input() isViewingNormalized: boolean = false;
    @Output() isViewingNormalizedChange = new EventEmitter<boolean>();
    @Input() isViewingLineChart: boolean = false;
    @Output() isViewingLineChartChange = new EventEmitter<boolean>();

    public coronaData: any[];
    public coronaExtractor = new CoronaDataExtractor();
    public hoverIndex = 0;
    public indicators;

    public readonly CoronaKeys = CoronaKeys;
    public readonly NormalKeys = NormalKeys;
    public readonly Labels = Labels;
    public readonly coronaKeys = [
        CoronaKeys.NEW,
        CoronaKeys.ACTIVE,
        CoronaKeys.RECOVERED,
        CoronaKeys.DEATHS,
    ];
    public readonly coronaViewKeys = [
        CoronaKeys.CASES,
        CoronaKeys.DATE_STR,
        CoronaKeys.NEW,
        CoronaKeys.ACTIVE,
        CoronaKeys.RECOVERED,
        CoronaKeys.DEATHS,
    ];
    public readonly perMilKeys = [
        NormalKeys.NEW,
        NormalKeys.ACTIVE,
        NormalKeys.RECOVERED,
        NormalKeys.DEATHS,
    ];
    public readonly perMilViewKeys = [
        NormalKeys.CASES,
        NormalKeys.DATE_STR,
        NormalKeys.NEW,
        NormalKeys.ACTIVE,
        NormalKeys.RECOVERED,
        NormalKeys.DEATHS,
    ];
    public readonly coronaColorsByKey = {
        [CoronaKeys.NEW]: '#ED9797',
        [CoronaKeys.ACTIVE]: '#AD3E3E',
        [CoronaKeys.RECOVERED]: '#34A2AA',
        [CoronaKeys.DEATHS]: '#2B1919',
        [NormalKeys.NEW]: '#ED9797',
        [NormalKeys.ACTIVE]: '#AD3E3E',
        [NormalKeys.RECOVERED]: '#34A2AA',
        [NormalKeys.DEATHS]: '#2B1919',
        [NormalKeys.CASES]: '#D6B902',
        [NormalKeys.R]: '#65635F',
        [NormalKeys.R_AVG]: '#1D62C4',
    };

    public readonly normalKeys = [
        NormalKeys.R,
        NormalKeys.R_AVG,
    ];
    public readonly normalizedViewKeys = [
        CoronaKeys.CASES,
        NormalKeys.DATE_STR,
        NormalKeys.R_AVG,
        NormalKeys.R,
    ];

    public ngOnChanges(changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile, this.coronaFile.population);
            this.hoverIndex = this.coronaData.length - 1;
        }
        if (changes.lockdownInfo) {
            if (this.lockdownInfo) {
                const startDate = getDateFromStr(this.lockdownInfo.startDate);
                const tenDaysLater = new Date(startDate);
                tenDaysLater.setDate(startDate.getDate() + 10);
                this.indicators = this.lockdownInfo && [
                    {
                        value: +startDate,
                        label: 'Start Lockdown',
                        color: '#164EB7',
                    },
                    {
                        value: +tenDaysLater,
                        label: '10 days of Lockdown',
                        color: '#729900',
                    },
                ];
            } else {
                this.indicators = undefined;
            }
        }
    }

    public onChangeNormalized(isViewingNormalized: boolean) {
        this.disabledBarKeysChange.emit(new Set());
        this.isViewingNormalized = isViewingNormalized;
        this.isViewingNormalizedChange.emit(isViewingNormalized);
    }

    public onChangeViewingLineChart(isViewingLineChart: boolean) {
        this.isViewingLineChart = isViewingLineChart;
        this.isViewingLineChartChange.emit(isViewingLineChart);
    }

    public toPercentage(d: number) {
        return `${round(d * 100, 3).toLocaleString()}%`;
    }
}
