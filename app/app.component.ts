/**
 * Created by namita on 6/12/16.
 */

import {Component} from '@angular/core';
import {GameBoardComponent} from "./game-board/game-board.component";
import {GameInfoComponent} from "./game-info/game-info.component";
import {GameLogoComponent} from "./game-logo/game-logo.component"
import {GameResetComponent} from "./game-reset/game-reset.component"

@Component({
    selector: 'my-app',
    template: `
    <game-board></game-board>
    <game-info></game-info>
    <game-logo></game-logo>
    <game-reset></game-reset>
    `,
    directives: [GameBoardComponent,GameInfoComponent,GameLogoComponent,GameResetComponent]
})

export class AppComponent {
}