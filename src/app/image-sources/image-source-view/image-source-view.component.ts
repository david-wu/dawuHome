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
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';
import { FileGroup, FileType, File } from '@file-explorer/index';
import {
  ImageSourcesActions,
  getSelectedImageSourceId$,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-view',
  templateUrl: './image-source-view.component.html',
  styleUrls: ['./image-source-view.component.scss']
})
export class ImageSourceViewComponent {

  public selectedImageSourceId$: Observable<string>;
  public sub;

  constructor(
    public store: Store,
    public activatedRoute: ActivatedRoute,
  ) {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(ImageSourcesActions.setSelectedImageSourceId({ payload: params.imageSourceId }))
    });
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onFileUpload(files) {
    console.log('uploading', files)
  }


}
