/**
 * Created by namita on 6/12/16.
 */

import {Component} from '@angular/core';
import {GridData} from './grid-data';
import {GameBoardService} from '../services/game-board.service';
import {NgClass} from '@angular/common'


@Component({
    selector: 'game-board',
    moduleId: module.id,
    templateUrl: 'game-board.html',
    styleUrls: ['game-board.css'],
    directives: [NgClass]
})

export class GameBoardComponent {
    constructor(private gameBoardService:GameBoardService) {
    }

    gridData = this.gameBoardService.getData();

    toggle(data:GridData) {
         var _this = this;
        data.visible = true;
        if (!_this.gameBoardService.lastOpenedCard) {
            _this.gameBoardService.lastOpenedCard = data;
        }
        else {
            if (_this.gameBoardService.lastOpenedCard.color == data.color) {
                _this.gameBoardService.lastOpenedCard = null;
            } else {
                setTimeout(function () {
                    data.visible = false;
                    _this.gameBoardService.lastOpenedCard.visible = false;
                    _this.gameBoardService.lastOpenedCard = null;
                }, 200);
            }
        }


    }
}