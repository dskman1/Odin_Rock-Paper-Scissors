function getComputerChoise(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum == 1 ? "rock" : 
    randomNum == 2 ? "paper" : "scissors";
}

function getHumanChoice(){
    let input = prompt("Enter your choice");
    let choice = input.toLowerCase();
    return choice == "rock" ? "rock" : 
    choice == "scissors" ? "scissors" : "paper";
}

let humanScore = 0 
let computerScore = 0;
function playGame(){
    function playRound(humanChoice, computerChoice){
        if(computerChoice == humanChoice){
            console.log("It's A Tie");
        }
        else if(computerChoice == "paper" && humanChoice == "rock"){
            console.log("Computer Wins!");
            computerScore++;
        }
        else if(computerChoice =="scissors" && humanChoice == "paper"){
            console.log("Computer Wins!");
            computerScore++;
        }
        else if(computerChoice == "rock" && humanChoice == "scissors"){
            console.log("Computer Wins!")
            computerScore++;
        }

        else {

            console.log("You Win!")
            humanScore++;
        }
    }
    
playRound(getHumanChoice(), getComputerChoise());
playRound(getHumanChoice(), getComputerChoise());
playRound(getHumanChoice(), getComputerChoise());
playRound(getHumanChoice(), getComputerChoise());
playRound(getHumanChoice(), getComputerChoise());


}

playGame();
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);