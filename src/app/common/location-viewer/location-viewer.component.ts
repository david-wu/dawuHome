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
import {
  debounce,
  get,
} from 'lodash';
import {
  CdkVirtualScrollViewport,
  FixedSizeVirtualScrollStrategy,
} from '@angular/cdk/scrolling';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

import { UploadFile } from '@photo-gallery/models/index';
import {
  PhotoGalleryActions,
  PhotoGalleryState,
  getLocationPermission$,
} from '@photo-gallery/store/index';
import { LocationData } from '@photo-gallery/models/index';

@Component({
  selector: 'dwu-location-viewer',
  templateUrl: './location-viewer.component.html',
  styleUrls: ['./location-viewer.component.scss']
})
export class LocationViewerComponent {

  @Input() location: LocationData = LocationData.fromLatLong(37.8, -122.3);
  @Output() locationChange = new EventEmitter<LocationData>();
  @Input() markers;
  @ViewChild('mapContainerEl', { static: true }) mapContainerEl: ElementRef<any>;

  public map;
  public debouncedLocationChange;

  constructor() {
    this.debouncedLocationChange = debounce((location: LocationData) => {
      if (!location.isEqual(this.location)) {
        this.locationChange.emit(location);
      }
    }, 100);
  }

  public ngOnChanges(changes) {
    if(changes.location) {
      this.setMapCenter();
    }
  }

  public ngOnInit() {
    this.setMapCenter();
  }

  public setMapCenter() {
    const location = this.location || LocationData.fromLatLong(37.8, -122.3);
    const center = {
      lat: location.latitude,
      lng: location.longitude,
    };
    if (!this.map) {
      this.map = new (window as any).google.maps.Map(this.mapContainerEl.nativeElement, {
        zoom: 13,
        center: center,
        disableDefaultUI: true,
      });
      this.map.addListener('center_changed', () => {
        const center = this.map.getCenter();
        const location = LocationData.fromLatLong(center.lat(), center.lng());
        this.debouncedLocationChange(location);
      })
    } else {
      this.map.setCenter(center);
    }
  }

}
