import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import { keyBy, map } from 'lodash';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';
import { FileGroup, FileType, File } from '@file-explorer/index';

@Component({
  selector: 'dwu-image-sources-explorer',
  templateUrl: './image-sources-explorer.component.html',
  styleUrls: ['./image-sources-explorer.component.scss']
})
export class ImageSourcesExplorerComponent {

  @Input() imageSources: any[];
  @Input() filterStr: string = '';
  @Input() selectedImageSourceIds: any;
  @Output() selectedImageSourceIdsChange = new EventEmitter<Set<string>>();

  public fileGroup: FileGroup = new FileGroup();
  public readonly rootFileId = 'ROOT';

  constructor() {
    const root = this.fileGroup.createFile({ label: 'World' });
    this.fileGroup.setRootFile(root);
  }

  public ngOnChanges(changes) {
    if (changes.imageSources) {
      const rootFile = this.fileGroup.filesById[this.fileGroup.rootFileId];
      const files = map(this.imageSources, (imageSource) => {
        return Object.assign(new File(), {
          id: imageSource.id,
          label: imageSource.label || imageSource.id,
        });
      });
      rootFile.childIds = map(files, 'id');
      this.fileGroup.filesById = keyBy([rootFile, ...files], 'id');
    }
  }

  public onSelectedFileIdsChange(selectedFileIds) {
    this.selectedImageSourceIdsChange.emit(selectedFileIds);
  }

}
