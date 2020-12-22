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

  @ViewChild('mapContainerEl', { static: true }) mapContainerEl: ElementRef<any>;

  constructor(
    public store: Store<PhotoGalleryState>,
  ) {
    this.userLocation$ = this.store.pipe(select(getUserLocation$));
    this.userLocation$.subscribe(console.log);
  }

  public ngOnInit() {
    const myLoc = { lat: 37.796247, lng: -122.2648188 };


    console.log('mapContainerEl', this.mapContainerEl);
        const map = new (window as any).google.maps.Map(this.mapContainerEl.nativeElement, {
          zoom: 8,
          center: myLoc,
        });
        const marker = new (window as any).google.maps.Marker({
          position: myLoc,
          map: map,
        });
    // this.store.dispatch(PhotoGalleryActions.checkUserLocationPermission());
  }

  public useMyLocation() {
    this.store.dispatch(PhotoGalleryActions.requestUserLocation());
  }

}
