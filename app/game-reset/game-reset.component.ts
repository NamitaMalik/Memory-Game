/**
 * Created by namita on 6/12/16.
 */

import {Component,Output,EventEmitter} from '@angular/core';
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
    @Output() gameReset = new EventEmitter();

    resetGame(){
        this.gameReset.emit("");
    }

}