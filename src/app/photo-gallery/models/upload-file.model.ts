
import { UploadMeta } from '@src/app/photo-gallery/models/upload-meta.model';
import { LocationData } from '@src/app/photo-gallery/models/location-data.model';

/**
 * UploadFile
 */
export class UploadFile {
  id: string;
  userId: string;
  fileName: string;
  isUploaded: boolean;
  sourceId?: string;
  locationData?: LocationData;
  uploadMeta?: UploadMeta;
}
