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

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
