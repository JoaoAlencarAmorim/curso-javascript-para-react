import "./style.css";

import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <article class="front">
                ${CardGame()}
            </article>
            <article class="back">
                ${CardGame("javascript", "Logo do javascript pixelado")}
            </article>
        </article>
    `
}

export default CardFrontBack