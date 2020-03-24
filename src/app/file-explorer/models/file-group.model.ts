
import {
    uniqueId,
    uniq,
} from 'lodash';
import { FileType } from './file-type.enum';
import { File } from './file.model';

export class FileGroup {

    public rootFileId: string;
    public filesById: Record<string, File> = {};
    public closedFileIds: Record<string, boolean> = {};
    public selectedFileIds: Set<string> = new Set<string>();

    constructor(public seed = "dfg_") {}

    public setSelectedFileIds(fileIds: Set<string>) {
        this.selectedFileIds = fileIds;
    }

    public setRootFile(file: File) {
        this.rootFileId = file.id;
    }

    public addAsChild(parent: File, child: File) {
        parent.childIds = uniq([...(parent.childIds || []), child.id]);
    }

    public setClosedFileIds(closedFileIds: Record<string, boolean>) {
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