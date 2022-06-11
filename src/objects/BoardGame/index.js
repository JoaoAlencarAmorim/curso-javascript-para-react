import "./style.css"

import CardFrontBack from "../../components/CardFrontBack/CardFrontBack";

function BoardGame(amountCards) {
    const $htmlCardGame = CardFrontBack();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
    
    return /*html*/`
       <section class="board-game">
            ${$htmlContent}
       </section>
    `;
}

export default BoardGame