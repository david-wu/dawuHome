import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from '@services/index';
import { PhotoGalleryService } from '@app/photo-gallery/services/photo-gallery.service';
import { User } from '@models/index';
import * as EXIFStatic from 'exif-js';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {

  public uploadedFiles$: Observable<any[]>;

  constructor(
    public firebaseAuthService: FirebaseAuthService,
    public pgs: PhotoGalleryService,
  ) {
    this.uploadedFiles$ = this.pgs.getUploadedFiles$();
  }

  public async onFileChange(file: File, user: User) {
    // console.log('EXIF', EXIF);
    // console.log('file', file)

    const reader = new FileReader();
    console.log('reader', reader);
    // debugger;
    reader.onloadend = (e: ProgressEvent) => {
      console.log('e', e)
      const arrayBuffer = reader.result
      console.log('arrayBuffer', arrayBuffer);
      debugger;
      const exif = (EXIFStatic as any).EXIF.readFromBinaryFile(arrayBuffer);
      const latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
      const latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
      const longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
      const longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
      console.log('lat, long', latitude, longitude);
      console.log('exif', exif)
      // return ProgressEvent
    }
    reader.readAsArrayBuffer(file);

    // const arrayBuffer = await file.arrayBuffer();
    // const exif = (EXIFStatic as any).EXIF.readFromBinaryFile(arrayBuffer);
    // const latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
    // const latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
    // const longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
    // const longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
    // console.log('lat, long', latitude, longitude);

    // console.log('exif', exif)
    // debugger;
    // const fr = new FileReader(); // to read file contents

    // fr.onloadend = function() {
    //     const exif = EXIF.readFromBinaryFile(file);
    //     // alert a value
    //     alert(exif.Make);
    // };

    // fr.readAsBinaryString(file); // read the file

    this.pgs.uploadFile(file, user);
  }

  public onDeleteFile(file: any, user: User) {
    this.pgs.deleteFile(file.id, user);
  }

  public trackById(file: any) {
    return file.id;
  }

}
