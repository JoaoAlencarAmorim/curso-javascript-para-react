import "./style.css"

import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
    return /*html*/`
        <article class="score-board">
            ${PlayerName('Player1')}
            ${PlayerName('Player2')}
        </article>
    `;
}

export default ScoreBoard