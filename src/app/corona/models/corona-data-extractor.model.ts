import {
    each,
    sortBy,
} from 'lodash';

export class CoronaDataExtractor {

    /**
     * getDateFromStr
     * Safari has troubles dealing with new Date("1-1-20")
     * @param {string} dateStr
     */
    public getDateFromStr(dateStr: string) {
        const splitDateStr = dateStr.split('-').map(Number);
        return new Date(
            splitDateStr[0],
            splitDateStr[1] - 1,
            splitDateStr[2],
        );
    }

    public clean(file) {
        const cleanData = [];

        // const dates = Object.keys(file.dates);
        const columns = new Set();
        const dateStrs = [];
        each(file.dates, (row: any, date: string) => {
            dateStrs.push(date);
            Object.keys(row).forEach((columnName: string) => {
                columns.add(columnName);
            });
        });

        const sortedDateStrs = sortBy(dateStrs, (dateStr) => +this.getDateFromStr(dateStr))

        let previousPoint = {
            cases: sortedDateStrs[0].cases || 0,
            new: sortedDateStrs[0].cases || 0,
            deaths: sortedDateStrs[0].deaths || 0,
            recovered: sortedDateStrs[0].recovered || 0,
        };
        sortedDateStrs.forEach((dateStr) => {
            const point = file.dates[dateStr];
            point.cases = point.cases || 0;
            point.deaths = point.deaths || 0;
            point.recovered = point.recovered || 0;

            const augmentedDataPoint = {
                ...file.dates[dateStr],
                dateStr: dateStr,
                date: this.getDateFromStr(dateStr),
                timestamp: +this.getDateFromStr(dateStr),
                cases: Math.max(point.cases, previousPoint.cases),
                deaths: Math.max(point.deaths, previousPoint.deaths),
                recovered: Math.max(point.recovered, previousPoint.recovered),
            };
            augmentedDataPoint.new = augmentedDataPoint.cases - previousPoint.cases;
            augmentedDataPoint.active = augmentedDataPoint.cases - augmentedDataPoint.new - augmentedDataPoint.deaths - augmentedDataPoint.recovered;
            augmentedDataPoint.active = Math.max(0, augmentedDataPoint.active);
            cleanData.push(augmentedDataPoint)
            previousPoint = augmentedDataPoint;
        });

        const clippedData = [];
        const firstNonZeroIndex = cleanData.findIndex((point) => point.cases !== 0);
        // includes a 0 datapoint at the beginning
        const clipIndex = Math.max(0, firstNonZeroIndex - 1);
        return cleanData.slice(clipIndex);
    }

    public getCaseSeries() {

    }

}

