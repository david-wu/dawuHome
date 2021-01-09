import { LocationData } from '@photo-gallery/models/index';

export interface PicturePiperState  {
  visibleResourceListCounts: any,
  resourceLists: any,
  resourceListsLoading: any,

  visibleResourceDocCounts: any,
  resourceDocs: any,
  resourceDocsLoading: any,
  // imageSourcesListVisible: boolean,
  // imageSourcesList: any[],
  // selectedImageSourceId: string,
  // imagesBySourceId: Record<string, any[]>,
  // imageSourceViewTab: string,
  // isGeneratingTokenByImageSource: Record<string, boolean>,
  // imageSourceTokensByImageSource: Record<string, any[]>,
}

export const initialPicturePiperState = {
  visibleResourceListCounts: {},
  resourceLists: {},
  resourceListsLoading: {},

  visibleResourceDocCounts: {},
  resourceDocs: {},
  resourceDocsLoading: {},
  // imageSourcesListVisible: false,
  // imageSourcesList: [],
  // selectedImageSourceId: undefined,
  // imagesBySourceId: {},
  // imageSourceViewTab: undefined,
  // isGeneratingTokenByImageSource: {},
  // imageSourceTokensByImageSource: {},
};
