let playerScore = 0;
let computerScore = 0;

// Get the computer's choice
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        result.textContent = `It\'s a draw! You both went with ${computerSelection}`;

    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore++;
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;

    } else {
        playerScore++;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;

    }
    pScore.textContent = `You: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    
    checkWinner();
}

function checkWinner() {
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore == 5) {
            winner.textContent = `Computer wins the game. Better luck next time!`;
        } else {
            winner.textContent = `You win the game. Congratulations!`;
        }
        rpsButtons.forEach((button) => {
            button.removeEventListener('click', playerPlay);
        })
        resetBtn.style.visibility = 'visible';
        console.log(resetBtn);
    }
}

const rpsButtons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const winner = document.querySelector('.winner');
const resetBtn = document.querySelector('#resetBtn');

function startGame() {
    rpsButtons.forEach(button => {
        button.addEventListener('click', playerPlay);
    });
}

function playerPlay(e) {
    playRound(e.target.innerHTML, computerPlay());
}

resetBtn.addEventListener('click', () => {
    window.location.reload(true);
})

startGame();