/**
 * Created by namita on 6/12/16.
 */

import {Injectable} from "@angular/core";
import {GridData} from './grid-data';
@Injectable()
export class GameBoardService {
    private gridData:GridData[] = [
        {color: 'blue'},
        {color: 'blue'},
        {color: 'green'},
        {color: 'green'},
        {color: 'red'},
        {color: 'red'},
        {color: 'yellow'},
        {color: 'yellow'},
        {color: 'pink'},
        {color: 'pink'},
        {color: 'orange'},
        {color: 'orange'},
        {color: 'black'},
        {color: 'black'},
        {color: 'purple'},
        {color: 'purple'},
    ];

    public lastOpenedCard:GridData;

    getData() {
        let j, temp;
        for (let i = 0; i < this.gridData.length; i++) {
            j = Math.floor(Math.random() * (this.gridData.length));
            temp = this.gridData[i];
            this.gridData[i] = this.gridData[j];
            this.gridData[j] = temp;
        }
        return this.gridData;
    }
}