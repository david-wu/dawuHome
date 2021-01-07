import { Component } from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ImageSourcesActions,
  getImageSourcesList$,
  getSelectedImageSourceId$,
} from '@pp/image-sources/store/index';
import { getUser$ } from '@app/store';
import { User } from '@models/index';

@Component({
  selector: 'dwu-image-sources',
  templateUrl: './image-sources.component.html',
  styleUrls: ['./image-sources.component.scss']
})
export class ImageSourcesComponent {

  public user$: Observable<User>;
  public imageSourcesList$: Observable<any[]>;
  public selectedImageSourceId$: Observable<string>;

  public filterStr: string = '';
  public leftSideExpanded: boolean = false;
  public sub: Subscription;

  constructor(
    public store: Store,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.user$ = this.store.pipe(select(getUser$));
    this.imageSourcesList$ = this.store.pipe(select(getImageSourcesList$));
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public ngOnInit() {
    this.store.dispatch(ImageSourcesActions.setImageSourcesListVisible({ payload: true }));
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(ImageSourcesActions.setSelectedImageSourceId({ payload: params.imageSourceId }))
    });
  }

  public ngOnDestroy() {
    this.store.dispatch(ImageSourcesActions.setImageSourcesListVisible({ payload: false }));
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  public onCreateSource() {
    this.store.dispatch(ImageSourcesActions.createImageSource());
  }

  public onSelectedImageSourceIdChange(selectedImageSourceId: string) {
    const urlTree = this.router.createUrlTree([selectedImageSourceId], { relativeTo: this.activatedRoute });
    this.store.dispatch(ImageSourcesActions.navigateToImageSourceView({ payload: urlTree.toString() }));
  }
}
