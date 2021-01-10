import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { getUser$ } from '@app/store';
import { User } from '@models/index';
import {
  getImageStreamsList$,
  getSelectedImageStreamId$,
  ImageStreamsActions,
} from '@pp/image-streams/store/index';

@Component({
  selector: 'dwu-image-streams',
  templateUrl: './image-streams.component.html',
  styleUrls: ['./image-streams.component.scss']
})
export class ImageStreamsComponent {

  public user$: Observable<User>;
  public imageStreamsList$: Observable<any[]>;
  public selectedImageStreamId$: Observable<string>;

  public filterStr = '';
  public leftSideExpanded = false;
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

    this.loadInUrlState(this.router.url);
    this.sub = this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.loadInUrlState(routerEvent.url);
      }
    });
  }

  public ngOnDestroy() {
    this.store.dispatch(ImageStreamsActions.setImageStreamsListVisible({ payload: false }));
  }

  public onCreateSource() {
    this.store.dispatch(ImageStreamsActions.createImageStream());
  }

  public onSelectedImageStreamIdChange(selectedImageStreamId: string) {
    const urlTree = this.router.createUrlTree([selectedImageStreamId], { relativeTo: this.activatedRoute });
    this.store.dispatch(ImageStreamsActions.navigateToImageStreamView({ payload: urlTree.toString() }));
  }

  public loadInUrlState(url: string) {
    const urlArr = url.split('/');
    const imageStreamId = urlArr[3] === 'intro' ? undefined : urlArr[3];
    const tabName = urlArr[4];
    this.store.dispatch(ImageStreamsActions.setSelectedImageStreamId({ payload: imageStreamId }));
    this.store.dispatch(ImageStreamsActions.setImageStreamViewTab({ payload: tabName }));
  }
}
