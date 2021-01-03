import {
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';

import {
  getSelectedImageSourceId$,
  ImageSourcesActions,
} from '@app/image-sources/store/index';

@Component({
  selector: 'dwu-image-source-setup',
  templateUrl: './image-source-setup.component.html',
  styleUrls: ['./image-source-setup.component.scss']
})
export class ImageSourceSetupComponent {

  public selectedImageSourceId$: Observable<string>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageSourceId$ = this.store.pipe(select(getSelectedImageSourceId$));
  }

  public generateImageSourceToken(selectedImageSourceId: string) {
    this.store.dispatch(ImageSourcesActions.generateImageSourceToken({ payload: selectedImageSourceId }))
  }

  public getUsage(imageSourceId: string) {
    const usage =
`const Piper = require('picture-piper').Piper;
const secret = require('./secret.json');

const piper = new Piper(secret);
piper.send(imageBlob);
`;
    return usage
  }

  public getSecretJson(imageSourceId: string) {
    const secret =
`{
  "id": "${imageSourceId}",
  "authToken": "authToken",
}
`;
    return secret
  }

}
