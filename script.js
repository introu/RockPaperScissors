function computerPlay() {
    let computerSignValue = Math.floor(Math.random() * 3) + 1;
    if (computerSignValue === 3) {
        return 'scissors';
    } else if (computerSignValue === 2) {
        return 'paper';
    } else return 'rock';
}


let playerScore = 0;
let computerScore = 0;

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return ++playerScore
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        return ++computerScore

    }
    return 'How about you try to input Rock, Paper or Scissors, you rat?';

}

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Rock, Paper or Scissors?').toLowerCase();
        let computerSelection = computerPlay();
        gameRound(playerSelection, computerSelection)
        console.log(`Current player score: ${playerScore}`)
        console.log(`Current computer score: ${computerScore}`)
    }

    let finalText = `Computer wins!`
    if (playerScore > computerScore) {
        finalText = `Player wins!`
    } else if (playerScore === computerScore) {
        finalText = `Draw`
    }
    playerScore = 0;
    computerScore = 0;
    alert(finalText)
}*/


const container = document.querySelector('#gameResults')

let roundText = document.createElement('div');
roundText.classList.add('roundText');
container.appendChild(roundText);

let scoreText = document.createElement('div');
scoreText.classList.add('scoreText');
scoreText.textContent = `Current player score: ${playerScore}, Current computer score: ${computerScore}`
container.appendChild(scoreText);


const allButtons = document.querySelectorAll('button.buttonStyle')
allButtons.forEach(button => button.addEventListener('click', event => {
    let computerPlaySign = computerPlay();
    gameRound(event.target.id, computerPlaySign)
    roundText.textContent = `Player has used ${event.target.id} and Computer has used ${computerPlaySign}!`
    scoreText.textContent = `Current player score: ${playerScore}, Current computer score: ${computerScore}`
    gameEndCheck()
}));


const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    scoreText.textContent = `Current player score: ${playerScore}, Current computer score: ${computerScore}`
};


const resetButton = document.getElementById('resetGameButton')
resetButton.addEventListener('click', resetGame);

let gameEndCheck = () => {
    if (playerScore >= 5) {
        alert('Player wins!')
        resetGame()
    } else if (computerScore >= 5) {
        alert('Computer wins!')
        resetGame()
    }
}
