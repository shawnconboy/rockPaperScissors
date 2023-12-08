let computerSelection = getComputerChoice();
let playerChoice = prompt("Rock, paper, or scissors?");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
function playRound(computerSelection, playerChoice) {
    if (computerSelection === "rock") {
        if (playerChoice === "paper") {
            return "paper beats rock"
        } else if (playerChoice === "scissors") {
            return "rock beats scissors"
        } else if (playerChoice === "rock") {
            return "it's a tie"
        }
    } else if (computerSelection === "paper") {
        if (playerChoice === "rock") {
            return "paper beats rock"
        } else if (playerChoice === "scissors") {
            return "scissors beats paper"
        } else if (playerChoice === "paper") {
            return "it's a tie"
        }
    } else if (computerSelection === "scissors") {
        if (playerChoice === "rock") {
            return "rock beats scissors"
        } else if (playerChoice === "paper") {
            return "scissors beats paper"
        } else if (playerChoice === "scissors") {
            return "it's a tie"
        }
    }
}