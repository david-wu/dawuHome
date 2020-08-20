import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import {
  Observable,
} from 'rxjs';
import { get } from 'lodash';
import {
  CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
} from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import {
  Store,
  select,
} from '@ngrx/store';

import { UploadFile } from '@photo-gallery/models/index';
import {
  PhotoGalleryActions,
  PhotoGalleryState,
  getLocationPermission$,
  getUserLocation$,
} from '@photo-gallery/store/index';
import { LocationData } from '@photo-gallery/models/index';

@Component({
  selector: 'dwu-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent {

  public locationPermission$: Observable<boolean>;
  public userLocation$: Observable<LocationData>;

  constructor(
    public store: Store<PhotoGalleryState>,
  ) {
    this.locationPermission$ = this.store.pipe(select(getLocationPermission$));
    this.userLocation$ = this.store.pipe(select(getUserLocation$));

    this.userLocation$.subscribe((ul) => {
      console.log('ul', ul)
    })
  }

  public ngOnInit() {
    this.store.dispatch(PhotoGalleryActions.checkUserLocationPermission());
  }

  public useMyLocation() {
    this.store.dispatch(PhotoGalleryActions.requestUserLocation());
  }

}
