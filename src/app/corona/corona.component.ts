import { Component } from '@angular/core';
import {
    each,
    keyBy,
    set,
    last,
    isString,
} from 'lodash';

import coronaLocations from '@src/assets/corona/locations.json';
import countryNamesByCode from '@src/assets/corona/country-names-by-code.json';
import stateNamesByCode from '@src/assets/corona/state-names-by-code.json';
import { FileGroup, FileType, File } from '@file-explorer/index';
import { breadthFirstBy } from '@utils/index';

@Component({
  selector: 'corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent {

    public fileGroup: FileGroup = new FileGroup();
    public locationsByFileId: Record<string, string> = {};
    public fileIdsByLocation: Record<string, string> = {};

    /**
     * ngOnInit
     */
    public ngOnInit() {
        this.populateFileGroup();
        this.fileGroup.focusOnSelected();
    }

    /**
     * populateFileGroup
     * Puts data from coronaLocations into fileGroup
     */
    public populateFileGroup() {
        const locationRoot = this.fileGroup.createFile({ label: 'Locations' });
        this.fileGroup.setRootFile(locationRoot);

        const nestedCoronaLocations = this.getNestedCoronaLocations(coronaLocations);

        // setFileGroup just batches file creations, make sure to flush
        this.setFileGroup(locationRoot, nestedCoronaLocations);
        this.fileGroup.flush();

        this.fileGroup.setSelectedFileIds(new Set([
            this.fileIdsByLocation['Santa Clara County, CA, USA'],
        ]));
    }

    /**
     * getNestedCoronaLocations
     * This returns a nested format that represents the final files
     * @param {string[]} coronaLocations
     */
    public getNestedCoronaLocations(coronaLocations: string[]) {
        const nestedCoronaLocations = {};
        coronaLocations.forEach((coronaLocation: string) => {
            const splitLocation = this.decorateAndSplitLocation(coronaLocation);
            set(nestedCoronaLocations, splitLocation, coronaLocation);
        });
        return nestedCoronaLocations;
    }

    /**
     * decorateAndSplitLocation
     * Replaces country and state codes
     * Adds "State Total" to indexes and "Others" to countries with no nested data
     * @param {string} coronaLocation
     */
    public decorateAndSplitLocation(coronaLocation: string) {
        const splitLocation = coronaLocation.split(', ').reverse();
        if (splitLocation[0] === 'USA') {
            // no county label means it's state summary data
            if (splitLocation.length === 2) {
                splitLocation.push('State Total');
            }
            splitLocation[1] = stateNamesByCode[splitLocation[1]] || splitLocation[1];
        }
        splitLocation[0] = countryNamesByCode[splitLocation[0]] || splitLocation[0];
        if (splitLocation.length === 1) {
            splitLocation.unshift('Others');
        }
        return splitLocation;
    }

    /**
     * setFileGroup
     * Uses the nestedLocations to create files in this.fileGroup
     * Also sets locationsByFileId for referencing files later on.
     * @param {File} node
     * @param {any}  nestedLocations
     */
    public setFileGroup(node: File, nestedLocations: any) {
        if (isString(nestedLocations)) {
            this.locationsByFileId[node.id] = nestedLocations;
            this.fileIdsByLocation[nestedLocations] = node.id;
            return;
        }
        const locations = Object.keys(nestedLocations).sort();
        each(locations, (location: string) => {
            // batchCreateFile is more performant, make sure to flush
            const childNode = this.fileGroup.batchCreateFile({
                label: location,
            });
            this.fileGroup.batchAddAsChild(node, childNode);
            this.setFileGroup(childNode, nestedLocations[location]);
        });
    }

    /**
     * getSelectedFileId
     * @return {string}
     */
    public getSelectedFileId(): string {
        const selectedFileIds = Array.from(this.fileGroup.selectedFileIds || [])
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    }

}
