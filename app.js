function getUserChoice() {
    return prompt("Rock Paper or Scissors?");
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "rock"
    } else if (randomNum === 1) {
        computerChoice = "paper"
    } else if (randomNum === 2) {
        computerChoice = "scissors"
    }
    return computerChoice
}

function determineWinner(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
        return "It's a tie!"
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return 'Computer Wins';
        } else if (computerChoice === "scissors") {
            return 'User Wins'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins';
        } else if (computerChoice === 'rock') {
            return 'User Wins'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins';
        } else if (computerChoice === 'paper') {
            return 'User Wins'
        }
    } else {
        return 'Error'
    }
}

function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    console.log('User Choice: ' + userChoice);
    console.log('Computer Choice: ' + computerChoice);

    let winner = determineWinner(userChoice, computerChoice);

    console.log('Result: ' + winner);

    return winner;
}

function playGame() {
    let userWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1) + ':');
        let roundResult = playRound();

        if (roundResult === 'User Wins') {
            userWins++;
        } else if (roundResult === 'Computer Wins') {
            computerWins++;
        }

        console.log("User Wins: " + userWins);
        console.log("Computer Wins: " + computerWins);

        if (userWins >= 3 || computerWins >= 3) {
            break;
        }
    }

    if (userWins > computerWins) {
        console.log("User wins the game!");
    } else if (computerWins > userWins) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();