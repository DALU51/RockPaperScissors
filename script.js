const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

let humanScore = 0;
let computerScore = 0;

alert ("You have 5 rounds to beat the computer")
playGame();

function getHumanChoice(){
    let choice = prompt ("Choose between Rock, Paper or scissors");
    choice = choice.charAt(0).toUpperCase() + choice.toLowerCase().slice(1);
    if (choice === "Rock"){
        return Rock
    } else if (choice === "Paper"){
        return Paper
    } else if (choice === "Scissors"){
        return Scissors
    } else if (choice !== "Rock" , "Paper" , "Scissors"){
        console.log(choice + " is an invalid option, Please Try again"); 
        return getHumanChoice();
    }
}


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0){
        return Rock
    } else if (random === 1){
        return Paper
    } else if (random === 2){
        return Scissors
    }
} 

function playRound(humanChoice,computerChoice){

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice === computerChoice) { 
        console.log("It's a tie")
    }

    if (humanChoice === Rock && computerChoice === Scissors){
        console.log("You won! Rock breaks Scissors");
        humanScore++;
    } 

    if (humanChoice === Paper && computerChoice === Rock){
        console.log("You won! Paper covers Rock");
        humanScore++;
    } 
    
    if (humanChoice === Scissors && computerChoice === Paper){
        console.log("You won! Scissors cuts Paper");
        humanScore++;
    } 
    
    if (computerChoice === Rock && humanChoice === Scissors){
        console.log("Computer won! Rock breaks Scissors")
        computerScore++;
    } 
    
    if (computerChoice === Paper && humanChoice === Rock){
        console.log("Computer won! Paper covers Rock")
        computerScore++;
    } 
    
    if (computerChoice === Scissors && humanChoice === Paper){
        console.log("Computer won! Scissors cuts Paper")
        computerScore++;
    }
}

function playGame(){
    for (i = 1 ; i < 6 ; i++){
        console.log("ROUND " + i)
        playRound();
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if ( i = 6 && humanScore > computerScore){
        console.log("you win the game, congratulations!!!")
    }else if(i = 6 && computerScore > humanScore){
        console.log("you lost the game ):")
    } else {
        console.log("It is a tie! EVERYONE WINS!!")
    }
}