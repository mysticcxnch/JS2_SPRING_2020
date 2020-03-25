

// declare a value for the humanScore variable to be the number 0
let humanScore = ___;

// declare a variable named 'computer score' using camelCase 
let _______________ = 0;
let currentRoundNumber = 1;


// declare a variable that cannot be change (it's constant) that is named generateTarget
_______  ____________________ = () => {
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
