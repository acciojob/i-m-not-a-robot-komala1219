//your JS code here. If required.

// Select all the required DOM elements
const images = document.querySelectorAll(".tile");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");
const h3 = document.getElementById("h");

let firstSelectedTile = null;
let secondSelectedTile = null;
let isVerified = false;

// Shuffle the array of images and render them on the DOM
const shuffledImages = shuffleArray([...images]);
shuffledImages.forEach((image, index) => {
  image.classList.add(`img${index + 1}`);
});

// Add click event listener to each image
images.forEach((image) => {
  image.addEventListener("click", handleClick);
});

// Add click event listener to reset button
resetBtn.addEventListener("click", handleReset);

// Add click event listener to verify button
verifyBtn.addEventListener("click", handleVerify);

// Shuffle the array of images
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Handle the click event on an image tile
function handleClick() {
  if (isVerified) return; // do nothing if already verified
  if (!firstSelectedTile) {
    firstSelectedTile = this;
    firstSelectedTile.classList.add("selected");
    resetBtn.style.display = "block";
    return;
  }
  if (firstSelectedTile === this) return; // do nothing if same tile clicked twice
  secondSelectedTile = this;
  secondSelectedTile.classList.add("selected");
  verifyBtn.style.display = "block";
}

// Handle the click event on the reset button
function handleReset() {
  firstSelectedTile.classList.remove("selected");
  secondSelectedTile.classList.remove("selected");
  firstSelectedTile = null;
  secondSelectedTile = null;
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  para.style.display = "none";
}

// Handle the click event on the verify button
function handleVerify() {
  if (!firstSelectedTile || !secondSelectedTile) return; // do nothing if less than 2 tiles selected
  if (firstSelectedTile.classList[1] === secondSelectedTile.classList[1]) {
    para.innerHTML = "You are a human. Congratulations!";
  } else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  para.style.display = "block";
  verifyBtn.style.display = "none";
  isVerified = true;
}

