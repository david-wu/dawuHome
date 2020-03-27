// source - https://coronadatascraper.com/#timeseries-byLocation.json

const { execSync } = require('child_process');
const fs = require('fs');
const timeSeriesByLocation = require('./timeseries-byLocation.json');
const path = require('path');

const ASSET_PATH = 'src/assets/corona';

execSync(`rm -rf ${ASSET_PATH}`);
execSync(`mkdir -p ${ASSET_PATH}/by-location`);
const locations = Object.keys(timeSeriesByLocation);
const locationFileNames = [];
for(let i = 0 ; i < locations.length; i++) {
    const location = locations[i];
    const timeSeriesStr = JSON.stringify(timeSeriesByLocation[location]);

    const fileName = location.replace(/\//g, '-');
    const filePath = path.join(`${ASSET_PATH}/by-location`, `${fileName}.json`);
    fs.writeFileSync(filePath, timeSeriesStr);
    locationFileNames.push(fileName);
}

fs.writeFileSync(`${ASSET_PATH}/locations.json`, JSON.stringify(locationFileNames));
