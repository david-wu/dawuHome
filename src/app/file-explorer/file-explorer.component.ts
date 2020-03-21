import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    Fuzz,
    FuzzItem,
} from 'fuzz-js';
import {
    cloneDeep,
    each,
} from 'lodash';
import {
    File,
    FileType,
} from './models/index';

function breadthFirstBy(rootNode, getChildren, iteratee) {
    const queue = [rootNode];
    while (queue.length) {
        const currentNode = queue.shift();
        iteratee(currentNode);
        const children = getChildren(currentNode);
        queue.push(...children);
    }
}

function reverseBreadthFirstBy(rootNode, getChildren, iteratee) {
    const stack = [];
    breadthFirstBy(rootNode, getChildren, (node: any) => {
        stack.push(node);
    });
    for(let i = stack.length - 1; i >= 0; i--) {
        iteratee(stack[i]);
    }
}

@Component({
    selector: 'dwu-file-explorer',
    templateUrl: './file-explorer.component.html',
    styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent {
    @Input() rootFileId: string;

    @Input() filesById: Record<string, File>;
    @Output() filesByIdChange = new EventEmitter<Record<string, File>>();

    @Input() openFileIds: Record<string, boolean> = {};
    @Output() openFileIdsChange = new EventEmitter<Record<string, boolean>>();

    @Input() fuzzFilterString: string = 'demo';
    public fuzzItemsByFileId: Record<string, FuzzItem> = {};
    public fileIdsAndDepth: Array<[string, number]> = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.rootFileId || changes.filesById || changes.openFileIds || changes.fuzzFilterString) {
            if (this.rootFileId && this.filesById) {
                const filesById = this.fuzzFilterString
                    ? this.getFilteredFilesById(this.fuzzFilterString, this.filesById)
                    : this.filesById;

                this.fileIdsAndDepth = this.getFileIdsAndDepth(
                    this.rootFileId,
                    filesById,
                    0,
                );
            }
        }
    }

    /**
     * getFilteredFilesById
     * Returns a clone of filesById that is filtered
     * populates this.fuzzItemsByFileId
     * @param  {string} filterString
     * @param  {Record<string, File>} filesById
     * @return {Record<string, File>}
     */
    public getFilteredFilesById(
        filterString: string,
        filesById: Record<string, File>,
    ): Record<string, File> {
        const fileList = Object.keys(filesById).map((fileId: string) => filesById[fileId]);
        const fuzzResults = Fuzz.search(
            fileList,
            this.fuzzFilterString,
            { subjectKeys: ['label'] },
        );

        this.fuzzItemsByFileId = {};
        fuzzResults.forEach((fuzzItem: FuzzItem) => {
            this.fuzzItemsByFileId[fuzzItem.original.id] = fuzzItem;
        });

        const clonedFiles = cloneDeep(filesById);
        this.removeFilteredChildIds(clonedFiles, new Set(Object.keys(this.fuzzItemsByFileId)));
        return clonedFiles;
    }

    /**
     * removeFilteredChildIds
     * Filters and sorts the childIds for a file tree
     * @param {Record<string, File>} filesById
     * @param {Set<string>} fileIdsToKeep
     */
    public removeFilteredChildIds(filesById: Record<string, File>, fileIdsToKeep: Set<string>) {
        const maxScoresByFileId = {};
        reverseBreadthFirstBy(
            this.rootFileId,
            (fileId: string) => {
                const file = filesById[fileId];
                return (file && file.childIds) ? file.childIds : [];
            },
            (fileId: string) => {
                const file = filesById[fileId];
                const fuzzItem = this.fuzzItemsByFileId[fileId];
                maxScoresByFileId[fileId] = fuzzItem ? fuzzItem.score : 0;
                if (!file.childIds) {
                    return;
                }

                // maxScoresByFileId maintains the highest score for the file and all its children
                const childMaxScores = file.childIds.map((childId: string) => maxScoresByFileId[childId]);
                maxScoresByFileId[file.id] = Math.max(
                    maxScoresByFileId[file.id],
                    ...childMaxScores,
                );

                // Removes files that didn't meet the fuzzy score threshold and sorts them by maxScore
                file.childIds = file.childIds
                    .filter((childId: string) => fileIdsToKeep.has(childId))
                    .sort((id1: string, id2: string) => maxScoresByFileId[id2] - maxScoresByFileId[id1]);

                // Also keep any folders with children that met the threshold
                if (file.childIds.length) {
                    fileIdsToKeep.add(file.id);
                }
            },
        );
    }

    /**
     * getFileIdsAndDepth
     * fileIdsAndDepth is used for rendering the table
     * @param  {string} currentFileId
     * @param  {Record<string, File>} filesById
     * @param  {number} depth
     * @return {Array}
     */
    public getFileIdsAndDepth(
        currentFileId: string,
        filesById: Record<string, File>,
        depth: number = 0,
    ): Array<[string, number]> {
        const currentFile = filesById[currentFileId];
        const fileIdsAndDepth: Array<[string, number]> = [
            [currentFileId, depth],
        ];
        if (this.openFileIds[currentFileId]) {
            each(currentFile.childIds, (childId: string) => {
                const childFile = filesById[childId];
                const childFileIdsAndDepth = this.getFileIdsAndDepth(childId, filesById, depth + 1);
                fileIdsAndDepth.push(...childFileIdsAndDepth);
            });
        }
        return fileIdsAndDepth;
    }

    public toggleOpenFile(file: File, event: Event) {
        event.stopPropagation();
        this.openFileIds = {
            ...this.openFileIds,
            [file.id]: !this.openFileIds[file.id],
        };
        this.openFileIdsChange.emit(this.openFileIds);
    }

    public getPaddingLeft(depth: number) {
        return `${depth}rem`;
    }

    public trackByFn(fileIdAndDepth: [string, number]) {
        return fileIdAndDepth[0];
    }

}
