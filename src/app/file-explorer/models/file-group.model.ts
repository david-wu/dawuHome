
import {
    uniqueId,
    uniq,
} from 'lodash';
import { FileType } from './file-type.enum';
import { File } from './file.model';

export class FileGroup {

    public rootFileId: string;
    public filesById: Record<string, File> = {};
    public openFileIds: Record<string, boolean> = {};

    constructor(public seed = "dfg_") {}

    public setRootFile(file: File) {
        this.rootFileId = file.id;
    }

    public addAsChild(parent: File, child: File) {
        parent.childIds = uniq([...(parent.childIds || []), child.id]);
    }

    public setOpenFileIds(openFileIds: Record<string, boolean>) {
        this.openFileIds = openFileIds;
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
        return uniqueId(this.seed);
    }
}