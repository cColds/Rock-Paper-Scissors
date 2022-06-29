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

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
round = prompt("Pick Rock, Paper, or Scissors:").toLowerCase();
const playerSelection = round;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
	switch (playerSelection) {
		case "rock":
			if (playerSelection == rock && computerSelection == scissors) {
				alert("You win! Rock beats scissors");
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else if (playerSelection == rock && computerSelection == paper) {
				alert("You lose! Paper beats rock");
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else {
				alert("It's a tie! You both picked rock");

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			}
			break;
		case "paper":
			if (playerSelection == paper && computerSelection == paper) {
				alert("You win! Paper beats rock");
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else if (
				playerSelection == paper &&
				computerSelection == scissors
			) {
				alert("You lose! Scissors beats paper");
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else {
				alert("It's a tie! You both picked paper");

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			}
			break;
		case "scissors":
			if (playerSelection == scissors && computerSelection == paper) {
				alert("You win! Scissors beats paper");
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else if (
				playerSelection == scissors &&
				computerSelection == rock
			) {
				alert("You lose! Rock beats scissors");
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else {
				alert("It's a tie! You both picked scissors");

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			}
			break;

		case round:
			if (round !== rock || paper || scissors) {
				alert("Invalid hand or game cancelled");
			}
	}
}

playRound(playerSelection, computerSelection);

function game() {
	for (let i = 0; i < 5; i++) {
		playRound(playerSelection, computerSelection);

		let score = i + 1;
		console.log(score);
	}
	if (playerSelection == 5) {
		alert("You are the winner!");
		console.log("You are the winner!");
	} else if (computerSelection == 5) {
		alert("You lost! The computer has won.");
		console.log("You lost! The computer has won.");
	}
}
game();
