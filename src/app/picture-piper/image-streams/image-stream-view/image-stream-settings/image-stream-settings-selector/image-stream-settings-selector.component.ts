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

  @Input() imageStreamId: string;

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
    if (changes.imageStreamId) {
      if (!changes.imageStreamId.firstChange) {
        this.unwatchData();
      }
      this.watchData()
    }
  }

  public watchData() {
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
    this.store.dispatch(PicturePiperActions.addVisibleResourceDoc({
      resource: {
        path: `imageStreams/${this.imageStreamId}`,
      },
    }));
  }

  public unwatchData() {
    this.store.dispatch(PicturePiperActions.removeVisibleResourceList({
      resource: {
        path: this.imageSourcePath,
      },
    }));
    this.store.dispatch(PicturePiperActions.removeVisibleResourceList({
      resource: {
        path: this.classifiersPath,
      },
    }));
    this.store.dispatch(PicturePiperActions.removeVisibleResourceDoc({
      resource: {
        path: `imageStreams/${this.imageStreamId}`,
      },
    }));
  }

  public onSelectedImageSourceIdsChange(selectedImageSourceIds: Set<string>) {
    this.selectedImageSourceIds = selectedImageSourceIds;
  }

  public onSelectedClassifierIdsChange(selectedClassifierIds: Set<string>) {
    this.selectedClassifierIds = selectedClassifierIds;
  }
}
