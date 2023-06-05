let playerScore = 0;
let computerScore = 0;
const playOption = ["rock","paper","scissors"];
let playerChoice;
let computerChoice;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(2 - 0 +1));
    console.log("Computer picked: " + playOption[randomNumber]);
    console.log("=========================");
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
    //lose conditions for player
    else if(playerSelection === playOption[0] && computerSelection === playOption[1]) {
        ++computerScore;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[0]) {
        ++computerScore;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[1] && computerSelection === playOption[2]) {
        ++computerScore;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    //win conditions for player
    else if(playerSelection === playOption[1] && computerSelection === playOption[0]) {
        ++playerScore;
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === playOption[0] && computerSelection === playOption[2]) {
        ++playerScore;
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[1]) {
        ++computerScore;
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else {
        console.log("no case");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    playerChoice = getPlayerChoice();
    console.clear();
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice,computerChoice));
    console.log("=========================")
    console.log("Player: " + playerScore + " Computer: " + computerScore);

    }   
}

// game();

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "mainContainer");
document.body.prepend(mainContainer);
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
mainContainer.appendChild(rockButton);
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
mainContainer.appendChild(paperButton);
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
mainContainer.appendChild(scissorsButton);




rockButton.addEventListener("click", function() {
    playerChoice = "rock";
    const resultBox = document.createElement("div");
    if(document.body.contains(document.getElementById("resultBox"))) {
        console.log("resultBox does exist");
    }
    document.body.appendChild(resultBox);
    resultBox.setAttribute("id","resultBox");
    resultBox.textContent = playRound(playerChoice, getComputerChoice());
});

scissorsButton.addEventListener("click", function() {
    playerChoice = "scissors";
    console.log(playRound(playerChoice, getComputerChoice()));

});

paperButton.addEventListener("click", function() {
    playerChoice = "paper";
    console.log(playRound(playerChoice, getComputerChoice()));

});

















