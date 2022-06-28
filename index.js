// Step 1

// Make a function computerPlay
// to play against a computer

function computerPlay(rock, paper, scissors) {
	let calc = Math.floor(Math.random() * 3) + 1;
	if (calc == 1) {
		return (computerPlay = "rock");
	} else if (calc == 2) {
		return (computerPlay = "paper");
	} else {
		return (computerPlay = "scissors");
	}
}

// It will randomly return either
// Rock, Paper, or Scissors

// We use this function to play against computer

// Step 2
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let round = prompt("Pick between Rock, Paper, or Scissors:");
const playerSelection = round;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
	if (playerSelection == rock && computerSelection == scissors) {
		alert("You win! Rock beats scissors");
		console.log(
			`You picked ${playerSelection}, and the computer picked ${computerSelection}`
		);
	} else if (playerSelection == rock && computerSelection == paper) {
		alert("You lose! Paper beats rock");
		console.log(
			`You picked ${playerSelection}, and the computer picked ${computerSelection}`
		);
	} else if (playerSelection == rock && computerSelection == rock) {
		alert("It's a tie! You both picked rock");
		console.log(
			`You picked ${playerSelection}, and the computer picked ${computerSelection}`
		);
	}
}
console.log(playRound(playerSelection, computerSelection));

function game() {
	playRound();
}

// Write a function that plays a single round of RPS

// Function should take 2 parameters

// playerSelection and computerSelection
// and return a string to declare a winner

// playerSelection should be case insensitive

// Step 3

// Make a function called game
// Call the playRound function to play 5 rounds
// using for loop
// It will keep track of score and report
// winner/loser
