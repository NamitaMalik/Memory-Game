/**
 * Created by namita on 6/12/16.
 */

import {Component} from '@angular/core';
import {GridData} from '../game-board/grid-data';
import {GameBoardService} from '../services/game-board.service';

@Component({
    selector: 'game-reset',
    moduleId: module.id,
    templateUrl: 'game-reset.html'
})

export class GameResetComponent {
    constructor(private gameBoardService:GameBoardService) {
    }
    resetGame(){
        let gridData = this.gameBoardService.getData();
        gridData.forEach(function(value){
            console.log(value);
            value.visible = false;
        });
        this.gameBoardService.lastOpenedCard = null;
    }
}