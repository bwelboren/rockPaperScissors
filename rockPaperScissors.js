const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case "rock":
    case "scissors":
    case "paper":
    case "bomb":
      return userInput;
    default:
      return "err";
  }
};

const getComputerChoice = () => {
  const randomNr = Math.floor(Math.random() * 3);
  switch (randomNr) {
    case 0:
      return "rock";
    case 1: 
      return "paper";
    case 2:
      return "scissors";
    default:
      return "unknown";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie.";
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer won.";
    } else {
      return "User won.";
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer won.";
    } else if (computerChoice === 'rock') {
      return "User won.";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer won.";
    } else if (computerChoice === 'paper') {
      return "User won.";
    }
  }
  // cheatcode
  if (userChoice === 'bomb') {
    return "User won.";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

playGame();

