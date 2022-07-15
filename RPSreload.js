const computerChoiceDisplay = document.getElementById(`computer-choice`)
const userChoiceDisplay = document.getElementById(`user-choice`)
const possibleChoices = document.querySelectorAll(`button`)
const playerScoreDisplay = document.getElementById('Player-Score')
const computerScoreDisplay = document.getElementById('Computer-Score')
const displayResult = document.getElementById('Result')

let PlayerChoice
let computerChoice

let ComputerScore = 0;
let PlayerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(`click`, (e) => {
  PlayerChoice = e.target.id
  userChoiceDisplay.innerHTML = PlayerChoice
  computerPlay()
  getResult();
}));

function computerPlay() {

  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};


function getResult() {


  let result = ""

  if ((PlayerChoice === 'rock' && computerChoice === 'scissors') ||
    (PlayerChoice === 'scissors' && computerChoice === 'paper') ||
    (PlayerChoice === 'paper' && computerChoice === 'rock')) {

    PlayerScore += 1
    result = 'You win!'
  };
  if (PlayerScore == 5) {
    result = 'You won the game!';
    disableButtons()
  } 

  if ((computerChoice === 'rock' && PlayerChoice === 'scissors') ||
  (computerChoice === 'scissors' && PlayerChoice === 'paper') ||
  (computerChoice === 'paper' && PlayerChoice === 'rock')) {

  ComputerScore += 1
  result = 'You lose!'
};

  if (ComputerScore == 5) {
    result = 'The computer has won!'
    disableButtons();
  }
  if (computerChoice == PlayerChoice){
    result =`It is a draw!`
  };
  if(ComputerScore == 5 && PlayerScore == 5){
    result ='The game is neither won by the compter or you, everyone wins!'
  };

  displayResult.innerHTML = result;
  computerScoreDisplay.innerHTML = ComputerScore;
  playerScoreDisplay.innerHTML = PlayerScore;
};

function disableButtons() {
  possibleChoices.forEach(elem => {
    elem.disabled = true
  })
}

