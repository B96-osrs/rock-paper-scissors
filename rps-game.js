let playerScore = 0;
let computerScore = 0;
const playOption = ["rock","paper","scissors"];
let playerChoice;
let computerChoice;

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");

let delayInMilliseconds = 400;




function getComputerChoice() {

    let randomNumber = Math.floor(Math.random()*(2 - 0 +1));
    const computerPickBox = document.getElementById("computer-pick");
    computerPickBox.textContent ="";
    setTimeout(() => {
        computerPickBox.textContent = playOption[randomNumber].toString().toUpperCase();     
    }, delayInMilliseconds);

    return playOption[randomNumber]; 
        
    
}


function determineRoundWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return ("Game even! " + playerSelection + " vs " + computerSelection);
    }
    //lose conditions for player
    else if(playerSelection === playOption[0] && computerSelection === playOption[1]) {
        ++computerScore;
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[0]) {
        ++computerScore;
    }
    else if(playerSelection === playOption[1] && computerSelection === playOption[2]) {
        ++computerScore;
    }
    //win conditions for player
    else if(playerSelection === playOption[1] && computerSelection === playOption[0]) {
        ++playerScore;
    }
    else if(playerSelection === playOption[0] && computerSelection === playOption[2]) {
        ++playerScore;
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[1]) {
        ++computerScore;
    }
    else {
        console.log("no case");
    }
}

function checkForWinCondition(playerScore, computerScore) {
    return (playerScore === 5 || computerScore === 5);

}

function startNewGame() {
    playerScore = 0;
    computerScore = 0;
    if(document.body.contains(document.getElementById("resultBox"))) {
        document.getElementById("resultBox").remove();
    }

    if(document.body.contains(document.getElementById("winMessageBox"))) {
        document.getElementById("winMessageBox").remove();
    }
}

function displayEndResult() {
    setTimeout(() => {
    const winMessageBox = document.createElement("span");
    const targetBox = document.getElementById("user-pick");
    document.body.prepend(winMessageBox);

    winMessageBox.setAttribute("id" , "winMessageBox");
    if(playerScore > computerScore) {
        winMessageBox.style.backgroundColor = "green";
        winMessageBox.textContent = "Game won!";
    }
    else {
        winMessageBox.style.backgroundColor = "orange";
        winMessageBox.textContent = "Game lost!";
    }
    }, delayInMilliseconds);

}


function updateScore() {
    let playerScoreBox = document.getElementById("player-score-box");
    let computerScoreBox = document.getElementById("computer-score-box");
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
}

function playRound(buttonChoice) {
    if(playerScore === 5 || computerScore === 5) {
        startNewGame();
    }  
    playerChoice = buttonChoice;
    determineRoundWinner(playerChoice, getComputerChoice());
    updateScore();
    if(checkForWinCondition(playerScore,computerScore) === true) {
        displayEndResult();
    }
}




rockButton.addEventListener("click", function() {
    const userPickBox = document.getElementById("user-pick");
    userPickBox.textContent ="ROCK";

        playRound("rock");
});

paperButton.addEventListener("click", function() {
    const userPickBox = document.getElementById("user-pick");
    userPickBox.textContent ="PAPER";

        playRound("paper");
});


scissorsButton.addEventListener("click", function() {
    const userPickBox = document.getElementById("user-pick");
    userPickBox.textContent ="SCISSORS";

        playRound("scissors");     
});
















