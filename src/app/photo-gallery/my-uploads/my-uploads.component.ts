import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { keyBy, get } from 'lodash';

import { FirebaseAuthService } from '@services/index';
import { PhotoGalleryService } from '@photo-gallery/services/index';
import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';

@Component({
  selector: 'dwu-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.scss']
})
export class MyUploadsComponent {

  public uploadedFiles$: Observable<any[]>;
  public uploadedFileIds$: Observable<string[]>;
  public zoomLevel = 3;
  public readonly tileOptions = [
    { maxWidth: 150, aspectRatio: 4 / 3 },
    { maxWidth: 320, aspectRatio: 4 / 3 },
    { maxWidth: 640, aspectRatio: 4 / 3 },
    { maxWidth: 1080, aspectRatio: 4 / 3 },
  ];
  public alwaysUseMaxColumns = true;
  public centeredTileId;
  public uploadFilesById;

  public sub;
  public magnifiedImageId;

  constructor(
    public pgs: PhotoGalleryService,
    public firebaseAuthService: FirebaseAuthService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
    this.uploadedFileIds$ = this.uploadedFiles$.pipe(
      map((uploadFiles: UploadFile[]) => {
        return uploadFiles.map((uploadFile: UploadFile) => uploadFile.id);
      }),
    );
  }


  public ngOnInit() {
    this.sub = this.uploadedFiles$.subscribe(
      (uploadFiles: UploadFile[]) => {
        this.uploadFilesById = keyBy(uploadFiles, (uploadFile: UploadFile) => uploadFile.id);
        return keyBy(uploadFiles, (uploadFile: UploadFile) => uploadFile.id);
      },
    );
  }

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  public getImgSrc(uploadFileId: string, imageWidth: number): string {
    imageWidth = Math.min(640, imageWidth);
    return get(this.uploadFilesById, [
      uploadFileId,
      'uploadMeta',
      `downloadUrl_${imageWidth}`,
    ]);
  }

  public async onFileChange(file: File, user: User) {
    this.pgs.uploadFile(file, user);
  }

  public onDeleteFile(file: any, user: User) {
    this.pgs.deleteFile(file.id, user);
  }

  public onZoomIn(imageId: string) {
    this.magnifiedImageId = imageId;
  }

  // public trackById(file: any) {
  //   return file.id;
  // }

  public downloadImage(imageId: string) {
    const uploadFile = this.uploadFilesById[imageId];
    const downloadUrl = uploadFile.uploadMeta.downloadUrl;
    // const url = this.getImgSrc(imageId, 1080);

    // const a: any = document.createElement('a');
    // a.setAttribute('href', downloadUrl);
    // a.setAttribute('download', `asdf${imageId}.jpg`);
    // a.style = 'display: none';
    // document.body.appendChild(a);
    // a.click();

    console.log(downloadUrl)


    const Url = window.URL || (window as any).webkitURL;
    // window.URL = window.URL || window.webkitURL;

    const xhr = new XMLHttpRequest();
    const aEl: any = document.createElement('a')

    xhr.open('GET', downloadUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      // const file = new Blob([xhr.response], { type : 'application/octet-stream' });
      const file = new Blob([xhr.response]);
      aEl.href = Url.createObjectURL(file);
      console.log('aEl.href', aEl.href)
      aEl.download = `${imageId}.jpg`;
      aEl.style = 'display: none';
      document.body.appendChild(aEl);
      aEl.click();
    };
    xhr.send();

  };

}
