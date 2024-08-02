// Rock Paper Scissors

function getComputerChoice()
{
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomNumber = Math.floor(Math.random()*30) + 1;
    console.log(randomNumber);

    if(1 <= randomNumber && randomNumber <= 10)
    {
        return rock;
    }
    else if(11 <= randomNumber && randomNumber <= 20)
    {
        return paper;
    }
    else
    {
        return scissors;
    }
    
}

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice : Rock or Paper or Scissors?");
    return humanChoice;
}

const humanSelection = getHumanChoice();
console.log(humanSelection);

const computerSelection = getComputerChoice()
console.log(computerSelection);

// playRound(humanSelection,computerSelection);

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);

        if(humanChoice === computerChoice)
        {
            console.log("Oops! It's a tie!");
        }

        if(humanChoice === "rock" && computerChoice === "paper")
        {
            console.log("You loose! Paper beats rocks");
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissor")
        {
            console.log("You loose! Scissor beats paper");
            computerScore++;
        }
        else if(humanChoice === "scissor" && computerChoice === "rock")
        {
            console.log("You loose! Rock beats scissor");
            computerScore++;
        }
        else
        {
            console.log("You win!");
            humanScore++;
        }

    }

    let i = 1;
    while(i <= 5)
    {
        playRound(humanSelection,computerSelection);
    }

    if(humanScore > computerScore)
    {
        console.log("Congratulations you won this round!");
    }
}

playGame();