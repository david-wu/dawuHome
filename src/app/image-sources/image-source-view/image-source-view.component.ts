import {
  Component,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
} from '@angular/router';

import {
  ImageSourcesActions,
  getSelectedImageSourceId$,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-view',
  templateUrl: './image-source-view.component.html',
  styleUrls: ['./image-source-view.component.scss']
})
export class ImageSourceViewComponent {

  public selectedImageSourceId$: Observable<string>;
  public sub: Subscription;

  constructor(
    public store: Store,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public ngOnInit() {
    const initialTabName = (this.activatedRoute.firstChild.url as any).value[0].path;
    this.store.dispatch(ImageSourcesActions.setImageSourceViewTab({ payload: initialTabName }));
    this.sub = this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        const tabName = routerEvent.urlAfterRedirects.split('/')[3];
        this.store.dispatch(ImageSourcesActions.setImageSourceViewTab({ payload: tabName }));
      }
    });
  }

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public onFileUpload(files) {
    console.log('uploading', files)
  }


}
