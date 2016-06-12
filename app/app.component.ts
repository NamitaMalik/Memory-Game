/**
 * Created by namita on 6/12/16.
 */

import {Component} from 'angular2/core';
import {GameBoardComponent} from "./game-board/game-board.component.ts";
import {GameInfoComponent} from "./game-info/game-info.component.ts";
import {GameLogoComponent} from "./game-logo/game-logo.component.ts"
import {GameResetComponent} from "./game-reset/game-reset.component.ts"

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