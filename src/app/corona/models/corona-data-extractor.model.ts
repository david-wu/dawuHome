import {
    each,
    last,
    sortBy,
} from 'lodash';

import { NormalKeys } from './normal-keys.enum';
import { CoronaKeys } from './corona-keys.enum';
import { getDateFromStr } from '@src/app/utils/index';

export class CoronaDataExtractor {

    public cleanJh(fileData, population: number = 1) {
        const cleanData = [];

        fileData.forEach((point) => {
            const cleanPoint = {
                dateStr: point.dateStr,
                date: getDateFromStr(point.dateStr),
                timestamp: +getDateFromStr(point.dateStr),
                [CoronaKeys.CASES]: (point.cases || 0),
                [CoronaKeys.DEATHS]: (point.deaths || 0),
                [CoronaKeys.NEW_DEATHS]: (point.newDeaths || 0),
                [CoronaKeys.RECOVERED]: (point.recovered || 0),
                [CoronaKeys.NEW]: (point.new || 0),
            } as any;
            cleanPoint[CoronaKeys.ACTIVE] = cleanPoint.cases - cleanPoint.new - cleanPoint.recovered;
            cleanData.push(cleanPoint);
        });

        // if there is a hole in the data, this removes everything before that hole
        let spottyDataClipIndex = 0;
        const overOneDay = (1000 * 60 * 60 * 24) * 1.2;
        for(let i = 1; i < cleanData.length; i++) {
            const point = cleanData[i];
            const previousPoint = cleanData[i - 1];
            if (!previousPoint) {
                break;
            }
            if ((previousPoint.timestamp + overOneDay) < point.timestamp) {
                spottyDataClipIndex = i;
            }
        }
        const unspottyData = cleanData.slice(spottyDataClipIndex);

        // if there's a bunch leading 0's in the data, this removes them except the first 0
        const firstNonZeroIndex = unspottyData.findIndex((point) => point[CoronaKeys.CASES] !== 0);
        const clipIndex = Math.max(0, firstNonZeroIndex - 1);
        const oneLeadingZeroData = unspottyData.slice(clipIndex);

        let boringDataClipIndex = 0;
        const lastCases = last(oneLeadingZeroData).cases;
        for(let i = 1; i < oneLeadingZeroData.length; i++) {
            const point = oneLeadingZeroData[i];
            if ((point.cases < 100) && ((point.cases / lastCases) < 0.01)) {
                boringDataClipIndex = i;
            } else {
                break;
            }
        }
        const coolData = oneLeadingZeroData.slice(boringDataClipIndex);

        return this.getNormalizedData(coolData, population);
    }

    // public clean(file, population: number = 1) {
    //     const cleanData = [];

    //     // const dates = Object.keys(file.dates);
    //     const columns = new Set();
    //     const dateStrs = [];
    //     each(file.dates, (row: any, date: string) => {
    //         dateStrs.push(date);
    //         Object.keys(row).forEach((columnName: string) => {
    //             columns.add(columnName);
    //         });
    //     });

    //     const sortedDateStrs = sortBy(dateStrs, (dateStr) => +getDateFromStr(dateStr))

    //     let previousPoint = {
    //         cases: sortedDateStrs[0].cases || 0,
    //         new: sortedDateStrs[0].cases || 0,
    //         deaths: sortedDateStrs[0].deaths || 0,
    //         recovered: sortedDateStrs[0].recovered || 0,
    //     };
    //     sortedDateStrs.forEach((dateStr) => {
    //         const point = file.dates[dateStr];
    //         point[CoronaKeys.CASES] = point[CoronaKeys.CASES] || 0;
    //         point[CoronaKeys.DEATHS] = point[CoronaKeys.DEATHS] || 0;
    //         point[CoronaKeys.RECOVERED] = point[CoronaKeys.RECOVERED] || 0;

