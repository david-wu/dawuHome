import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
  selector: 'dwu-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

    @Input() searchText: string = '';
    @Input() placeholder: string = 'search..';
    @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

}
