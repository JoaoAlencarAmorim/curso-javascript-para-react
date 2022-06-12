import "./style.css"

function PlayerScore(points = 0) {
    return /*html*/`
        <ol data-points="${points}" class="player-score">
            <li class="score -score1"></li>
            <li class="score -score2"></li>
            <li class="score -score3"></li>
        </ol>
    `
} 

export default PlayerScore