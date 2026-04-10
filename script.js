function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum == 1 ? "Rock" : 
    randomNum == 2 ? "Paper" : "Scissors";
}



function getHumanChoice(choice){
    choice = choice.toLowerCase();
    if(choice === "rock" 
    || choice === "paper" 
    || choice === "scissors"){
        console.log(`Human : ${choice}`);
        return choice;
    } else {
        console.log("No choice! Default PAPER")
        return "paper";
    }
}


let humanScore = 0 ;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice){
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    let isEqual = humanChoice === computerChoice;

    console.log(`Computer : ${computerChoice}`);
    
    
    humanChoiceText.textContent = `Human Choice : ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`;
    computerChoiceText.textContent = `Computer Choice : ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;

    if(computerChoice == humanChoice){
        setWinner.textContent = "It's A Tie";
        console.log("It's A Tie");
    }
    else if(computerChoice == "paper" && humanChoice == "rock" 
        || computerChoice =="scissors" && humanChoice == "paper" 
        || computerChoice == "rock" && humanChoice == "scissors"){
        console.log("Computer Wins!");
        computerScore++;
        computerScoreText.textContent = `Computer Score : ${computerScore}`;
        setWinner.textContent = "Computer Wins!";
    } else {
        console.log("You Win!")
        humanScore++;
        humanScoreText.textContent = `Human Score : ${humanScore}`;
        setWinner.textContent = "You Win";
    }
    rounds++;
    roundsPlayed.textContent = `Rounds Played : ${rounds}`;
}

const buttonPressed = (pickFunc , pick, playFunc, winnerFunc, resetFunc) => {
    let picked  = pickFunc(pick);
    playFunc(picked);
    winnerFunc();
    resetFunc();
    
};

function resetGame(){
    if(humanScore === 5 || computerScore === 5){
        humanScore = 0;
        computerScore = 0;
        rounds = 0;
    }
    computerScoreText.textContent = `Computer Score : ${computerScore}`;
    humanScoreText.textContent =`Human Score : ${humanScore}`;
    roundsPlayed.textContent = `Rounds Played : ${rounds}`;
   
}

function announceWinner(){
    if(humanScore === 5){
        finalResult.textContent = `You Won the Game BY ${humanScore - computerScore} 
        ${humanScore - computerScore === 1 ? "Point" : "Points"}`
        totalRounds.textContent = `Total Rounds Played : ${rounds}`;
    } 
    else if(computerScore === 5){
        finalResult.textContent = `You Lost the Game BY ${computerScore - humanScore} 
        ${computerScore - humanScore === 1 ? "Point" : "Points"}`
        totalRounds.textContent = `Total Rounds Played : ${rounds}`;
    }else{
        finalResult.textContent = "";
        totalRounds.textContent = "";
    }

}

function optionalReset(){
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    humanScoreText.textContent =`Human Score : ${humanScore}`;
    computerScoreText.textContent = `Computer Score : ${computerScore}`;
    roundsPlayed.textContent = `Rounds Played : ${rounds}`;
    finalResult.textContent = "";
    totalRounds.textContent = "";
    humanChoiceText.textContent = "";
    computerChoiceText.textContent = "";
    setWinner.textContent = "";
}

const container = document.createElement("div");
document.body.appendChild(container);

const header = document.createElement("h1");
container.appendChild(header);
header.textContent = "Rock Paper Scissors"

const btnsContainer = document.createElement("div");
container.appendChild(btnsContainer);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
btnsContainer.appendChild(rockBtn);


const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
btnsContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnsContainer.appendChild(scissorsBtn);

const buttons = btnsContainer.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click" , () =>{
        span.textContent = "";
        buttonPressed(getHumanChoice, btn.textContent, playRound, announceWinner, resetGame)
    })
})


const scoreContainer = document.createElement("div");
container.appendChild(scoreContainer);

const humanScoreText = document.createElement("p");
humanScoreText.textContent =`Human Score : ${humanScore}`;
scoreContainer.appendChild(humanScoreText);

const computerScoreText = document.createElement("p");
computerScoreText.textContent = `Computer Score : ${computerScore}`;
scoreContainer.appendChild(computerScoreText);

const roundsPlayed = document.createElement("p");
roundsPlayed.textContent = `Rounds Played : ${rounds}`;
scoreContainer.appendChild(roundsPlayed);


const choicesContainer = document.createElement("div");
container.insertBefore(choicesContainer, scoreContainer);

const setWinner = document.createElement("p");
choicesContainer.appendChild(setWinner);

const humanChoiceText = document.createElement("p")
choicesContainer.appendChild(humanChoiceText);

const computerChoiceText = document.createElement("p")
choicesContainer.appendChild(computerChoiceText);


const finalResult = document.createElement("p");
container.appendChild(finalResult);

const totalRounds = document.createElement("p")
container.appendChild(totalRounds);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
container.appendChild(resetBtn);
resetBtn.addEventListener("click", () =>{
    console.log("Loser")
    optionalReset();
    span.textContent = "Game Is Reset"

})

const span = document.createElement("span");
container.appendChild(span);



    
