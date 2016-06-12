/**
 * Created by namita on 6/12/16.
 */

import {Component} from '@angular/core';
import {GameBoardComponent} from "./game-board/game-board.component";
import {GameInfoComponent} from "./game-info/game-info.component";
import {GameLogoComponent} from "./game-logo/game-logo.component";
import {GameResetComponent} from "./game-reset/game-reset.component";
import {GameBoardService} from "./services/game-board.service";

@Component({
    selector: 'my-app',
    template: `
    <div style="margin: 50px">
    <div style="float: left">
    <game-board></game-board>
    </div>
    <div style="float: right">
    <game-logo></game-logo>
    <game-info></game-info>
    <game-reset></game-reset>
    </div>
    </div>
    `,
    providers: [GameBoardService],
    directives: [GameBoardComponent, GameInfoComponent, GameLogoComponent, GameResetComponent]
})

export class AppComponent {
}