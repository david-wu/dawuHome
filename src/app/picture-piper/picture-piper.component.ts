import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  getImageSourcesList$,
  getSelectedImageSourceId$,
  ImageSourcesActions,
} from '@app/picture-piper/image-sources/store/index';
import { getUser$ } from '@app/store';
import { User } from '@models/index';

@Component({
  selector: 'dwu-picture-piper',
  templateUrl: './picture-piper.component.html',
  styleUrls: ['./picture-piper.component.scss']
})
export class PicturePiperComponent {

  public user$: Observable<User>;
  public imageSourcesList$: Observable<any[]>;
  public selectedImageSourceId$: Observable<string>;

  public filterStr = '';
  public leftSideExpanded = false;
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
    // this.sub = this.activatedRoute.params.subscribe((params) => {
    //   this.store.dispatch(ImageSourcesActions.setSelectedImageSourceId({ payload: params.imageSourceId }))
    // });
  }

  public ngOnDestroy() {
    this.store.dispatch(ImageSourcesActions.setImageSourcesListVisible({ payload: false }));
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public onCreateSource() {
    this.store.dispatch(ImageSourcesActions.createImageSource());
  }

  public onSelectedImageSourceIdChange(selectedImageSourceId: string) {
    const urlTree = this.router.createUrlTree(['..', selectedImageSourceId], { relativeTo: this.activatedRoute });
    this.store.dispatch(ImageSourcesActions.navigateToImageSourceView({ payload: urlTree.toString() }));
  }
}
