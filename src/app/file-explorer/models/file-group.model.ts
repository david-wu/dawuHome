
import {
    each,
    uniqueId,
    uniq,
    values,
    mapValues,
    some,
} from 'lodash';
import { FileType } from './file-type.enum';
import { File } from './file.model';
import { breadthFirstBy, reverseBreadthFirstBy } from '@utils/index';

export class FileGroup {

    public rootFileId: string;
    public filesById: Record<string, File> = {};
    public closedFileIds: Set<string> = new Set();
    public selectedFileIds: Set<string> = new Set<string>();

    constructor(public seed = "dfg_") {}

    public filesByIdFromJson(fileData) {
        const files = [];
        breadthFirstBy(
            fileData,
            (parent) => {
                const childFiles = mapValues(parent.childrenById, (childFile: any, fileId: string) => {
                    return {
                        label: fileId,
                        id: fileId,
                        ...childFile,
                    };
                });
                return values(childFiles);
            },
            (file) => {
                const partialFile = { ...file };
                delete partialFile.childrenById;

                if (file.childrenById) {
                    const childIds = Object.keys(file.childrenById || {});
                    files.push(this.createFile({
                        ...partialFile,
                        childIds,
                    }));
                } else {
                    files.push(this.createFile(partialFile));
                }
            },
        );
        return files;
    }

    // close all folders then open all the parents of selected
    public focusOnSelected() {
        this.closeAllFolders();
        const openFileIds = new Set<string>();
        const selectedFileIds = Array.from(this.selectedFileIds);

        selectedFileIds.forEach((fileId: string) => openFileIds.add(fileId));
        reverseBreadthFirstBy(
            this.rootFileId,
            (fileId: string) => this.filesById[fileId].childIds || [],
            (fileId: string) => {
                const file = this.filesById[fileId];
                if (some(file.childIds, (childId: string) => openFileIds.has(childId))) {
                    openFileIds.add(file.id);
                }
            },
        );

        Array.from(openFileIds).forEach((openFileId: string) => {
            const openFile = this.filesById[openFileId];
            if (openFile.childIds) {
                this.closedFileIds.delete(openFile.id);
            }
        });
    }

    public closeAllFolders() {
        this.closedFileIds = new Set();
        each(this.filesById, (file: File) => {
            if (file.childIds) {
                this.closedFileIds.add(file.id);
            }
        });
    }

    public setSelectedFileIds(fileIds: Set<string>) {
        this.selectedFileIds = fileIds;
    }

    public setRootFile(file: File) {
        this.rootFileId = file.id;
    }

    public addAsChild(parent: File, child: File) {
        parent.childIds = uniq([...(parent.childIds || []), child.id]);
    }

    public setClosedFileIds(closedFileIds: Set<string>) {
        this.closedFileIds = closedFileIds;
    }

    public createFile(overrides: Partial<File> = {}): File {
        const uniqueId = this.getUniqueId();
        const newFile = Object.assign(new File(), {
            id: uniqueId,
            label: uniqueId,
            ...overrides,
        });
        this.filesById = {
            ...this.filesById,
            [newFile.id]: newFile,
        };
        return newFile;
    }

    public getUniqueId() {
        while(true) {
            const id = uniqueId(this.seed);
            if (!this.filesById[id]) {
                return id;
            }
        }
    }
}