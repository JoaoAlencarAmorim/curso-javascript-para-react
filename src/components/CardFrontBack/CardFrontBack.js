import "./style.css";

import CardGame from "../CardGame";

function CardFrontBack() {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => { 
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');
    /*
    if ($cardFrontBack.classList.contains('-active')) {
        $cardFrontBack.classList.remove('-active');
    } else {
        $cardFrontBack.classList.add('-active');
    }       
    */ 
    }
    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do javascript pixelado")}
            </div>
        </article>
    `
}

export default CardFrontBack