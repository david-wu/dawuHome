// source - https://coronadatascraper.com/#timeseries-byLocation.json

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const countryNamesByCode = require('../data/country-names-by-code.json');
const stateNamesByCode = require('../data/state-names-by-code');
const timeSeriesByLocation = require('../data/timeseries-byLocation.json');
// const lockdownDates = require('../data/lockdown_dates.csv')
// console.log('lockdownDates', lockdownDates)
const ASSET_PATH = 'src/assets';
//
//

populateAssets();

async function populateAssets() {
    execSync(`rm -rf ${ASSET_PATH}/corona`);
    execSync(`mkdir -p ${ASSET_PATH}/corona/by-location`);

    recordStaticFiles();
    const fileNames = getFileNames(timeSeriesByLocation);
    recordTimeSeriesByLocation(timeSeriesByLocation);
    recordFileNames(fileNames);

    console.log('fileNames', fileNames)

}

function recordStaticFiles() {
    fs.writeFileSync(`${ASSET_PATH}/state-names-by-code.json`, JSON.stringify(stateNamesByCode));
    fs.writeFileSync(`${ASSET_PATH}/country-names-by-code.json`, JSON.stringify(countryNamesByCode));
}

function getFileNames(seriesByLocation) {
    const locations = Object.keys(seriesByLocation);
    return locations.map((location) => location.replace(/\//g, '-'));
}

function recordFileNames(fileNames) {
    fs.writeFileSync(`${ASSET_PATH}/corona/locations.json`, JSON.stringify(fileNames));
}

function recordTimeSeriesByLocation(seriesByLocation) {
    const locations = Object.keys(seriesByLocation);
    for(let i = 0 ; i < locations.length; i++) {
        const location = locations[i];
        const timeSeriesStr = JSON.stringify(seriesByLocation[location]);
        const fileName = location.replace(/\//g, '-');
        const filePath = path.join(`${ASSET_PATH}/corona/by-location`, `${fileName}.json`);
        fs.writeFileSync(filePath, timeSeriesStr);
    }
}

async function getLockdownDates() {
    fs.createReadStream('lockdown_dates.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const cleanLockdown = results.map((d) => {
                return _.mapValues(lockdownKeysByKeys, (key) => d[key]);
            });
            console.log(results, cleanLockdown);
            // [
            //   { NAME: 'Daffy Duck', AGE: '24' },
            //   { NAME: 'Bugs Bunny', AGE: '22' }
            // ]
        });
}



function parseTimeSeriesByLocation() {

}

// const locations = Object.keys(timeSeriesByLocation);
// const locationFileNames = [];
// for(let i = 0 ; i < locations.length; i++) {
//     const location = locations[i];
//     const timeSeriesStr = JSON.stringify(timeSeriesByLocation[location]);

//     const fileName = location.replace(/\//g, '-');
//     const filePath = path.join(`${ASSET_PATH}/by-location`, `${fileName}.json`);
//     fs.writeFileSync(filePath, timeSeriesStr);
//     locationFileNames.push(fileName);
// }

// execSync(`rm -rf ${ASSET_PATH}`);
// execSync(`mkdir -p ${ASSET_PATH}/by-location`);
// fs.writeFileSync(`${ASSET_PATH}/locations.json`, JSON.stringify(locationFileNames));


// const csv = require('csv-parser')
// const fs = require('fs')
// const results = [];
// const _ = require('lodash');

// const lockdownKeysByKeys = {
//     country: 'Country',
//     endDate: 'End date',
//     level: 'Level',
//     place: 'Place',
//     startDate: 'Start date',
// };

// fs.createReadStream('lockdown_dates.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         const cleanLockdown = results.map((d) => {
//             return _.mapValues(lockdownKeysByKeys, (key) => d[key]);
//         });
//         console.log(results, cleanLockdown);
//         // [
//         //   { NAME: 'Daffy Duck', AGE: '24' },
//         //   { NAME: 'Bugs Bunny', AGE: '22' }
//         // ]
//     });
