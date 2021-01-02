
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
  sourceId?: string;
  locationData?: LocationData;
  uploadMeta?: UploadMeta
}
