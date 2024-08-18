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

function playRound(event)
{
    let humanChoice = getHumanChoice();
    console.log("human choice : ", humanChoice);

    let computerChoice = getComputerChoice();
    console.log('computer choice : ', computerChoice);

    roundCount++;

    document.getElementById('humanChoice').textContent = `Human Choice : ${humanChoice}`;
    document.getElementById('computerChoice').textContent = `Computer Choice : ${computerChoice}`;
    document.getElementById('roundNo').textContent = `Round : ${roundCount}`;
    document.getElementById('humanScore').textContent = `Human Score : ${humanScore}`;
    document.getElementById('computerScore').textContent = `Computer Score : ${computerScore}`;


    if( humanChoice === RPS[0] && computerChoice === RPS[1] ||
        humanChoice === RPS[1] && computerChoice === RPS[2] ||
        humanChoice === RPS[2] && computerChoice === RPS[0] 
    )
    {
        document.getElementById('winner').textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
    }
    else 
    {
        document.getElementById('winner').textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

const Rock = document.createElement("button");
const Paper = document.createElement("button");
const Scissors = document.createElement("button");

Rock.textContent = "Rock";
Paper.textContent = "Paper";
scissor.textContent = "Scissors";

const div = document.querySelector('content');

[Rock, Paper, Scissors].forEach(button => {
    div.appendChild(button);
    button.addEventListener('click', playRound);
})

