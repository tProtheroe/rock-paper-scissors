function computerPlay(){
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return choiceList[choice];
}

function play(playerSelection, computerSelection){
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissors"){
                return "Well done! Rock beats Scissors"
            } else if (computerSelection === "paper"){
                return "You lose! Paper beats Rock!"
            } else {
                return "It's a tie!"
            }
            break;

        case "paper":
            if (computerSelection === "rock"){
                return "Well done! Paper beats Rock"
            } else if (computerSelection === "scissors"){
                return "You lose! Scissors beats Paper!"
            } else {
                return "It's a tie!"
            }
            break;

        case "scissors":
            if (computerSelection === "paper"){
                return "Well done! Scissors beats Paper"
            } else if (computerSelection === "rock"){
                return "You lose! Rock beats Scissors!"
            } else {
                return "It's a tie!"
            }
            break
    }
}


function game(){
    playerScore = 0;
    computerScore = 0;

    for(i = 0; i < 5; i++){

        let playerSelection = prompt("Enter your choice: ", "Answer");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = computerPlay();

        if(play(playerSelection, computerSelection).includes("lose")){
            computerScore++;
        } else if(play(playerSelection, computerSelection).includes("Well")){
            playerScore++;
        }
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(play(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    }

    if(playerScore > computerScore){
        console.log("The winner is the Player with " + playerScore + " points!");
    } else if(playerScore < computerScore){
        console.log("The winner is the Computer with " + computerScore + " points!");
    } else {
        console.log("We have a tie!");
    }
}

game();

