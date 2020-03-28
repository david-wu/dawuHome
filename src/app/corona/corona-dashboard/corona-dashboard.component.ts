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

    public ngOnChanges(changes) {
        if (changes.coronaFile && this.coronaFile) {
            this.coronaData = this.coronaExtractor.clean(this.coronaFile);
        }
    }
}
