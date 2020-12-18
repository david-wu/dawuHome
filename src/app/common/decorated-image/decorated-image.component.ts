import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'dwu-decorated-image',
    templateUrl: './decorated-image.component.html',
    styleUrls: ['./decorated-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecoratedImageComponent {
  @Input() src: string;
  @HostBinding('tabindex') tabindex = 0;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() download = new EventEmitter();
  @Output() zoomIn = new EventEmitter();

  public isFocused: boolean = false;

  constructor(
    public hostEl: ElementRef,
  ) {}

  @HostListener('click') onClick() {
    this.isFocused = !this.isFocused;
  }
  // @HostListener('focus') onFocus(e) {
  //   this.isFocused = true;
  // }
  @HostListener('blur') onblur() {
    this.isFocused = false;
  }

  public onSelect(event) {
    event.stopPropagation();
    this.select.emit();
  }
  public onDelete(event) {
    event.stopPropagation();
    this.delete.emit();
  }
  public onDownload(event) {
    event.stopPropagation();
    this.download.emit();
  }
  public onZoomIn(event) {
    console.log('onZoomIn', event)
    event.stopPropagation();
    this.zoomIn.emit();
  }

  // @Output() zoomLevelChange: EventEmitter<number> = new EventEmitter<number>();
  // @Input() minZoomLevel: number = 1;
  // @Input() maxZoomLevel: number = 10;


  // public zoomIn() {
  //   this.zoomLevel = Math.max(this.minZoomLevel, this.zoomLevel - 1);
  //   this.zoomLevelChange.emit(this.zoomLevel);
  // }

  // public zoomOut() {
  //   this.zoomLevel = Math.min(this.maxZoomLevel, this.zoomLevel + 1);
  //   this.zoomLevelChange.emit(this.zoomLevel);
  // }
}
