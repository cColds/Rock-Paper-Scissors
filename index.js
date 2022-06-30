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

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
	switch (playerSelection) {
		case "rock":
			if (computerSelection == scissors) {
				playerScore++;
				alert(`You win! Rock beats scissors \n
				Score: ${playerScore} - ${computerScore}`);

				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${playerScore} - ${computerScore}`
				);
				console.log(computerSelection);
			} else if (computerSelection == paper) {
				computerScore++;
				alert(`You lose! Paper beats rock\n
				Score: ${playerScore} - ${computerScore}`);

				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${playerScore} - ${computerScore}`
				);
				console.log(computerSelection);

				console.log(playerScore);
			} else {
				alert(`It's a tie! You both picked rock\n
				Score: ${playerScore} - ${computerScore}`);

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${playerScore} - ${computerScore}`
				);
				console.log(computerSelection);
			}
			break;
		case "paper":
			if (computerSelection == paper) {
				alert(`It's a tie! You both picked paper \n
				Score: ${playerScore} - ${computerScore}`);
				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${playerScore} - ${computerScore}`
				);
			} else if (computerSelection == scissors) {
				computerScore++;
				alert(`You lose! Scissors beats paper \n
				Score: ${playerScore} - ${computerScore}`);
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection} \n
					Score: ${playerScore} - ${computerScore}`
				);

				console.log(computerScore);
			} else {
				playerScore++;
				alert(`You win! Paper beats rock \n
				Score: ${playerScore} - ${computerScore}`);

				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection} \n
					Score: ${playerScore} - ${computerScore}`
				);
			}
			break;
		case "scissors":
			if (computerSelection == paper) {
				playerScore++;
				alert(`You win! Scissors beats paper\n
				Score: ${playerScore} - ${computerScore}`);
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					 Score: ${playerScore} - ${computerScore}`
				);
			} else if (computerSelection == rock) {
				computerScore++;
				alert(`You lose! Rock beats scissors \n
				Score: ${playerScore} - ${computerScore}`);
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					 Score: ${playerScore} - ${computerScore}`
				);

				console.log(computerScore);
			} else {
				alert(`It's a tie! You both picked scissors \n
				Score: ${playerScore} - ${computerScore}`);

				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}
					 Score: ${playerScore} - ${computerScore}`
				);
			}
			break;

		default:
			alert("Invalid hand or game cancelled");
	}
}

function game() {
	for (let i = 0; i < 30; i++) {
		const computerSelection = computerPlay();

		if (playerScore == 5) {
			alert(`Game over! You win. \n
			Final Score: ${playerScore} - ${computerScore}`);
			console.log(`Game over! You win. \n
			Final Score: ${playerScore} - ${computerScore}`);
			break;
		} else if (computerScore == 5) {
			alert(`Game over! You lose. \n
			Final Score: ${playerScore} - ${computerScore}`);
			console.log(`Game over! You win. \n
			Final Score: ${playerScore} - ${computerScore}`);
			break;
		}

		let round = prompt("Pick Rock, Paper, or Scissors:").toLowerCase();
		let playerSelection = round;
		playRound(playerSelection, computerSelection);
	}
}
game();
