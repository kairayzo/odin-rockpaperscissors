let playerScore;
let computerScore;

function computerPlay() {
    let rand = Math.floor(Math.random()*3)+1;
    switch (rand) {
        case 1:
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function winLose(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return null;
    } else {
        let res;
        switch (playerSelection) {
            case "Rock":
                computerSelection === "Scissors" ? res = false : res = true;
                break;
            case "Paper":
                computerSelection === "Rock" ? res = false : res = true;
                break;
            case "Scissors":
                computerSelection === "Paper" ? res = false : res = true;
                break;
        }
        return res;
    }
}

function updateMsg(txt) {
    const msg = document.querySelector(".msg");
    msg.textContent = txt;
}

function addScore(player) {
    switch (player) {
        case "player":
            score = document.querySelector(".playerScore");
            break;
        case "computer":
            score = document.querySelector(".computerScore");
            break;
    }
    score.textContent = Number(score.textContent) + 1
    console.log("added")
}

function playRound(playerSelection, computerSelection) {
    switch (winLose(playerSelection,computerSelection)){
        case null:
            updateMsg(`Draw! Both players used ${playerSelection}`);
            break;
        case true:
            playerScore += 1
            updateMsg(`Win! ${playerSelection} beats ${computerSelection}`);
            addScore("player");
            break;
        case false:
            computerScore += 1
            updateMsg(`Lose! ${computerSelection} beats ${playerSelection}`);
            addScore("computer");
            break;
    }
    if (playerScore === 5) {
        playAgain("Player");
    } else if (computerScore === 5) {
        playAgain("Computer");
    }
}

function contGame(e) {
    let playerSelection = e.target.className;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function playAgain(winner) {
    if(window.confirm( `${winner}` + " wins! Play again?")){
        game();
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".playerScore").textContent = 0;
    document.querySelector(".computerScore").textContent = 0;
    document.querySelector(".msg").textContent = ""
    const btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(btn => btn.addEventListener("click", contGame));
}

game();