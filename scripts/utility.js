function hideElementById(elementhide) {
  const hideEle = document.getElementById(elementhide);
  hideEle.classList.add("hidden");
}

function showElementById(elementshow) {
  const showEle = document.getElementById(elementshow);
  showEle.classList.remove("hidden");
}

function setHighlightColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeHighlightColorById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}

function randomAlphabet() {
  //get a alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}
