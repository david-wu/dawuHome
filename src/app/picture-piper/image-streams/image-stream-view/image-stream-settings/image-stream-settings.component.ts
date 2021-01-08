import {
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  getSelectedImageStream$,
  ImageStreamsActions,
} from '@pp/image-streams/store/index';

@Component({
  selector: 'dwu-image-stream-settings',
  templateUrl: './image-stream-settings.component.html',
  styleUrls: ['./image-stream-settings.component.scss']
})
export class ImageStreamSettingsComponent {

  public selectedImageStream$: Observable<any>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageStream$ = this.store.pipe(select(getSelectedImageStream$));
  }

  public onLabelChange(imageStreamId: string, label: string) {
    this.store.dispatch(ImageStreamsActions.updateImageStream({ imageStreamId, patch: { label } }));
  }

  public onDescriptionChange(imageStreamId: string, description: string) {
    this.store.dispatch(ImageStreamsActions.updateImageStream({ imageStreamId, patch: { description } }));
  }

}
