import "./style.css"

import ScoreName from "../../components/ScoreName";

function ScoreBoard() {
    return /*html*/`
        <article class="score-board">
            ${ScoreName('Player1')}
            ${ScoreName('Player2')}
        </article>
    `;
}

export default ScoreBoard