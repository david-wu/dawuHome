import { Component } from '@angular/core';
import { FileGroup, FileType, File } from '@src/app/file-explorer/index';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

    public filesById: Record<string, File> = {};
    public fileGroup: FileGroup = new FileGroup();

    public ngOnInit() {
        this.populateFileGroup();
    }

    public populateFileGroup() {
        const root = this.fileGroup.createFile({label: 'projects'});
        this.fileGroup.setRootFile(root);

        const f1 = this.fileGroup.createFile({label: 'fuzz'});
        const f2 = this.fileGroup.createFile({label: 'todos'});
        const f3 = this.fileGroup.createFile({label: 'demo'});
        const f4 = this.fileGroup.createFile({label: 'shift/control-select'});
        const f5 = this.fileGroup.createFile({label: 'mobile'});
        const f6 = this.fileGroup.createFile({label: 'angular-animation-on-destroy'});
        const f7 = this.fileGroup.createFile({label: 'drag-n-drop-move-files'});
        const f8 = this.fileGroup.createFile({label: 'fileTypes: markdown, text, sql'});
        const f9 = this.fileGroup.createFile({label: 'earley'});
        const f10 = this.fileGroup.createFile({label: 'components'});
        this.fileGroup.addAsChild(root, f1);
        this.fileGroup.addAsChild(f1, f3);

        this.fileGroup.addAsChild(root, f2);
        this.fileGroup.addAsChild(f10, f4);
        this.fileGroup.addAsChild(f10, f5);
        this.fileGroup.addAsChild(f10, f6);
        this.fileGroup.addAsChild(f10, f7);
        this.fileGroup.addAsChild(f2, f8);
        this.fileGroup.addAsChild(f2, f9);
        this.fileGroup.addAsChild(f2, f10);
    }

}
