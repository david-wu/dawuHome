import {
    each,
    sortBy,
} from 'lodash';

export class CoronaDataExtractor {


    public labelsByColumn = {
        cases: 'Cases',


    };

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

        const sortedDateStrs = sortBy(dateStrs, (dateStr) => +new Date(dateStr))

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
                date: new Date(dateStr),
                timestamp: +new Date(dateStr),
                cases: Math.max(point.cases, previousPoint.cases),
                deaths: Math.max(point.deaths, previousPoint.deaths),
                recovered: Math.max(point.recovered, previousPoint.recovered),
            };
            augmentedDataPoint.new = augmentedDataPoint.cases - previousPoint.cases;
            augmentedDataPoint.active = augmentedDataPoint.cases - augmentedDataPoint.new - augmentedDataPoint.deaths - augmentedDataPoint.recovered;
            cleanData.push(augmentedDataPoint)
            previousPoint = augmentedDataPoint;
        });
        return cleanData;
    }

    public getCaseSeries() {

    }

}

