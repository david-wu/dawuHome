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
  selector: 'dwu-image-source-overview',
  templateUrl: './image-source-overview.component.html',
  styleUrls: ['./image-source-overview.component.scss']
})
export class ImageSourceOverviewComponent {

  public selectedImageSourceId$: Observable<string>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

}
