
import { ExifService } from './exif.service';
import { PhotoGalleryService } from './photo-gallery.service';
import { UserLocationService } from './user-location.service';

export const PHOTO_GALLERY_SERVICES = [
  ExifService,
  PhotoGalleryService,
  UserLocationService,
];

export * from './exif.service';
export * from './photo-gallery.service';
export * from './user-location.service';
