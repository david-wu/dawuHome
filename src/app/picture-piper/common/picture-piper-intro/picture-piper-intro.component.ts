import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Store,
  select,
} from '@ngrx/store';
import { keyBy, map } from 'lodash';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/upload-file.model';
import { FileGroup, FileType, File } from '@file-explorer/index';

@Component({
  selector: 'dwu-picture-piper-intro',
  templateUrl: './picture-piper-intro.component.html',
  styleUrls: ['./picture-piper-intro.component.scss']
})
export class PicturePiperIntroComponent {
}
