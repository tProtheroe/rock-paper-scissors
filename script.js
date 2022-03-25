const body = document.querySelector('body');
const container = document.querySelector('.container');
const pChoice = document.querySelector('.p-choice')
const pScore = document.querySelector('.p-score');
const cChoice = document.querySelector('.c-choice');
const cScore = document.querySelector('.c-score');
const results = document.querySelector('.results');
const buttons = document.querySelector('.buttons');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const resetBtn = document.createElement('button')

rockBtn.className = "rock";
rockBtn.textContent = "Rock";
paperBtn.className = "paper";
paperBtn.textContent = "Paper";
scissorsBtn.className = "scissors"
scissorsBtn.textContent = "Scissors"; 
resetBtn.textContent = "Reset Game?";

buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let choiceList = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return choiceList[choice];
}

function roundWinner(pSelection, cSelection){
    pSelection = pSelection.toLowerCase();

    switch(pSelection) {
        case "rock":
            if (cSelection === "scissors"){
                return "Well done! Rock beats Scissors"
            } else if (cSelection === "paper"){
                return "You lose! Paper beats Rock!"
            } else {
                return "It's a tie!"
            }
            break;

        case "paper":
            if (cSelection === "rock"){
                return "Well done! Paper beats Rock"
            } else if (cSelection === "scissors"){
                return "You lose! Scissors beats Paper!"
            } else {
                return "It's a tie!"
            }
            break;

        case "scissors":
            if (cSelection === "paper"){
                return "Well done! Scissors beats Paper"
            } else if (cSelection === "rock"){
                return "You lose! Rock beats Scissors!"
            } else {
                return "It's a tie!"
            }
            break
    }
}

function game(choice){
    
    let playerSelection = choice;
    let computerSelection = computerPlay();

    if(roundWinner(playerSelection, computerSelection).includes("lose")){
        computerScore++;
    } else if(roundWinner(playerSelection, computerSelection).includes("Well")){
        playerScore++;
    }

    pChoice.textContent = "Player: " + playerSelection;
    cChoice.textContent = "Computer: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    pScore.textContent = "Score: " + playerScore;
    cScore.textContent = "Score: " + computerScore;
    results.textContent = roundWinner(playerSelection, computerSelection);

    gameWinner(playerScore, computerScore);
    
}

function reset(){
    playerScore = 0;
    computerScore = 0;

    buttons.appendChild(rockBtn);
    buttons.appendChild(paperBtn);
    buttons.appendChild(scissorsBtn);
    resetBtn.remove();

    pChoice.textContent = "Player: ";
    pScore.textContent = "Score: 0";
    cChoice.textContent = "Computer: ";
    cScore.textContent = "Score: 0";
}

function endGame(){
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    buttons.appendChild(resetBtn);
}

function gameWinner(playerScore, computerScore){

    if(playerScore || computerScore == 5){
        if(playerScore == 5){
            results.textContent = "The winner is the Player with " + playerScore + " points!";
            endGame();
        } else if(computerScore == 5){
            results.textContent = "The winner is the Computer with " + computerScore + " points!";
            endGame();
        } 
    }
}

rockBtn.addEventListener('click', function (){
	game(rockBtn.textContent)
});
paperBtn.addEventListener('click', function(){
	game(paperBtn.textContent)
});
scissorsBtn.addEventListener('click', function(){
	game(scissorsBtn.textContent)
});
resetBtn.addEventListener('click', reset);

