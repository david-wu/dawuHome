import { NormalKeys } from './normal-keys.enum';
import { CoronaKeys } from './corona-keys.enum';

export class Labels {

    public static readonly corona = {
        [CoronaKeys.DATE_STR]: 'Date',
        [CoronaKeys.DATE]: 'Date',
        [CoronaKeys.TIMESTAMP]: 'Date',
        [CoronaKeys.CASES]: 'Cases',
        [CoronaKeys.NEW]: 'New',
        [CoronaKeys.ACTIVE]: 'Active',
        [CoronaKeys.RECOVERED]: 'Recovered',
        [CoronaKeys.DEATHS]: 'Deaths',
        [NormalKeys.CASES]: 'Cases',
        [NormalKeys.R]: 'Growth rate (R)',
        [NormalKeys.R_AVG]: 'R Avg.',
        [NormalKeys.NEW]: 'New',
        [NormalKeys.ACTIVE]: 'Active',
        [NormalKeys.RECOVERED]: 'Recovered',
        [NormalKeys.DEATHS]: 'Deaths',
    }

}
