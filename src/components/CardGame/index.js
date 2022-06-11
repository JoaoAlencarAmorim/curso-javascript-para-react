import "./style.css"

function CardGame(name = "alura-pixel", alt = "Logo da Alura") {
    return /*html */`
        <article class="card-game">
            <img src="src/images/${name}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;