import {
  Component,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'dwu-pp-test-app',
  templateUrl: './pp-test-app.component.html',
  styleUrls: ['./pp-test-app.component.scss']
})
export class PpTestAppComponent {

  public selectedImageSource$: Observable<any>;

  constructor(
    public store: Store,
  ) {
    // this.selectedImageSource$ = this.store.pipe(select(getSelectedImageSource$));
  }

  public onLabelChange(imageSourceId: string, label: string) {
    // this.store.dispatch(ImageSourcesActions.updateImageSource({ imageSourceId, patch: { label } }));
  }

  public onDescriptionChange(imageSourceId: string, description: string) {
    // this.store.dispatch(ImageSourcesActions.updateImageSource({ imageSourceId, patch: { description } }));
  }

}
