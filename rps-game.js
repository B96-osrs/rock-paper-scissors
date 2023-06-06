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
        return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[0]) {
        ++computerScore;
        return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
    else if(playerSelection === playOption[1] && computerSelection === playOption[2]) {
        ++computerScore;
        return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
    //win conditions for player
    else if(playerSelection === playOption[1] && computerSelection === playOption[0]) {
        ++playerScore;
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === playOption[0] && computerSelection === playOption[2]) {
        ++playerScore;
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if(playerSelection === playOption[2] && computerSelection === playOption[1]) {
        ++computerScore;
        return ("You wose! " + computerSelection + " beats " + playerSelection);
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
    // targetBox.after(winMessageBox);
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
















