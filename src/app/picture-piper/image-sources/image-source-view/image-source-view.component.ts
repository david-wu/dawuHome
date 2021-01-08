import {
  Component,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';

import {
  ImageSourcesActions,
  getSelectedImageSourceId$,
} from '@pp/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-view',
  templateUrl: './image-source-view.component.html',
  styleUrls: ['./image-source-view.component.scss']
})
export class ImageSourceViewComponent {

  public selectedImageSourceId$: Observable<string>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public onFileUpload(files) {
    console.log('uploading', files)
  }


}
