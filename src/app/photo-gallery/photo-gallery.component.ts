import { Component } from '@angular/core';

import { FirebaseAuthService } from '@services/index';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {

  constructor(public firebaseAuthService: FirebaseAuthService) {

  }

}
