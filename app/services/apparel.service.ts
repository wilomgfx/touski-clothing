import {Injectable} from 'angular2/core';
import {APPARELS} from '../models/mock-apparel';

@Injectable()
export class ApparelService {
    getApparels() {
        return Promise.resolve(APPARELS);
    }
    getApparel(Id: number) {
        return Promise.resolve(APPARELS).then(
            heroes => heroes.filter(apparel => apparel.Id === Id)[0]
        );
    }

}
