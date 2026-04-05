function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum == 1 ? "rock" : 
    randomNum == 2 ? "paper" : "scissors";
}

function getHumanChoice(){
   let input = prompt("Enter your choice (Rock , Paper , Scissors)");
    let choice = input.toLowerCase();
    if(choice === "rock" 
    || choice === "paper" 
    || choice === "scissors"){
        return choice;
    } else {
        console.log("No choice! Default PAPER")
        return "paper";
    }
}

function playGame(){
    let humanScore = 0 
    let computerScore = 0;
    let rounds = 0;

    function playRound(){
        if(rounds == 5)return;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if(computerChoice == humanChoice){
            console.log("It's A Tie");
        }
        else if(computerChoice == "paper" && humanChoice == "rock" 
            || computerChoice =="scissors" && humanChoice == "paper" 
            || computerChoice == "rock" && humanChoice == "scissors"){
            console.log("Computer Wins!");
            computerScore++;
        } else {
            console.log("You Win!")
            humanScore++;
        }
        rounds++;
        playRound();
    }
    playRound();

    console.log(`Human: ${humanScore}, Computer: ${computerScore}, Rounds: ${rounds}`);
}

playGame();
