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