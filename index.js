function computerPlay(rock, paper, scissors) {
	let calc = Math.floor(Math.random() * 3) + 1;
	if (calc == 1) {
		return "rock";
	} else if (calc == 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
// let round = prompt("Pick Rock, Paper, or Scissors:").toLowerCase();
// let playerSelection = round;
// const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
	switch (playerSelection) {
		case "rock":
			if (computerSelection == scissors) {
				alert("You win! Rock beats scissors");

				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
				console.log(computerSelection);
			} else if (computerSelection == paper) {
				alert("You lose! Paper beats rock");

				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
				console.log(computerSelection);
			} else {
				alert("It's a tie! You both picked rock");

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
				console.log(computerSelection);
			}
			break;
		case "paper":
			if (computerSelection == paper) {
				alert("It's a tie! You both picked paper");
				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else if (computerSelection == scissors) {
				alert("You lose! Scissors beats paper");
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else {
				alert("You win! Paper beats rock");

				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			}
			break;
		case "scissors":
			if (computerSelection == paper) {
				alert("You win! Scissors beats paper");
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}`
				);
			} else if (computerSelection == rock) {
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

// playRound(playerSelection, computerSelection);

function game() {
	for (let i = 0; i < 5; i++) {
		const computerSelection = computerPlay();

		let round = prompt("Pick Rock, Paper, or Scissors:").toLowerCase();
		let playerSelection = round;
		playRound(playerSelection, computerSelection);

		// 	playerScore = playerSelection + i;
		// 	computerScore = computerSelection + i;

		// 	if (playerScore == 5) {
		// 		alert("You are the winner!");
		// 		console.log("You are the winner!");
		// 	} else if (computerScore == 5) {
		// 		alert("You lost! The computer has won.");
		// 		console.log("You lost! The computer has won.");
		// 	}
	}
}
game();
