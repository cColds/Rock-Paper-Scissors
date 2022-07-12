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

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => playRound(rock, computerPlay()));

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => playRound(paper, computerPlay()));

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () =>
	playRound(scissors, computerPlay())
);

const outcome = document.querySelector(".info");
const para = document.querySelector(".handwin");
const playerScoreCount = document.querySelector(".playerScores");
const computerScoreCount = document.querySelector(".computerScores");

let currentPlayerScore = 0;
let currentComputerScore = 0;

const playerEmoji = document.querySelector(".player");
const computerEmoji = document.querySelector(".computer");
const playAgain = document.querySelector(".restart");
playAgain.addEventListener("click", restart);
const restartDiv = document.querySelector(".restart-container");
function checkWinner() {
	if (currentComputerScore >= 5 || currentPlayerScore >= 5) {
		const wonOrLost = currentComputerScore >= 5 ? "lost" : "win";
		outcome.textContent = `Game over! You ${wonOrLost}!`;
		return true;
	}
}

function restart() {
	console.log("aple");
	outcome.textContent = "Pick your hand";
	para.textContent = "First to score 5 points wins the game";
	playerEmoji.textContent = "❔";
	computerEmoji.textContent = "❔";
	currentPlayerScore = 0;
	currentComputerScore = 0;
	playerScoreCount.textContent = `Player: 0`;
	computerScoreCount.textContent = `Computer: 0`;
	restartDiv.classList.toggle("active");
}

function playRound(playerSelection, computerSelection) {
	if (checkWinner()) return;
	switch (playerSelection) {
		case "rock":
			if (computerSelection == scissors) {
				currentPlayerScore++;
				outcome.textContent = "You win!";
				para.textContent = "Rock beats scissors";
				playerScoreCount.textContent = `Player: ${currentPlayerScore}`;
				playerEmoji.textContent = "✊";
				computerEmoji.textContent = "✌";
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection} \n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			} else if (computerSelection == paper) {
				currentComputerScore++;
				outcome.textContent = "You lose!";
				para.textContent = "Rock loses to paper";
				computerScoreCount.textContent = `Computer: ${currentComputerScore}`;
				playerEmoji.textContent = "✊";
				computerEmoji.textContent = "✋";
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);

				console.log(playerScore);
			} else {
				outcome.textContent = "It's a tie!";
				para.textContent = "Rock ties with rock";
				playerEmoji.textContent = "✊";
				computerEmoji.textContent = "✊";
				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			}
			break;
		case "paper":
			if (computerSelection == paper) {
				outcome.textContent = "It's a tie!";
				para.textContent = "Paper ties with paper";
				playerEmoji.textContent = "✋";
				computerEmoji.textContent = "✋";
				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			} else if (computerSelection == scissors) {
				currentComputerScore++;
				outcome.textContent = "You lose!";
				para.textContent = "Paper loses to scissors";
				playerEmoji.textContent = "✋";
				computerEmoji.textContent = "✌";
				computerScoreCount.textContent = `Computer: ${currentComputerScore}`;
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection} \n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);

				console.log(computerScore);
			} else {
				currentPlayerScore++;
				outcome.textContent = "You win!";
				para.textContent = "Paper beats rock";
				playerEmoji.textContent = "✋";
				computerEmoji.textContent = "✊";
				playerScoreCount.textContent = `Player: ${currentPlayerScore}`;
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection} \n
					Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			}
			break;
		case "scissors":
			if (computerSelection == paper) {
				currentPlayerScore++;
				outcome.textContent = "You win!";
				para.textContent = "Scissors beats paper";
				playerScoreCount.textContent = `Player: ${currentPlayerScore}`;
				playerEmoji.textContent = "✌";
				computerEmoji.textContent = "✋";
				console.log(
					`You win! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					 Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			} else if (computerSelection == rock) {
				currentComputerScore++;
				outcome.textContent = "You lose!";
				para.textContent = "Scissors loses to rock";
				playerEmoji.textContent = "✌";
				computerEmoji.textContent = "✊";
				computerScoreCount.textContent = `Computer: ${currentComputerScore}`;
				console.log(
					`You lose! You picked ${playerSelection}, and the computer picked ${computerSelection}\n
					 Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			} else {
				outcome.textContent = "It's a tie!";
				para.textContent = "Scissors ties with scissors";
				playerEmoji.textContent = "✌";
				computerEmoji.textContent = "✌";
				console.log(
					`It's a tie! You picked ${playerSelection}, and the computer picked ${computerSelection}
					 Score: ${currentPlayerScore} - ${currentComputerScore}`
				);
			}
			break;

		default:
			console.log("error");
	}
	if (checkWinner()) {
		restartDiv.classList.toggle("active");
		return;
	}
}
