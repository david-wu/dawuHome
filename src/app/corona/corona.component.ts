import { Component } from '@angular/core';
import {
    each,
    keyBy,
    get,
    set,
    last,
    isString,
} from 'lodash';
import { Subscription } from 'rxjs';

import lockdownDataByLocation from '@src/assets/corona/lockdown-data-by-location.json';
import coronaLocations from '@src/assets/corona/locations.json';
import countryNamesByCode from '@src/assets/country-names-by-code.json';
import stateNamesByCode from '@src/assets/state-names-by-code.json';
import { LocalStorageService } from '@src/app/corona/services/localStorage.service';
import { FileGroup, FileType, File } from '@file-explorer/index';
import { breadthFirstBy } from '@utils/index';
import { NormalKeys } from '@src/app/corona/models/index';

enum Tab {
    ALL = 'ALL',
    SAVED = 'SAVED',
    COMPARE = 'COMPARE',
}

@Component({
  selector: 'dwu-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent {

    public fileGroup: FileGroup = new FileGroup();
    public locationsByFileId: Record<string, string> = {};
    public fileIdsByLocation: Record<string, string> = {};
    public locationRoot: File;
    public favoritesRootId: string;
    public favoriteFileIds: Set<string> = new Set();
    public filterStr: string = '';
    public disabledBarKeys = new Set<string>();
    public disabledNormalKeys = new Set<string>([NormalKeys.R]);
    public isViewingNormalized: boolean = false;
    public isViewingLineChart: boolean = false;
    public selectedTab: Tab;
    public compareSelectedFileIds = new Set<string>();
    public subs = new Subscription();
    public closedFileIdsWhileQuery = new Set<string>();
    public leftSideExpanded = false;

    public readonly Tab = Tab;
    public readonly lockdownDataByLocation = lockdownDataByLocation;

    /**
     * ngOnInit
     */
    constructor(
        public localStorageService: LocalStorageService,
    ) {
        this.populateFileGroup();
        this.fileGroup.closeAllFolders();
        this.fileGroup.closedFileIds.delete(this.favoritesRootId);
        this.fileGroup.closedFileIds.delete(this.locationRoot.id);
        this.loadFavorites();
        this.setSelectedTab(Tab.SAVED)
    }

    public onSelectedFileIdsChange(selectedFileIds: Set<string>) {
        if (this.selectedTab === Tab.COMPARE) {
            this.compareSelectedFileIds = selectedFileIds;
        } else {
            this.fileGroup.setSelectedFileIds(selectedFileIds)
        }
    }

    public setSelectedTab(tab: Tab) {
        this.selectedTab = tab;
        if (tab === Tab.SAVED) {
            this.fileGroup.rootFileId = this.favoritesRootId;
        } else if (tab === Tab.ALL) {
            this.fileGroup.setRootFile(this.locationRoot);
        } else if (tab === Tab.COMPARE) {
            this.fileGroup.setRootFile(this.locationRoot);
        }
        this.filterStr = '';
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

    public onFilterStringChange(filterStr: string) {
        if (filterStr && this.selectedTab === Tab.SAVED) {
            this.setSelectedTab(Tab.ALL);
        }
        this.filterStr = filterStr;
    }

    public loadFavorites() {
        const favoriteLocations = this.localStorageService.getFavoriteLocations();
        const favoriteIds = favoriteLocations.map((location: string) => this.fileIdsByLocation[location]);
        this.fileGroup.filesById[this.favoritesRootId].childIds = favoriteIds;
        this.favoriteFileIds = new Set(favoriteIds);
        this.compareSelectedFileIds = new Set(favoriteIds);
        if (favoriteIds.length) {
            this.fileGroup.setSelectedFileIds(new Set([favoriteIds[0]]));
        }
    }

    public saveFavorites() {
        const locations = this.fileGroup.filesById[this.favoritesRootId].childIds
            .map((fileId: string) => this.locationsByFileId[fileId]);
        this.localStorageService.setFavoriteLocations(locations);
    }

    public toggleFavoriteFile(file: File, event: Event) {
        event.stopPropagation();
        if (this.favoriteFileIds.has(file.id)) {
            this.favoriteFileIds.delete(file.id)
            this.fileGroup.removeAsChildId(this.favoritesRootId, file.id);
        } else {
            this.favoriteFileIds.add(file.id)
            this.fileGroup.addAsChildId(this.favoritesRootId, file.id);
        };
        this.saveFavorites()
        this.fileGroup.flushFileChanges();
    }

    /**
     * populateFileGroup
     * Puts data from coronaLocations into fileGroup
     */
    public populateFileGroup() {
        this.locationRoot = this.fileGroup.createFile({ label: 'World' });
        const favoritesRoot = this.fileGroup.createFile({ label: 'Favorites', childIds: [] });
        this.favoritesRootId = favoritesRoot.id;
        const nestedCoronaLocations = this.getNestedCoronaLocations(coronaLocations);

        // setFileGroup batches file creations, make sure to flush
        this.setFileGroup(this.locationRoot, nestedCoronaLocations);
        this.fileGroup.flush();
    }

    /**
     * getNestedCoronaLocations
     * This returns a nested format that represents the final files
     * @param {string[]} coronaLocations
     */
    public getNestedCoronaLocations(coronaLocations: string[]) {
        const nestedCoronaLocations = {};

        // set nestedCoronaLocations from the leaves
        // if there is a location with the same name as a folder, create summary
        coronaLocations.sort((a, b) => b.length - a.length);
        coronaLocations.forEach((coronaLocation: string) => {
            const splitLocation = this.decorateAndSplitLocation(coronaLocation);
            if (get(nestedCoronaLocations, splitLocation)) {
                const folderName = last(splitLocation);
                splitLocation.push(`${folderName} Summary`)
            }
            set(nestedCoronaLocations, splitLocation, coronaLocation);
        });
        return nestedCoronaLocations;
    }

    /**
     * decorateAndSplitLocation
     * Replaces country and state codes
     * @param {string} coronaLocation
     */
    public decorateAndSplitLocation(coronaLocation: string) {
        const splitLocation = coronaLocation.split(', ').reverse();
        splitLocation[0] = countryNamesByCode[splitLocation[0]] || splitLocation[0];

        if (splitLocation.length > 1 && splitLocation[0] === 'United States') {
            splitLocation[1] = stateNamesByCode[splitLocation[1]] || splitLocation[1];
        }
        return splitLocation;
    }

    /**
     * setFileGroup
     * Uses the nestedLocations to create files in this.fileGroup
     * Also sets locationsByFileId for referencing files later on.
     * @param {File} file
     * @param {any}  nestedLocations
     */
    public setFileGroup(file: File, nestedLocations: any) {
        if (isString(nestedLocations)) {
            this.locationsByFileId[file.id] = nestedLocations;
            this.fileIdsByLocation[nestedLocations] = file.id;
            return;
        }
        const locations = Object.keys(nestedLocations).sort();
        each(locations, (location: string) => {
            // batchCreateFile is more performant, make sure to flush
            const childNode = this.fileGroup.batchCreateFile({
                label: location,
            });
            this.fileGroup.batchAddAsChild(file, childNode);
            this.setFileGroup(childNode, nestedLocations[location]);
        });
    }

    public onFilesByIdChange(filesById: Record<string, File>) {
        this.fileGroup.filesById = filesById;
        this.saveFavorites();
    }

    public getSelectedFileIds() {
        return (this.selectedTab === Tab.COMPARE) ? this.compareSelectedFileIds : this.fileGroup.selectedFileIds;
    }

}
