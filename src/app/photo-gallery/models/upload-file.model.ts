
import { UploadMeta } from './upload-meta.model';
import { LocationData } from './location-data.model';

/**
 * UploadFile
 */
export class UploadFile {
  id: string;
  userId: string;
  fileName: string;
  isUploaded: boolean;
  locationData: LocationData;
  uploadMeta: UploadMeta
}
