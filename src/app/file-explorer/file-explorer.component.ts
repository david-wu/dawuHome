import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import {
    Fuzz,
    FuzzItem,
} from 'fuzz-js';
import {
    cloneDeep,
    isUndefined,
    includes,
    each,
    without,
    uniq,
} from 'lodash';
import { DragulaService } from 'ng2-dragula';

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
    styleUrls: ['./file-explorer.component.scss'],
    providers: [
        DragulaService,
    ],
})
export class FileExplorerComponent {
    @Input() rootFileId: string;
    @Input() fuzzFilterString: string = '';
    @Input() filesById: Record<string, File>;
    @Input() closedFileIds: Record<string, boolean> = {};
    @Input() selectedFileIds: Set<string> = new Set<string>();
    @Output() filesByIdChange = new EventEmitter<Record<string, File>>();
    @Output() closedFileIdsChange = new EventEmitter<Record<string, boolean>>();
    @Output() selectedFileIdsChange = new EventEmitter<Set<string>>();
    public parentIdsByFileId: Record<string, string>;
    public fuzzItemsByFileId: Record<string, FuzzItem> = {};
    public fileIdsAndDepth: Array<[string, number]> = [];
    public visibleFileIds: Set<string> = new Set<string>();
    public fileIsOddById: Record<string, boolean> = {}
    private subs = new Subscription();

    public fileIdBeingDragged: string;

