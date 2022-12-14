const choices = ["rock", "paper", "scissors"];
let playerSelection = prompt("Make your choice!").toLowerCase();
let playerScore = 1;
let computerScore = 1;
let computerSelection = getComputerChoice();

// Randomly returns a choice
function getComputerChoice() {
  let compSelect = choices[Math.floor(Math.random() * choices.length)];
  return compSelect.toLowerCase();
}
console.log(`Your opponent chose ${computerSelection}`);

// Plays a single round and returns string declaring winner of that round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return `You: ${playerScore} Opponent: ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)} Opponent: ${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)} Opponent: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)} Opponent: ${computerScore}`;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return `You: ${playerScore} Opponent: ${(computerScore += 1)}`;
  }
}
console.log(playRound(playerSelection, computerSelection));

//Calls playRound and loops this function 5 times
function game() {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Make your choice!").toLowerCase();
    computerSelection = getComputerChoice();
    const game = playRound(playerSelection, computerSelection);
    console.log(game);
  }
  if (computerScore > playerScore) {
    console.log(
      `Opponent scored ${computerScore} and you scored ${playerScore}. You lose!`
    );
  } else if (playerScore === computerScore) {
    console.log(
      `Opponent scored ${computerScore} and you scored ${playerScore}. It's a draw!`
    );
  } else {
    console.log(
      `Opponent scored ${computerScore} and you scored ${playerScore}. Congrats hun. You win!`
    );
  }
}
game();
