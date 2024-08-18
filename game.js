// Rock Paper Scissors

let RPS = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*3);
    console.log('randomNumber : ', randomNumber);
    return RPS[randomNumber];
}

// function getHumanChoice()
// {
//     let answer = prompt("Rock, Paper or Scissors?");
//     if(!isNaN(answer))
//     {
//        alert("Invalid Input");   
//        return; 
//     }

//     return answer;
// }

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const humanSelection = document.getElementById('hchoice');
const computerSelection = document.getElementById('cchoice');
const count = document.getElementById('roundNo');

const humanRecord = document.getElementById('hscore');
humanRecord.textContent = '0';

const computerRecord = document.getElementById('cscore');
computerRecord.textContent = '0';

const resultText = document.getElementById('result');
const roundWinner =  document.getElementById('winner');
roundWinner.textContent = '';

function RestartGame()
{
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

   humanSelection.textContent = ``;
   computerSelection.textContent = ``;
   count.textContent = `Round : ${roundCount}`;

   humanRecord.textContent = `${humanScore}`;
   computerRecord.textContent = `${computerScore}`;

   resultText.textContent = '';
   roundWinner.textContent = '';
   restartDiv.textContent = "Game Restarted!";
}

function playRound(event)
{

    let humanChoice = event.target.textContent;
    console.log("human choice : ", humanChoice);

    let computerChoice = getComputerChoice();
    console.log('computer choice : ', computerChoice);

    roundCount++;
    restartDiv.textContent = '';
    restartDiv.appendChild(Restart);

    humanSelection.textContent = `${humanChoice}`;
    computerSelection.textContent = `${computerChoice}`;
    count.textContent = `Round : ${roundCount}`;

    if(humanChoice === computerChoice)
    {
        resultText.textContent = "Oops! It's a tie!";
    }

    if( humanChoice === RPS[0] && computerChoice === RPS[1] ||
        humanChoice === RPS[1] && computerChoice === RPS[2] ||
        humanChoice === RPS[2] && computerChoice === RPS[0] 
    )
    {
        resultText.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        computerRecord.textContent = `${computerScore}`;
        
    }
    else 
    {
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        humanRecord.textContent = `${humanScore}`;
    }

    if(humanScore === 5 || computerScore === 5)
    {
        if(humanScore > computerScore)
        {
           roundWinner.textContent = `Round Winner : You!`;
        }
        else
        {
            roundWinner.textContent = `Round Winner : Computer!`;   
        }
        setTimeout(RestartGame, 7000);
        
    }
    else
    {
        roundWinner.textContent = '';
    }
}

const Rock = document.createElement("button");
const Paper = document.createElement("button");
const Scissors = document.createElement("button");
const Restart = document.createElement("button");

Rock.textContent = "Rock";
Paper.textContent = "Paper";
Scissors.textContent = "Scissors";
Restart.textContent = "Restart";

const buttons = [Rock, Paper, Scissors];

const div = document.querySelector('.content');
const restartDiv = document.getElementById('restart');
restartDiv.appendChild(Restart);
Restart.addEventListener('click', RestartGame);

buttons.forEach(button => {
    div.appendChild(button);
    button.addEventListener('click', playRound);
})