    //         const cleanPoint = {
    //             dateStr: dateStr,
    //             date: getDateFromStr(dateStr),
    //             timestamp: +getDateFromStr(dateStr),
    //             [CoronaKeys.CASES]: Math.max(point[CoronaKeys.CASES], previousPoint[CoronaKeys.CASES]),
    //             [CoronaKeys.DEATHS]: Math.max(point[CoronaKeys.DEATHS], previousPoint[CoronaKeys.DEATHS]),
    //             [CoronaKeys.RECOVERED]: Math.max(point[CoronaKeys.RECOVERED], previousPoint[CoronaKeys.RECOVERED]),
    //         } as any;
    //         cleanPoint[CoronaKeys.NEW] = cleanPoint[CoronaKeys.CASES] - previousPoint[CoronaKeys.CASES];
    //         cleanPoint[CoronaKeys.ACTIVE] = cleanPoint[CoronaKeys.CASES] - cleanPoint[CoronaKeys.NEW] - cleanPoint[CoronaKeys.DEATHS] - cleanPoint[CoronaKeys.RECOVERED];
    //         cleanPoint[CoronaKeys.ACTIVE] = Math.max(0, cleanPoint[CoronaKeys.ACTIVE]);
    //         cleanData.push(cleanPoint)
    //         previousPoint = cleanPoint;
    //     });

    //     // if there is a hole in the data, this removes everything before that hole
    //     let spottyDataClipIndex = 0;
    //     const overOneDay = (1000 * 60 * 60 * 24) * 1.2;
    //     for(let i = 1; i < cleanData.length; i++) {
    //         const point = cleanData[i];
    //         const previousPoint = cleanData[i - 1];
    //         if (!previousPoint) {
    //             break;
    //         }
    //         if ((previousPoint.timestamp + overOneDay) < point.timestamp) {
    //             spottyDataClipIndex = i;
    //         }
    //     }
    //     const unspottyData = cleanData.slice(spottyDataClipIndex);

    //     // if there's a bunch leading 0's in the data, this removes them except the first 0
    //     const firstNonZeroIndex = unspottyData.findIndex((point) => point[CoronaKeys.CASES] !== 0);
    //     const clipIndex = Math.max(0, firstNonZeroIndex - 1);
    //     const oneLeadingZeroData = unspottyData.slice(clipIndex);

    //     let boringDataClipIndex = 0;
    //     const lastCases = last(oneLeadingZeroData).cases;
    //     for(let i = 1; i < oneLeadingZeroData.length; i++) {
    //         const point = oneLeadingZeroData[i];
    //         if ((point.cases < 100) && ((point.cases / lastCases) < 0.01)) {
    //             boringDataClipIndex = i;
    //         } else {
    //             break;
    //         }
    //     }
    //     const coolData = oneLeadingZeroData.slice(boringDataClipIndex);

    //     return this.getNormalizedData(coolData, population);
    //     // return oneLeadingZeroData;
    // }

    public getNormalizedData(cleanData, population: number = 1) {
        const normalizedData = [];

        for(let i = 0; i < cleanData.length; i++) {
            const cleanPoint = cleanData[i];
            const previousCases = cleanPoint.cases - cleanPoint.new;
            const r = previousCases
                ? (cleanPoint.new / previousCases)
                : 1;
            const normalizedPoint = {
                ...cleanData[i],
                [NormalKeys.R]: r,
                [NormalKeys.CASES]: (cleanPoint.cases / population) * 1000000,
                [NormalKeys.NEW]: (cleanPoint.new / population) * 1000000,
                [NormalKeys.ACTIVE]: (cleanPoint.active / population) * 1000000,
                [NormalKeys.RECOVERED]: (cleanPoint.recovered / population) * 1000000,
                [NormalKeys.DEATHS]: (cleanPoint.deaths / population) * 1000000,
                [NormalKeys.NEW_DEATHS]: (cleanPoint.newDeaths || 0),
            };
            normalizedData.push(normalizedPoint);
        }

        for(let i = 0; i < cleanData.length; i++) {
            const ppPreviousPoint = cleanData[i - 3] || { cases: 0, new: 0 };
            const pPreviousPoint = cleanData[i - 2] || { cases: 0, new: 0 };
            const previousPoint = cleanData[i - 1] || { cases: 0, new: 0 };
            const point = cleanData[i];
            const nextPoint = cleanData[i + 1] || { cases: 0, new: 0 };
            const nNextPoint = cleanData[i + 2] || { cases: 0, new: 0 };

            const totalCases = [ppPreviousPoint, pPreviousPoint, previousPoint, point, nextPoint]
                .reduce((sum, point) => sum + point.cases, 0);
            const totalNew = [pPreviousPoint, previousPoint, point, nextPoint, nNextPoint]
                .reduce((sum, point) => sum + point.new, 0);

            const newR = totalCases ? (totalNew / totalCases) : 1;
            const clippedR = Math.min(newR, 1);
            normalizedData[i][NormalKeys.R_AVG] = clippedR;
        }
        return normalizedData;
    }

}

