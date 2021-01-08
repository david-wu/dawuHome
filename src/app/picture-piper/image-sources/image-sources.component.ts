import { Component } from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
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
  public sub;

  constructor(
    public store: Store,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.user$ = this.store.pipe(select(getUser$));
    this.imageSourcesList$ = this.store.pipe(select(getImageSourcesList$));
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));

    this.loadInUrlState(this.router.url);
    this.sub = this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.loadInUrlState(routerEvent.url);
      }
    });
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

  public onSelectedImageSourceIdChange(selectedImageSourceId: string) {
    const urlTree = this.router.createUrlTree([selectedImageSourceId], { relativeTo: this.activatedRoute });
    this.store.dispatch(ImageSourcesActions.navigateToImageSourceView({ payload: urlTree.toString() }));
  }

  public loadInUrlState(url: string) {
    const urlArr = url.split('/');
    const imageSourceId = urlArr[3] === 'intro' ? undefined : urlArr[3];
    const tabName = urlArr[4];
    this.store.dispatch(ImageSourcesActions.setSelectedImageSourceId({ payload: imageSourceId }))
    this.store.dispatch(ImageSourcesActions.setImageSourceViewTab({ payload: tabName }));
  }
}
