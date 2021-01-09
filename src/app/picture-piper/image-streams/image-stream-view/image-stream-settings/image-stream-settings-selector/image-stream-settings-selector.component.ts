import {
  Component,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  PicturePiperActions,
  getResourceLists$,
} from '@pp/store';

@Component({
  selector: 'dwu-image-stream-settings-selector',
  templateUrl: './image-stream-settings-selector.component.html',
  styleUrls: ['./image-stream-settings-selector.component.scss']
})
export class ImageStreamSettingsSelectorComponent {

  @Input() selectedImageStreamId: string;

  public imageSourcesFilterStr: string = '';
  public classifiersFilterStr: string = '';
  public imageSources$: Observable<any[]>
  public classifiers$: Observable<any[]>
  public selectedImageSourceIds = new Set();
  public selectedClassifierIds = new Set();

  public readonly imageSourcePath = 'imageSources';
  public readonly classifiersPath = 'classifiers';

  constructor(
    public store: Store,
  ) {
    this.imageSources$ = this.store.pipe(
      select(getResourceLists$),
      map((resourceLists) => resourceLists[this.imageSourcePath]),
    );
    this.classifiers$ = this.store.pipe(
      select(getResourceLists$),
      map((resourceLists) => resourceLists[this.classifiersPath]),
    );
  }

  public ngOnChanges(changes) {
    if (changes.selectedImageStreamId) {
      this.store.dispatch(PicturePiperActions.addVisibleResourceList({
        resource: {
          path: this.imageSourcePath,
        },
      }));
      this.store.dispatch(PicturePiperActions.addVisibleResourceList({
        resource: {
          path: this.classifiersPath,
        },
      }));
    }
  }

  // public ngOnInit() {
    // this.store.dispatch(PicturePiperActions.addVisibleResourceList())
  // }

  // public onLabelChange(imageStreamId: string, label: string) {
  //   this.store.dispatch(ImageStreamsActions.updateImageStream({ imageStreamId, patch: { label } }));
  // }

  // public onDescriptionChange(imageStreamId: string, description: string) {
  //   this.store.dispatch(ImageStreamsActions.updateImageStream({ imageStreamId, patch: { description } }));
  // }

}
