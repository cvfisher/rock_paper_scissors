const choices = ["rock", "paper", "scissors"];
const playerSelection = prompt("Make your choice!").toUpperCase();
let playerScore = 1;
let computerScore = 1;
const computerSelection = getComputerChoice();
// Randomly returns a choice
function getComputerChoice() {
  let compSelect = choices[Math.floor(Math.random() * choices.length)];
  return compSelect.toUpperCase();
}
console.log(getComputerChoice());

// Plays a single round and returns string declaring winner of that round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return `You: ${playerScore} Opponent: ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return `You: ${(playerScore += 1)}`;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return `Opponent: ${(computerScore += 1)}`;
  }
}
console.log(playRound(playerSelection, computerSelection));
