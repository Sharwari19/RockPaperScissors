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
const humanSelection = document.getElementById('humanChoice');
const computerSelection = document.getElementById('computerChoice');
const count = document.getElementById('roundNo');
const humanRecord = document.getElementById('humanScore');
const computerRecord = document.getElementById('computerScore');

function RestartGame()
{
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

   humanSelection.textContent = `Human Choice : `;
   computerSelection.textContent = `Computer Choice : `;
   count.textContent = `Round : ${roundCount}`;
   humanRecord.textContent = `Human Score : ${humanScore}`;
   computerRecord.textContent = `Computer Score : ${computerScore}`;
   document.getElementById('restart').textContent = "Game Restarted!";
}

function playRound(event)
{
    let humanChoice = getHumanChoice();
    console.log("human choice : ", humanChoice);

    let computerChoice = getComputerChoice();
    console.log('computer choice : ', computerChoice);

    roundCount++;

    humanSelection.textContent = `Human Choice : ${humanChoice}`;
    computerSelection.textContent = `Computer Choice : ${computerChoice}`;
    count.textContent = `Round : ${roundCount}`;
    humanRecord.textContent = `Human Score : ${humanScore}`;
    computerRecord.textContent = `Computer Score : ${computerScore}`;


    if( humanChoice === RPS[0] && computerChoice === RPS[1] ||
        humanChoice === RPS[1] && computerChoice === RPS[2] ||
        humanChoice === RPS[2] && computerChoice === RPS[0] 
    )
    {
        document.getElementById('result').textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
    }
    else 
    {
        document.getElementById('result').textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    if((humanScore > computerScore) && roundCount === 6)
    {
        document.getElementById('winner').textContent = `Round Winner : You!`;
        RestartGame();
    }
    else if((humanScore < computerScore) && roundCount === 6)
    {
        document.getElementById('winner').textContent = `Round Winner : Computer!`;
        RestartGame();
    }
}

const Rock = document.createElement("button");
const Paper = document.createElement("button");
const Scissors = document.createElement("button");
const Restart = document.createElement("button");

Rock.textContent = "Rock";
Paper.textContent = "Paper";
scissor.textContent = "Scissors";
Restart.textContent = "Restart";

const div = document.querySelector('content');
const restartDiv = document.getElementById('restart');
restartDiv.appendChild(Restart);
Restart.addEventListener('click', RestartGame);

[Rock, Paper, Scissors].forEach(button => {
    div.appendChild(button);
    button.addEventListener('click', playRound);
})

