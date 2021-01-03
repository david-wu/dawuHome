import {
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  getSelectedImageSource$,
  ImageSourcesActions,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-overview',
  templateUrl: './image-source-overview.component.html',
  styleUrls: ['./image-source-overview.component.scss']
})
export class ImageSourceOverviewComponent {

  public selectedImageSource$: Observable<any>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageSource$ = this.store.pipe(select(getSelectedImageSource$));
  }

  public onLabelChange(imageSourceId: string, label: string) {
    this.store.dispatch(ImageSourcesActions.updateImageSource({ imageSourceId, patch: { label } }));
  }

  public onDescriptionChange(imageSourceId: string, description: string) {
    this.store.dispatch(ImageSourcesActions.updateImageSource({ imageSourceId, patch: { description } }));
  }

}
