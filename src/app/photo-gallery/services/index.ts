
import { PhotoGalleryService } from './photo-gallery.service';
import { UserLocationService } from './user-location.service';

export const PHOTO_GALLERY_SERVICES = [
  PhotoGalleryService,
  UserLocationService,
];

export * from './photo-gallery.service';
export * from './user-location.service';
