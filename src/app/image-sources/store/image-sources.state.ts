import { LocationData } from '@photo-gallery/models/index';

export interface ImageSourcesState  {
  imageSourcesListVisible: boolean,
  imageSourcesList: any[],
  selectedImageSourceId: string,
  imagesBySourceId: Record<string, any[]>,
  imageSourceViewTab: string,
}

export const initialImageSourcesState = {
  imageSourcesListVisible: false,
  imageSourcesList: [],
  selectedImageSourceId: undefined,
  imagesBySourceId: {},
  imageSourceViewTab: undefined,
};
