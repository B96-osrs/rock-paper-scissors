let playerScore = 0;
let computerScore = 0;
const playOption = ["rock","paper","scissors"];
let playerChoice;
let computerChoice;

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*(2 - 0 +1));
    return playOption[randomNumber]; 
}


function determineRoundWinner(playerSelection, computerSelection) {
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

    const winMessageBox = document.createElement("div");
    document.body.appendChild(winMessageBox);
    winMessageBox.setAttribute("id" , "winMessageBox");
    if(playerScore > computerScore) {
        winMessageBox.textContent = "Game won!";
    }
    else {
        winMessageBox.textContent = "Game lost!";
    }

}

function displayRoundResult() {
    const resultBox = document.createElement("div");
    document.body.appendChild(resultBox);
    resultBox.setAttribute("id","resultBox");
    resultBox.textContent = determineRoundWinner(playerChoice, getComputerChoice());

}

function updateScore() {
    // let scoreBox = document.getElementById("score-box");
    // scoreBox.textContent = "Score: ";
    // scoreBox.textContent += ("You: " + playerScore + " Computer: " + computerScore);

    let playerScoreBox = document.getElementById("player-score-box");
    let computerScoreBox = document.getElementById("computer-score-box");
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;

}

function playRound(buttonChoice) {
    if(playerScore === 5 || computerScore === 5) {
        startNewGame();
    }
    if(document.body.contains(document.getElementById("resultBox"))) {
        document.getElementById("resultBox").remove();
    }   
    playerChoice = buttonChoice;
    displayRoundResult();
    updateScore();
    if(checkForWinCondition(playerScore,computerScore) === true) {
        displayEndResult();
    }
}




rockButton.addEventListener("click", function() {
    playRound("rock");

});

paperButton.addEventListener("click", function() {
    playRound("paper");
});


scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});
















