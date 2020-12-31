import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ImageSourcesActions,
  getImageSourcesList$,
  getSelectedImageSourceId$,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-sources',
  templateUrl: './image-sources.component.html',
  styleUrls: ['./image-sources.component.scss']
})
export class ImageSourcesComponent {

  public imageSourcesList$: Observable<any[]>;
  public selectedImageSourceId$: Observable<string>;
  public selectedImageSourceIds$: Observable<Set<string>>;
  public filterStr: string = '';
  public leftSideExpanded: boolean = false;

  constructor(
    public store: Store,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.imageSourcesList$ = this.store.pipe(select(getImageSourcesList$));
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
    this.selectedImageSourceIds$ = this.selectedImageSourceId$.pipe(
      map((selectedImageSourceId) => {
        return selectedImageSourceId ? new Set([selectedImageSourceId]) : new Set();
      }),
    );
  }

  public ngOnInit() {
    this.store.dispatch(ImageSourcesActions.setImageSourcesListVisible({ payload: true }));
  }

  public ngOnDestroy() {
    this.store.dispatch(ImageSourcesActions.setImageSourcesListVisible({ payload: false }));
  }

  public onCreateSource() {
    this.store.dispatch(ImageSourcesActions.createImageSource());
  }

  public onSelectedImageSourceIdsChange(selectedImageSourceIds: Set<string>) {
    const imageSourceId = Array.from(selectedImageSourceIds || [])[0];
    this.router.navigate([imageSourceId], { relativeTo: this.activatedRoute });
  }

}
