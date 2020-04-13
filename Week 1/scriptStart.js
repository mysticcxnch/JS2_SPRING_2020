

// declare a value for the humanScore variable to be the number 0
let humanScore = 0;

// declare a variable named 'computer score' using camelCase 
let computerScore = 0;
let currentRoundNumber = 1;


// declare a variable that cannot be change (it's constant) that is named generateTarget
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
