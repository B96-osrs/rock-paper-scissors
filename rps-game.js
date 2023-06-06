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
    if(playerScore === 5 || computerScore === 5) {
        startNewGame();
    }

    if(document.body.contains(document.getElementById("resultBox"))) {
        document.getElementById("resultBox").remove();
    }
    
    playerChoice = "rock";
    const resultBox = document.createElement("div");
    document.body.appendChild(resultBox);
    resultBox.setAttribute("id","resultBox");
    resultBox.textContent = playRound(playerChoice, getComputerChoice());
    let scoreBox = document.getElementById("scoreBox");
    scoreBox.textContent = "Score: ";
    scoreBox.textContent += ("Player: " + playerScore + " Computer: " + computerScore);
    console.log(checkForWinCondition(playerScore,computerScore));
    if(checkForWinCondition(playerScore,computerScore) === true) {
        console.log("winMessageBox appeared");
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
});

paperButton.addEventListener("click", function() {
    if(playerScore === 5 || computerScore === 5) {
        startNewGame();
    }

    if(document.body.contains(document.getElementById("resultBox"))) {
        document.getElementById("resultBox").remove();
    }
    
    playerChoice = "paper";
    const resultBox = document.createElement("div");
    document.body.appendChild(resultBox);
    resultBox.setAttribute("id","resultBox");
    resultBox.textContent = playRound(playerChoice, getComputerChoice());
    let scoreBox = document.getElementById("scoreBox");
    scoreBox.textContent = "Score: ";
    scoreBox.textContent += ("Player: " + playerScore + " Computer: " + computerScore);
    console.log(checkForWinCondition(playerScore,computerScore));
    if(checkForWinCondition(playerScore,computerScore) === true) {
        console.log("winMessageBox appeared");
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
});


scissorsButton.addEventListener("click", function() {
    if(playerScore === 5 || computerScore === 5) {
        startNewGame();
    }

    if(document.body.contains(document.getElementById("resultBox"))) {
        document.getElementById("resultBox").remove();
    }
    
    playerChoice = "scissors";
    const resultBox = document.createElement("div");
    document.body.appendChild(resultBox);
    resultBox.setAttribute("id","resultBox");
    resultBox.textContent = playRound(playerChoice, getComputerChoice());
    let scoreBox = document.getElementById("scoreBox");
    scoreBox.textContent = "Score: ";
    scoreBox.textContent += ("Player: " + playerScore + " Computer: " + computerScore);
    console.log(checkForWinCondition(playerScore,computerScore));
    if(checkForWinCondition(playerScore,computerScore) === true) {
        console.log("winMessageBox appeared");
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
});
















