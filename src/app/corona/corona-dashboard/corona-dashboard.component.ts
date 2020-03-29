import {
    Component,
    Input,
} from '@angular/core';
import { CoronaDataExtractor } from '../models/corona-data-extractor.model';

@Component({
  selector: 'dwu-corona-dashboard',
  templateUrl: './corona-dashboard.component.html',
  styleUrls: ['./corona-dashboard.component.scss']
})
export class CoronaDashboardComponent {

    @Input() coronaFile: any;

    public coronaData: any;
    public coronaExtractor = new CoronaDataExtractor();
    public readonly coronaKeys = [
        'new',
        'active',
        'recovered',
        'deaths',
    ];
    public readonly coronaColorsByKey = {
        deaths: '#2B1919',
        recovered: '#34A2AA',
        active: '#AD3E3E',
        new: '#ED9797',
    }

    public ngOnChanges(changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile);

        }
    }
}
