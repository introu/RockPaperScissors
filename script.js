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
function game() {
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
    console.log(finalText)
}

document.getElementById("btn").onclick = game;