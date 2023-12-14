

// Button declarations // **********************

let rockButton = document.getElementById("rockBtn");
let paperButton = document.getElementById('paperBtn');
let scissorsButton = document.getElementById('scissorsBtn');

let playButton = document.getElementById('playBtn');
let resetButton = document.getElementById('resetBtn');

let playerScoreDisplay = document.getElementById('playerScoreDisplay');
let computerScoreDisplay = document.getElementById('computerScoreDisplay');






let userWins = 0;
let computerWins = 0;




rockButton.addEventListener('click', function () {
    playRound('rock');
});

paperButton.addEventListener('click', function () {
    playRound('paper');
});

scissorsButton.addEventListener('click', function () {
    playRound('scissors');
});

playButton.addEventListener('click', function () {
    playGame();
});

resetButton.addEventListener('click', function () {
    resetGame();
});







function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    let winner = determineWinner(userChoice, computerChoice);

    if (winner === 'User Wins') {
        userWins++;
    } else if (winner === 'Computer Wins') {
        computerWins++;
    }

    updateScores();
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    updateScores();
}

function updateScores() {
    playerScoreDisplay.textContent = userWins;
    computerScoreDisplay.textContent = computerWins;
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else if (randomNum === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return 'Computer Wins';
        } else if (computerChoice === "scissors") {
            return 'User Wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins';
        } else if (computerChoice === 'rock') {
            return 'User Wins';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins';
        } else if (computerChoice === 'paper') {
            return 'User Wins';
        }
    } else {
        return 'Error';
    }
}
