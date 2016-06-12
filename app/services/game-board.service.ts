/**
 * Created by namita on 6/12/16.
 */

import {Injectable} from "@angular/core";
@Injectable()
export class GameBoardService {
    gridData = [
        {index: '0', color: 'blue', colorCode: '#0000ee'},
        {index: '1', color: 'blue', colorCode: '#0000ee'},
        {index: '2', color: 'green', colorCode: '#00DD00'},
        {index: '3', color: 'green', colorCode: '#00DD00'},
        {index: '4', color: 'red', colorCode: '#ff0043'},
        {index: '5', color: 'red', colorCode: '#ff0043'},
        {index: '6', color: 'yellow', colorCode: '#FFFFAA'},
        {index: '7', color: 'yellow', colorCode: '#FFFFAA'},
        {index: '8', color: 'pink', colorCode: '#f1b8e7'},
        {index: '9', color: 'pink', colorCode: '#f1b8e7'},
        {index: '10', color: 'orange', colorCode: '#F4990A'},
        {index: '11', color: 'orange', colorCode: '#F4990A'},
        {index: '12', color: 'black', colorCode: '#000000'},
        {index: '13', color: 'black', colorCode: '#000000'},
        {index: '14', color: 'purple', colorCode: '#B235CD'},
        {index: '15', color: 'purple', colorCode: '#B235CD'},
    ];
}