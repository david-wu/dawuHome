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
  public filterStr: string = '';

  public ngOnInit() {
    this.populateFileGroup();
  }

  public populateFileGroup() {
    const fileDataById = {
      id: 'PROJECTS',
      label: 'Projects',
      childrenById: {
        COMPONENTS: {
          label: 'components',
          childrenById: {
            FUZZ: { label: 'fuzz-js' },
            TOOLTIP: { label: 'tooltip' },
            FILE_EXPLORER: { label: 'file-explorer' },
            TEXT_DECORATOR: { label: 'text-decorator' },
            CHARTS_DIR: {
              label: 'charts',
              childrenById: {
                FLEX_CHART: { label: 'flex chart' },
                LINE_CHART: { label: 'line chart' },
                BAR_CHART: { label: 'bar chart' },
                CHART_LEGEND: { label: 'chart legend' },
              },
            },
          },
        },
        TODOS: {
          label: 'todos',
          childrenById: {
            MARKDOWN: { label: 'support markdown-editor' },
            FAVICON: { label: 'make a favicon' },
            COMMON: { label: 'components demos' },
          },
        },
      },
    };

    const files = this.fileGroup.filesByIdFromJson(fileDataById);
    this.filesById = keyBy(files, 'id');

    this.fileGroup.setRootFile(this.filesById.PROJECTS);
    this.fileGroup.selectedFileIds = new Set([this.filesById['TOOLTIP'].id]);
  }

  public getSelectedFileId() {
    const selectedFileIds = Array.from(this.fileGroup.selectedFileIds || [])
    return (selectedFileIds.length === 1) && selectedFileIds[0];
  }

}
