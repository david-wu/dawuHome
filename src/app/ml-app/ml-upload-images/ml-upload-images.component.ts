import { Component } from '@angular/core';
import { keyBy } from 'lodash';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  Params,
} from '@angular/router';

import { FileGroup, FileType, File } from '@file-explorer/index';

@Component({
  selector: 'ml-upload-images',
  templateUrl: './ml-upload-images.component.html',
  styleUrls: ['./ml-upload-images.component.scss']
})
export class MlUploadImagesComponent {

  public filesById: Record<string, File> = {};
  public filesByLabel: Record<string, File> = {};
  public fileGroup: FileGroup = new FileGroup();
  public filterStr: string = '';
  public zipAcceptStr = 'zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) {
  }

  public onFileChange() {

  }
}
