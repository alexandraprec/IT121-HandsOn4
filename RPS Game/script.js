// Array of choices
const choices = ["Rock", "Paper", "Scissors"];

// Function to get computer's choice
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine winner for a single round
function playRound(playerSelection, computerSelection) {
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

    if (playerIndex === computerIndex) {
        return "It's a tie! Both chose " + playerSelection + ".";
    } else if (playerIndex === (computerIndex + 1) % 3) {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

// Function to update result and choices in HTML
function updateResult(playerSelection, computerSelection, resultText) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>You chose: ${playerSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>${resultText}</p>
    `;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", function() {
    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
});

document.getElementById("paper").addEventListener("click", function() {
    const playerSelection = "Paper";
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
});

document.getElementById("scissors").addEventListener("click", function() {
    const playerSelection = "Scissors";
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateResult(playerSelection, computerSelection, result);
});
