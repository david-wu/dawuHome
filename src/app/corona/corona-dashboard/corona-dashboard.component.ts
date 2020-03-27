import {
    Component,
    Input,
} from '@angular/core';
import { CoronaCleaner } from '../models/corona-cleaner.model';

@Component({
  selector: 'dwu-corona-dashboard',
  templateUrl: './corona-dashboard.component.html',
  styleUrls: ['./corona-dashboard.component.scss']
})
export class CoronaDashboardComponent {

    @Input() coronaFile: any;

    public cleaner = new CoronaCleaner();

    public ngOnChanges(changes) {
        if (changes.coronaFile && this.coronaFile) {
            console.log('this.coronaFile', this.coronaFile)
            this.cleaner.clean(this.coronaFile);
        }
    }
}
