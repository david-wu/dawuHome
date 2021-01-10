import { ExifService } from '@src/app/services/exif.service';
import { FirebaseAuthService } from '@src/app/services/firebase-auth.service';
import { FirebaseFirestoreService } from '@src/app/services/firebase-firestore.service';
import { FirebaseStorageService } from '@src/app/services/firebase-storage.service';
import { ImageProcessingService } from '@src/app/services/image-processing.service';

export const APP_SERVICES = [
  FirebaseAuthService,
  FirebaseStorageService,
  FirebaseFirestoreService,
  ExifService,
  ImageProcessingService,
];

export * from './firebase-auth.service';
export * from './firebase-storage.service';
export * from './firebase-firestore.service';
export * from  './exif.service';
export * from  './image-processing.service';

// import { ExifService } from './exif.service';
// import { PhotoGalleryService } from './photo-gallery.service';
// import { UserLocationService } from './user-location.service';
// import { ImageProcessingService } from './image-processing.service';


// export * from './exif.service';
// export * from './photo-gallery.service';
// export * from './user-location.service';
// export * from './image-processing.service';
