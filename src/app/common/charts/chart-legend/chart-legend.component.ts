import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
  selector: 'dwu-chart-legend',
  templateUrl: './chart-legend.component.html',
  styleUrls: ['./chart-legend.component.scss'],
})
export class ChartLegendComponent {

    @Input() keys: string[] = [];
    @Input() colorsByKey: Record<string, string> = {};
    @Input() disabledKeys: Set<string> = new Set();
    @Output() disabledKeysChange: EventEmitter<Set<string>> = new EventEmitter<Set<string>>();

    // $eggshell-darker
    public readonly disabledColor = '#DDD9CF';

    public getKeyBorderColor(key: string) {
        return this.colorsByKey[key];
    }

    public getKeyBackgroundColor(key: string) {
        if (this.disabledKeys && this.disabledKeys.has(key)) {
            return this.disabledColor;
        }
        return this.colorsByKey[key];
    }

    public onKeyClick(key: string) {
        const nextDisabledKeys = new Set(this.disabledKeys);
        if (nextDisabledKeys.has(key)) {
            nextDisabledKeys.delete(key);
        } else {
            nextDisabledKeys.add(key);
        }
        this.disabledKeysChange.emit(nextDisabledKeys);
    }

}
