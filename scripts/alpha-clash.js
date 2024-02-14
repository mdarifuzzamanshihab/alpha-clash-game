// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  // step-1 = generate a random alphabet
  const alphabet = randomAlphabet();
  //set alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  //set background color
  setHighlightColorById(alphabet);
}




//key event

function keypress(event) {
  const playerPressed = event.key;
  console.log('playerpress', playerPressed)
  //start the game with enter button
  if (playerPressed === 'Enter') {
    play()
  }
  //stop  game if player press escape
  if (playerPressed === 'Escape') {
    gameOver()
  }
  //expected key
  const currentAlphabetElement = document.getElementById('current-alphabet')
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  if (playerPressed === expectedAlphabet) {
    console.log('you win');
    //score update
    const currentScoreElement = document.getElementById('current-score')
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    //continue game
    removeHighlightColorById(expectedAlphabet);
    continueGame()
  }
  else {
    console.log('you lose');
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLifeScore = parseInt(currentLifeText);
    const newLife = currentLifeScore - 1;
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
      gameOver()
    }
  }
}
//new function

function setTextValueById(elementId, value) {
  const elementNew = document.getElementById(elementId)
  elementNew.innerText = value
}




//function
document.addEventListener('keyup', keypress);

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}

function gameOver() {
  hideElementById('play-ground')
  showElementById('final-score')
  //get last score
  const finalScore = document.getElementById('current-score')
  const finalScoreInner = finalScore.innerText
  setTextValueById('game-score', finalScoreInner)
}

function playAgain() {
  //hide everything show playground
  hideElementById("home-screen");
  hideElementById('final-score')
  showElementById("play-ground");

  //resets score and life
  setTextValueById('current-life', 5)
  setTextValueById('current-score', 0)
}