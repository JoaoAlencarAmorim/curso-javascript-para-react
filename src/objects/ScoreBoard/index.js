import "./style.css"

import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VersusSymbol from "../../components/VersusSymbol";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard() {
    return /*html*/`
        ${ArrowDown()}
        <header class="score-board">
            ${PlayerName('Player1')}
            ${PlayerScore()}
            ${VersusSymbol('vs')}
            ${PlayerScore()}
            ${PlayerName('Player2')}            
        </header>
    `;
}

export default ScoreBoard