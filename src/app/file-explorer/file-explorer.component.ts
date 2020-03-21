import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { each } from 'lodash';
import {
    File,
    FileType,
} from './models/index';

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

    public fileIdsAndDepth: Array<[string, number]> = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.rootFileId || changes.filesById || changes.openFileIds) {
            if (this.rootFileId && this.filesById) {
                this.fileIdsAndDepth = this.getFileIdsAndDepth(
                    this.rootFileId,
                    0,
                );
            }
        }
    }

    public toggleOpenFile(file: File) {
        this.openFileIds = {
            ...this.openFileIds,
            [file.id]: !this.openFileIds[file.id],
        };
        this.openFileIdsChange.emit(this.openFileIds);
    }

    public getFileIdsAndDepth(
        currentFileId: string,
        depth: number = 0,
    ): Array<[string, number]> {
        const currentFile = this.filesById[currentFileId];
        const fileIdsAndDepth: Array<[string, number]> = [
            [currentFileId, depth],
        ];

        if (this.openFileIds[currentFileId]) {
            each(currentFile.childIds, (childId: string) => {
                const childFile = this.filesById[childId];
                const childFileIdsAndDepth = this.getFileIdsAndDepth(childId, depth + 1);
                fileIdsAndDepth.push(...childFileIdsAndDepth);
            });
        }
        return fileIdsAndDepth;
    }

    public getPaddingLeft(depth: number) {
        return `${depth}rem`;
    }

    public trackByFn(fileIdAndDepth: [string, number]) {
        return fileIdAndDepth[0];
    }

}