    constructor(private dragulaService: DragulaService) {
        const drakeGroup = dragulaService.createGroup('EXP', {
          isContainer: (el) => {
              const fileId = el.getAttribute('data-file-id');
              if (!fileId) {
                  return false;
              }
              return !!this.filesById[fileId].childIds;
          },
          revertOnSpill: false,
        });

        this.subs.add(this.dragulaService.drop('EXP')
            .subscribe((drop) => {
                // use on our own dom manipulation
                drakeGroup.drake.cancel(true);

                console.log('drop', drop)
                // if (this.getElFileId(drop.target)) {
                //     this.addFileToFileChildren(
                //         this.getElFileId(drop.el),
                //         this.getElFileId(drop.target),
                //     );
                // } else {
                //     this.insertFileBeforeFile(
                //         this.getElFileId(drop.el),
                //         this.getElFileId(drop.sibling),
                //     );
                // }

                if (drop.sibling && this.getElFileId(drop.sibling)) {
                    this.insertFileBeforeFile(
                        this.getElFileId(drop.el),
                        this.getElFileId(drop.sibling),
                    );
                } else {
                    this.addFileToFileChildren(
                        this.getElFileId(drop.el),
                        this.getElFileId(drop.target),
                    );
                }
            })
        );

        this.subs.add(this.dragulaService.over('EXP')
            .subscribe(({ el }) => {
                // if a folder is being dragged isContainer function will return true
                // this makes 'el' be the childElement so I also check the parentNode's attribute
                const nextFileIdBeingDragged = this.getElFileId(el);

                // for the first over event after a dragend, el is the element being dragged
                if (!this.fileIdBeingDragged && (this.fileIdBeingDragged !== nextFileIdBeingDragged)) {
                    this.fileIdBeingDragged = nextFileIdBeingDragged;
                    this.closedFileIdsChange.emit({
                        ...this.closedFileIds,
                        [this.fileIdBeingDragged]: true,
                    })
                }
            })
        );

        this.subs.add(this.dragulaService.dragend('EXP')
            .subscribe(() => {
                if (this.fileIdBeingDragged) {
                    this.fileIdBeingDragged = undefined;
                }
            }),
        );

    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.rootFileId || changes.filesById || changes.closedFileIds || changes.fuzzFilterString) {
            if (this.rootFileId && this.filesById) {
                this.setTableIndices();
            }
        }
    }

    public insertFileBeforeFile(fileId1, fileId2) {
        if (fileId2 === this.rootFileId) {
            return;
        }

        // const fileToInsert = fileId1;
        let changes = {};
        each(this.filesById, (file: File) => {
            if (includes(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new File(), {
                    ...file,
                    childIds: without(file.childIds, fileId1),
                });
            }
        });

        const insertParent = this.filesById[this.parentIdsByFileId[fileId2]];
        const nextChildIds = without(insertParent.childIds, fileId1);
        const insertionIndex = nextChildIds.indexOf(fileId2);
        nextChildIds.splice(insertionIndex, 0, fileId1);

        console.log(fileId1, fileId2)
        changes[insertParent.id] = Object.assign(new File(), {
            ...insertParent,
            childIds: nextChildIds,
        });
        this.filesByIdChange.emit({
            ...this.filesById,
            ...changes,
        })
    }

    public addFileToFileChildren(fileId1, fileId2) {
        let changes = {};
        each(this.filesById, (file: File) => {
            if (includes(file.childIds, fileId1)) {
                changes[file.id] = Object.assign(new File(), {
                    ...file,
                    childIds: without(file.childIds, fileId1),
                });
            }
        });

        // empty fileId2 means insert after the last element
        if (fileId2) {
            const parentFile = this.filesById[fileId2];
            changes[parentFile.id] = Object.assign(new File(), {
                ...this.filesById[parentFile.id],
                childIds: uniq([fileId1, ...parentFile.childIds]),
            });
        } else {
            const parentFile = this.filesById[this.rootFileId];
            changes[parentFile.id] = Object.assign(new File(), {
                ...this.filesById[parentFile.id],
                childIds: uniq([...parentFile.childIds, fileId1]),
            });
        }

        this.filesByIdChange.emit({
            ...this.filesById,
            ...changes,
        })
    }

    public getParentIdsByFileId(fileId: string, filesById: Record<string, File>) {
        const file = filesById[fileId];
        const parentIdsByFileId = {};

        each(file.childIds, (childId: string) => {
            parentIdsByFileId[childId] = fileId;
            const innerParentIdsByFileId = this.getParentIdsByFileId(childId, filesById);
            each(innerParentIdsByFileId, (parentId: string, grandChildId: string) => {
                parentIdsByFileId[grandChildId] = parentId;
            });
        });
        return parentIdsByFileId;
    }

    public setTableIndices() {
        this.parentIdsByFileId = this.getParentIdsByFileId(this.rootFileId, this.filesById);
        if (!this.fuzzFilterString) {
            this.fuzzItemsByFileId = {};
            this.fileIdsAndDepth = this.getFileIdsAndDepth(
                this.rootFileId,
                this.filesById,
                0,
            );
            this.visibleFileIds = this.getVisibleFileIds(
                this.rootFileId,
                this.filesById,
                this.closedFileIds,
            );
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        } else {
            this.fuzzItemsByFileId = this.getFuzzResultsByFileId(this.fuzzFilterString, this.filesById);
            // maxScore is the highest score between the item and all its descendants
            // low max scores will get filtered out
            const clonedFileIndex = cloneDeep(this.filesById);
            const maxScoresByFileId = this.sortFileIndexChildren(clonedFileIndex, this.fuzzItemsByFileId);
            this.fileIdsAndDepth = this.getFileIdsAndDepth(
                this.rootFileId,
                clonedFileIndex,
                0,
            );
            this.visibleFileIds = this.getVisibleFileIds(
                this.rootFileId,
                clonedFileIndex,
                this.closedFileIds,
                maxScoresByFileId,
            );
            this.fileIsOddById = this.getFileIsOddById(this.fileIdsAndDepth, this.visibleFileIds);
        }
    }

    public getFuzzResultsByFileId(
        filterString: string,
        filesById: Record<string, File>,
    ): Record<string, FuzzItem> {
        const fileList = Object.keys(filesById).map((fileId: string) => filesById[fileId]);
        const fuzzResults = Fuzz.search(
            fileList,
            filterString,
            {
                subjectKeys: ['label'],
                skipFilter: true,
            },
        );
        const fuzzItemsByFileId = {};
        fuzzResults.forEach((fuzzItem: FuzzItem) => {
            fuzzItemsByFileId[fuzzItem.original.id] = fuzzItem;
        });
        return fuzzItemsByFileId;
    }

    /**
     * sortFileIndexChildren
     * Sorts the childIds for a file tree
     * @param {Record<string, File>} filesById
     * @param {Set<string>} fileIdsToKeep
     */
    public sortFileIndexChildren(filesById: Record<string, File>, fuzzItemsById: Record<string, FuzzItem>) {
        const maxScoresByFileId = {};
        reverseBreadthFirstBy(
            this.rootFileId,
            (fileId: string) => {
                const file = filesById[fileId];
                return (file && file.childIds) ? file.childIds : [];
            },
            (fileId: string) => {
                const file = filesById[fileId];
                const fuzzItem = fuzzItemsById[fileId];
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
                file.childIds = file.childIds
                    .sort((id1: string, id2: string) => maxScoresByFileId[id2] - maxScoresByFileId[id1]);
            },
        );
        return maxScoresByFileId;
    }

    public getFileIdsAndDepth(
        currentFileId: string,
        filesById: Record<string, File>,
        depth: number = 0,
    ): Array<[string, number]> {
        const currentFile = filesById[currentFileId];
        const fileIdsAndDepth: Array<[string, number]> = [
            [currentFileId, depth],
        ];
        each(currentFile.childIds, (childId: string) => {
            const childFileIdsAndDepth = this.getFileIdsAndDepth(childId, filesById, depth + 1);
            fileIdsAndDepth.push(...childFileIdsAndDepth);
        });
        return fileIdsAndDepth;
    }

    public getVisibleFileIds(
        currentFileId: string,
        filesById: Record<string, File>,
        closedFileIds: Record<string, boolean>,
        maxScoresByFileId: Record<string, number> = {},
    ) {
        const currentFile = filesById[currentFileId];
        const currentMaxScore = isUndefined(maxScoresByFileId[currentFileId]) ? 1 : maxScoresByFileId[currentFileId];
        const visibleFileIds = new Set<string>();
        if (currentMaxScore > 0.4) {
            visibleFileIds.add(currentFile.id);
        }
        if (!this.closedFileIds[currentFileId]) {
            each(currentFile.childIds, (childId: string) => {
                const childVisibleFileIds = this.getVisibleFileIds(
                    childId,
                    filesById,
                    closedFileIds,
                    maxScoresByFileId,
                );
                childVisibleFileIds.forEach((visibleFileId: string) => visibleFileIds.add(visibleFileId));
            });
        }
        return visibleFileIds;
    }

    public getFileIsOddById(fileIdsAndDepth: Array<[string, number]>, visibleFileIds: Set<string>) {
        const fileIsOddById = {}
        let isOdd = false;
        for(let i = 0; i < fileIdsAndDepth.length; i++) {
            const fileId = fileIdsAndDepth[i][0];
            if (visibleFileIds.has(fileId)) {
                isOdd = !isOdd;
            }
            fileIsOddById[fileId] = isOdd;
        }
        return fileIsOddById;
    }

    public toggleClosedFile(file: File, event: Event) {
        event.stopPropagation();
        this.closedFileIds = {
            ...this.closedFileIds,
            [file.id]: !this.closedFileIds[file.id],
        };
        this.closedFileIdsChange.emit(this.closedFileIds);
    }

    public selectFile(file: File) {
        this.selectedFileIdsChange.emit(new Set([file.id]));
    }

    public getPaddingLeft(depth: number) {
        return `${depth}rem`;
    }

    public trackByFn(fileIdAndDepth: [string, number]) {
        return fileIdAndDepth[0];
    }

    public getElFileId(el) {
        if (!el) {
            return;
        }
        return el.getAttribute('data-file-id') || el.parentNode.getAttribute('data-file-id');
    }

}
