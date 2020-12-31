import {
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  getSelectedImageSourceId$,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-images',
  templateUrl: './image-source-images.component.html',
  styleUrls: ['./image-source-images.component.scss']
})
export class ImageSourceImagesComponent {

  public selectedImageSourceId$: Observable<string>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public onFileUpload(file) {
    console.log('onFileUpload', file)
  }

}
