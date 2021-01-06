import {
    Component,
    EventEmitter,
    Input,
    Output,
    ElementRef,
    ViewChild,
} from '@angular/core';

@Component({
  selector: 'dwu-input-string-editor',
  templateUrl: './input-string-editor.component.html',
  styleUrls: ['./input-string-editor.component.scss'],
})
export class InputStringEditorComponent {

    @Input() str: string = '';
    @Output() strChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() placeholder: string = 'Enter Text..';
    @ViewChild('stringInput', { static: true }) stringInput: ElementRef<any>;

    public isEditing: boolean = false;
    public editStr: string = '';

    public ngOnInit() {
      this.stringInput.nativeElement.addEventListener('keydown', (e) => {
        if (e && e.keyCode === 13) {
          this.onSaveEdit();
        }
      })
    }

    public onEdit() {
      this.editStr = this.str || '';
      this.isEditing = true;
      setTimeout(() =>this.stringInput.nativeElement.select());
    }

    public onCancelEdit() {
      this.isEditing = false;
    }

    public onSaveEdit() {
      if (this.str !== this.editStr) {
        this.str = this.editStr;
        this.strChange.emit(this.editStr);
      }
      this.isEditing = false;
    }

    public onStrChange(nextStr) {
      this.editStr = nextStr;
    }
}
