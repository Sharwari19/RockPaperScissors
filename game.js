// Rock Paper Scissors

let RPS = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*3);
    console.log('randomNumber : ', randomNumber);
    return RPS[randomNumber];
}

function getHumanChoice()
{
    let answer = prompt("Rock, Paper or Scissors?");
    if(!isNaN(answer))
    {
       alert("Invalid Input");   
       return; 
    }

    return answer;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound()
{
    let humanChoice = getHumanChoice();
    console.log("human choice : ", humanChoice);

    let computerChoice = getComputerChoice();
    console.log('computer choice : ', computerChoice);

    roundCount++;

    if( humanChoice === RPS[0] && computerChoice === RPS[1] ||
        humanChoice === RPS[1] && computerChoice === RPS[2] ||
        humanChoice === RPS[2] && computerChoice === RPS[0] 
    )
    {
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }
    else 
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}