/**
 * Created by namita on 6/12/16.
 */

import {Component} from '@angular/core';
import {GridData} from './grid-data';
import {GameBoardService} from '../services/game-board.service';


@Component({
    selector: 'game-board',
    moduleId: module.id,
    templateUrl: 'game-board.html',
    styleUrls:['game-board.css']
})

export class GameBoardComponent {
    constructor(private gameBoardService:GameBoardService){
    }
    gridData = this.gameBoardService.gridData;
}