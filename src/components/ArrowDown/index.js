import "./style.css"

function ArrowDown(currentPlayer = 1){
    return /*html*/`
    <div class="arrow-down">
        <img data-currentPlayer="${currentPlayer}" class="player1" src="./src/images/IconArrowDown.png"/>
    </div>
    `
}

export default ArrowDown