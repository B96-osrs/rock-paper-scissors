let playerScore;
let computerScore;
const playOption = ["rock","paper","scissors"];
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(2 - 0 +1));
    console.log("Computer picked: " + playOption[randomNumber]);
    console.log("=========================")
    return playOption[randomNumber]; 
}

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors?:");
    playerInput = playerInput.toLowerCase();
    if(playOption.includes(playerInput)) {
            console.log("Player picked: " + playerInput);
            console.log("=========================")
        return playerInput;
    }
    else {
        getPlayerChoice();
    }

}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return ("Game even! " + playerSelection + " vs " + computerSelection);
    }
    else if(playerSelection === playOption[0] && computerSelection === playOption[1]) {
        computerScore++;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[0]) {
        computerScore++;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[1] && computerSelection === playOption[0]) {
        playerScore++;
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === playOption[0] && computerSelection === playOption[2]) {
        playerScore++;
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
}

console.log(playRound(playerSelection, computerSelection));










