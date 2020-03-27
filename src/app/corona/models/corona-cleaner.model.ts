import { each } from 'lodash';

export class CoronaCleaner {

    public clean(file) {
        // const dates = Object.keys(file.dates);
        const columns = new Set();
        const dateStrs = [];
        each(file.dates, (row: any, date: string) => {
            dateStrs.push(date);
            Object.keys(row).forEach((columnName: string) => {
                columns.add(columnName);
            });
        });

        console.log(columns, dateStrs);
    }
}

