import "./style.css";

import CardGame from "../CardGame";

var numCards = 0
var cardsPlayer1 = []
function CardFrontBack(icon, altIcon) {
    window.cardFrontBack = {}
    var cardsPlayer2 = {}
    
    window.cardFrontBack.handleClick = (event) => { 
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        cardsPlayer1[numCards] = $cardFrontBack;
        $cardFrontBack.classList.add('-active');
        var player = 1;
        if (player == 1) {
            cardsPlayer2.firstCard = $cardFrontBack;
        }
        var imageName = $cardFrontBack.children[1].children[0].children[0].getAttribute("src")
        var card = imageName[11]

        numCards += 1
        
        if (numCards == 2) {
            setTimeout(function(){
                cardsPlayer1[0].classList.toggle('-active');
                cardsPlayer1[1].classList.toggle('-active');
                const $htmlArrowDown = document.querySelector('.arrow-down img');
                console.log($htmlArrowDown);
                $htmlArrowDown.classList.toggle('player2')
                $htmlArrowDown.classList.toggle('player1')
            },1000);
            numCards = 0
        } 
    }
    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>
        </article>
    `
}

export default CardFrontBack