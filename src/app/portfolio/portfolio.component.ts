import { Component } from '@angular/core';
import { keyBy } from 'lodash';

import { FileGroup, FileType, File } from '@file-explorer/index';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

    public filesById: Record<string, File> = {};
    public filesByLabel: Record<string, File> = {};
    public fileGroup: FileGroup = new FileGroup();

    public ngOnInit() {
        this.populateFileGroup();
    }

    public populateFileGroup() {
        const fileDataById = {
            id: 'PROJECTS',
            label: 'Projects',
            childrenById: {
                FUZZ: { label: 'fuzz-demo' },
                TODOS: {
                    label: 'Todos',
                    childrenById: {
                        SHIFT: { label: 'shift/control-select' },
                        MOBILE: { label: 'mobile' },
                        FILETYPES: { label: 'fileTypes: markdown, text, sql' },
                        EARLEY: { label: 'earley' },
                    },
                },
                COMPONENTS: {
                    label: 'components',
                    childrenById: {
                        FILE_EXPLORER: { label: 'file-explorer' },
                        TEXT_DECORATOR: { label: 'text-decorator' },
                    },
                },
            },
        };

        const files = this.fileGroup.filesByIdFromJson(fileDataById);
        this.filesById = keyBy(files, 'id');

        this.fileGroup.setRootFile(this.filesById.PROJECTS);
        this.fileGroup.selectedFileIds = new Set([this.filesById['FUZZ'].id]);
    }

    public getSelectedFileId() {
        const selectedFileIds = Array.from(this.fileGroup.selectedFileIds || [])
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    }

}
