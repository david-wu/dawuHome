import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    round,
    set,
    mapValues,
} from 'lodash';
import * as d3 from 'd3';

import { FileGroup, FileType, File } from '@file-explorer/index';
import {
    CoronaDataExtractor,
    CoronaKeys,
    NormalKeys,
    Labels,
} from '../models/index';
import { getDateFromStr } from '@src/app/utils/index';

@Component({
  selector: 'dwu-corona-compare-dashboard',
  templateUrl: './corona-compare-dashboard.component.html',
  styleUrls: ['./corona-compare-dashboard.component.scss']
})
export class CoronaCompareDashboardComponent {

    @Input() coronaFilesWithFileId: Record<string, string>;
    @Input() populationsByFileId: any;
    @Input() filesById: Record<string, File>;

    public coronaExtractor = new CoronaDataExtractor();

    public compareData;
    public compareRData
    public compareKeys;
    public compareColorsByKey;
    public disabledCompareKeys;
    public hoverIndex = 0;
    public indicators;
    public compareLabelsByKey;
    public rFormattersByKeys;

    public isViewingNormalized = true;
    public selectedMetricIndex = 0;
    public readonly metricsByNormalized = {
        CASE: [
            CoronaKeys.CASES,
            CoronaKeys.NEW,
            CoronaKeys.ACTIVE,
            CoronaKeys.RECOVERED,
            CoronaKeys.DEATHS,
        ],
        NORM: [
            NormalKeys.CASES,
            NormalKeys.NEW,
            NormalKeys.ACTIVE,
            NormalKeys.RECOVERED,
            NormalKeys.DEATHS,
        ],
    }

    public isViewingRAvg = true;

    public readonly colorScheme = [
        '#B24C63',
        '#5438DC',
        '#357DED',
        '#56EEF4',
        '#92D5E6',
        '#772D8B',
        '#5A0B4D',
        '#A1EF8B',
    ];
    public readonly Labels = Labels;
    public readonly CoronaKeys = CoronaKeys
    public readonly NormalKeys = NormalKeys;

    public ngOnChanges(changes) {
        if (this.coronaFilesWithFileId && this.filesById) {
            this.setup(this.coronaFilesWithFileId, this.filesById, this.populationsByFileId)
        }
    }

    public onChangeNormalized(isViewingNormalized) {
        this.isViewingNormalized = isViewingNormalized;
        this.refreshCompareTable();
    }

    public onSelectMetricIndex(index) {
        this.selectedMetricIndex = index;
        this.refreshCompareTable();
    }

    public setViewingRAvg(isViewingRAvg) {
        this.isViewingRAvg = isViewingRAvg;
        this.refreshRTable();
    }

    public setup(coronaFilesWithFileId, filesById, populationsByFileId) {
        this.refreshCompareTable();
        this.refreshRTable()

        this.hoverIndex = this.compareData.length - 1;
        const fileIds = coronaFilesWithFileId.map(([coronaFile, fileId]: [any, string]) => fileId);
        this.compareKeys = fileIds;
        this.compareColorsByKey = {};
        this.compareLabelsByKey = {};
        this.rFormattersByKeys = {}
        this.compareKeys.forEach((key: string, index: number) => {
            const colorIndex = index % this.colorScheme.length;
            this.compareColorsByKey[key] = this.colorScheme[colorIndex];
            this.compareLabelsByKey[key] = this.filesById[key].label || key;
            this.rFormattersByKeys[key] = (d) => this.toPercentage(d);
        });
    }

    public getDataForMetric(coronaFilesWithFileId, metric) {
        const coronaFilesByFileId = {}
        coronaFilesWithFileId.forEach(([file, fileId]: [any, string]) => coronaFilesByFileId[fileId] = file);

        const dataByTimestamp = {};
        const fileIds = [];
        coronaFilesWithFileId.forEach(([coronaFile, fileId]: [any, string]) => {
            const cleanData = this.coronaExtractor.cleanJh(coronaFile, this.populationsByFileId[fileId]);
            fileIds.push(fileId);
            cleanData.forEach((column: any) => {
                set(dataByTimestamp, [column.timestamp, fileId], column[metric]);
                set(dataByTimestamp, [column.timestamp, CoronaKeys.TIMESTAMP], column.timestamp);
            });
        });

        const sortedTimestamps = Object.keys(dataByTimestamp).sort();
        return sortedTimestamps.map((timestamp: string) => dataByTimestamp[timestamp]);

    }

    public refreshCompareTable() {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        const selectedMetric = this.getSelectedMetric();
        this.compareData = this.getDataForMetric(this.coronaFilesWithFileId, selectedMetric);
    }

    public refreshRTable() {
        if (!this.coronaFilesWithFileId) {
            return;
        }
        this.compareRData = this.getDataForMetric(
            this.coronaFilesWithFileId,
            this.isViewingRAvg ? NormalKeys.R_AVG : NormalKeys.R,
        );
    }

    public getSelectedMetric() {
        return this.isViewingNormalized
            ? this.metricsByNormalized.NORM[this.selectedMetricIndex]
            : this.metricsByNormalized.CASE[this.selectedMetricIndex];

    }

    public toPercentage(d: number): string {
        const roundedPercent = round(d * 100, 2)
        return isNaN(roundedPercent) ? '' : `${roundedPercent}%`;
    }

}
