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
    styleUrls:['game-board.css'],
    directives:[NgClass]
})

export class GameBoardComponent {
    constructor(private gameBoardService:GameBoardService){
    }
    private lastOpenedCard:GridData;
    gridData = this.gameBoardService.gridData;

    toggle(data:GridData){
        if(!this.lastOpenedCard){
            data.visible = true;
            this.lastOpenedCard = data;
        }
        else{
            if(this.lastOpenedCard.color == data.color){
                data.visible = true;
                this.lastOpenedCard = null;
            }else{
                this.lastOpenedCard.visible = false;
                data.visible = true;
                this.lastOpenedCard = data;
            }
        }


    }
}