import "./style.css"

import CardFrontBack from "../../components/CardFrontBack/CardFrontBack";

function BoardGame(amountCards) {
    const $htmlCardGame = CardFrontBack();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
    return /*html*/`
       <article class="board-game">
            ${$htmlBoardGame}
       </article>
    `;
}

export default BoardGame