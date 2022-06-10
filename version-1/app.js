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
    }
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Scissors":
                    return true;
                    break;
                case "Paper":
                    return false;
                    break;
            }
            break;
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return true;
                    break;
                case "Scissors":
                    return false;
                    break;
            }
            break;
        case "Scissors":
            switch (computerSelection) {
                case "Paper":
                    return true;
                    break;
                case "Rock":
                    return false;
                    break;
            }
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    upper = (playerSelection) => (playerSelection[0].toUpperCase()).concat(playerSelection.slice(1).toLowerCase());
    playerSelection = upper(playerSelection);
    switch (winLose(playerSelection,computerSelection)){
        case null:
            return `Draw! Both players used ${playerSelection}`
        case true:
            return `Win! ${playerSelection} beats ${computerSelection}`
        case false:
            return `Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playAgain() {
    if(window.confirm( "Play again?")){
        game();
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let options = ["Rock","Paper","Scissors"]
    upper = (playerSelection) => (playerSelection[0].toUpperCase()).concat(playerSelection.slice(1).toLowerCase());
    
    for (let i = 0; i <5; i++) {
        let playerSelection;
        let computerSelection = computerPlay();
        
        while (!(options.includes(playerSelection))) {
        playerSelection = prompt("Choose Rock, Paper or Scissors");
        playerSelection = upper(playerSelection);
        }
        
        console.log(playRound(playerSelection,computerSelection));
        if (winLose(playerSelection,computerSelection) === true) {
            playerScore++;
        } else if (winLose(playerSelection,computerSelection) === false) {
            computerScore++;
        }
        if (playerScore === 3) {
            alert("You Win! " + "Score: " + playerScore + "-" + computerScore);
            playAgain();
        } else if (computerScore === 3) {
            alert("You Lose! " + "Score: " + playerScore + "-" + computerScore);
            playAgain();
        } else {
            console.log("Score: " + playerScore + "-" + computerScore);
        }
        if (winLose(playerSelection,computerSelection) === null) {
            i--;
        };
            console.log(i);
    }
}

game()