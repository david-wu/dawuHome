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
  ImageStreamsActions,
  getImageStreamsList$,
  getSelectedImageStreamId$,
} from '@pp/image-streams/store/index';
import { getUser$ } from '@app/store';
import { User } from '@models/index';

@Component({
  selector: 'dwu-image-streams',
  templateUrl: './image-streams.component.html',
  styleUrls: ['./image-streams.component.scss']
})
export class ImageStreamsComponent {

  public user$: Observable<User>;
  public imageStreamsList$: Observable<any[]>;
  public selectedImageStreamId$: Observable<string>;

  public filterStr: string = '';
  public leftSideExpanded: boolean = false;
  public sub: Subscription;

  constructor(
    public store: Store,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.user$ = this.store.pipe(select(getUser$));
    this.imageStreamsList$ = this.store.pipe(select(getImageStreamsList$));
    this.selectedImageStreamId$ = this.store.pipe(select(getSelectedImageStreamId$));
  }

  public ngOnInit() {
    this.store.dispatch(ImageStreamsActions.setImageStreamsListVisible({ payload: true }));
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(ImageStreamsActions.setSelectedImageStreamId({ payload: params.imageStreamId }))
    });
  }

  public ngOnDestroy() {
    this.store.dispatch(ImageStreamsActions.setImageStreamsListVisible({ payload: false }));
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  public onCreateSource() {
    this.store.dispatch(ImageStreamsActions.createImageStream());
  }

  public onSelectedImageStreamIdChange(selectedImageStreamId: string) {
    const urlTree = this.router.createUrlTree([selectedImageStreamId], { relativeTo: this.activatedRoute });
    this.store.dispatch(ImageStreamsActions.navigateToImageStreamView({ payload: urlTree.toString() }));
  }
}
