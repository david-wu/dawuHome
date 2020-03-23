import { keyBy } from 'lodash';
import { Component } from '@angular/core';
import { FileGroup, FileType, File } from '@src/app/file-explorer/index';

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
        // const root = this.fileGroup.createFile({label: 'projects'});

        const files = [
            this.fileGroup.createFile({label: 'projects'}),
            this.fileGroup.createFile({label: 'fuzz'}),
            this.fileGroup.createFile({label: 'todos'}),
            this.fileGroup.createFile({label: 'demo'}),
            this.fileGroup.createFile({label: 'shift/control-select'}),
            this.fileGroup.createFile({label: 'mobile'}),
            this.fileGroup.createFile({label: 'fileTypes: markdown, text, sql'}),
            this.fileGroup.createFile({label: 'earley'}),
            this.fileGroup.createFile({label: 'components'}),
            this.fileGroup.createFile({label: 'file-explorer'}),
            this.fileGroup.createFile({label: 'text-decorator'}),
        ];
        const filesByLabel = this.filesByLabel = keyBy(files, 'label');

        this.fileGroup.setRootFile(filesByLabel['projects']);

        this.fileGroup.addAsChild(filesByLabel['projects'], filesByLabel['fuzz']);
        this.fileGroup.addAsChild(filesByLabel['fuzz'], filesByLabel['demo']);

        this.fileGroup.addAsChild(filesByLabel['projects'], filesByLabel['todos']);
        this.fileGroup.addAsChild(filesByLabel['todos'], filesByLabel['shift/control-select']);
        this.fileGroup.addAsChild(filesByLabel['todos'], filesByLabel['mobile']);
        this.fileGroup.addAsChild(filesByLabel['todos'], filesByLabel['earley']);
        this.fileGroup.addAsChild(filesByLabel['todos'], filesByLabel['fileTypes: markdown, text, sql']);

        this.fileGroup.addAsChild(filesByLabel['projects'], filesByLabel['components']);
        this.fileGroup.addAsChild(filesByLabel['components'], filesByLabel['file-explorer']);
        this.fileGroup.addAsChild(filesByLabel['components'], filesByLabel['text-decorator']);
    }

    public getSelectedFileId() {
        const selectedFileIds = Array.from(this.fileGroup.selectedFileIds || [])
        return (selectedFileIds.length === 1) && selectedFileIds[0];
    }

}
