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
        const root = this.fileGroup.createFile();
        this.fileGroup.setRootFile(root);

        const f1 = this.fileGroup.createFile();
        const f2 = this.fileGroup.createFile();
        const f3 = this.fileGroup.createFile();
        const f4 = this.fileGroup.createFile();
        const f5 = this.fileGroup.createFile();
        const f6 = this.fileGroup.createFile();
        const f7 = this.fileGroup.createFile();
        this.fileGroup.addAsChild(root, f1);
        this.fileGroup.addAsChild(f1, f3);

        this.fileGroup.addAsChild(root, f2);
        this.fileGroup.addAsChild(f2, f4);
        this.fileGroup.addAsChild(f2, f5);
        this.fileGroup.addAsChild(f2, f6);

        this.fileGroup.addAsChild(root, f7);
    }

}
