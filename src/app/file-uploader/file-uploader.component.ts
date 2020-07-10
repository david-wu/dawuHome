import { Component } from '@angular/core';

import { FirebaseStorageService } from '@services/firebase-storage.service';

@Component({
  selector: 'dwu-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

  public file: File;
  public fileUrl$ = this.fss.getFileUrl$();

  constructor(
    public fss: FirebaseStorageService,
  ) {
  }

  public onFileChange(fileEvent: any) {
    if (fileEvent.target.files) {
      this.file = fileEvent.target.files[0];
    }
    console.log('this.file', this.file)
  }

  public upload() {
    console.log('upload', this.file)
    this.fss.uploadFile(this.file);
  }
}
