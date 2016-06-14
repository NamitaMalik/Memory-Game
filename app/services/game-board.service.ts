/**
 * Created by namita on 6/12/16.
 */

import {Injectable} from "@angular/core";
import {GridData} from '../game-board/grid-data';
@Injectable()
export class GameBoardService {
    private gridData:GridData[] = [
        {color: 'blue',visible: false},
        {color: 'blue',visible: false},
        {color: 'green',visible: false},
        {color: 'green',visible: false},
        {color: 'red',visible: false},
        {color: 'red',visible: false},
        {color: 'yellow',visible: false},
        {color: 'yellow',visible: false},
        {color: 'pink',visible: false},
        {color: 'pink',visible: false},
        {color: 'orange',visible: false},
        {color: 'orange',visible: false},
        {color: 'black',visible: false},
        {color: 'black',visible: false},
        {color: 'purple',visible: false},
        {color: 'purple',visible: false},
    ];

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