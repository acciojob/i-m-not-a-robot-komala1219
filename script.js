//your JS code here. If required.

 


const images = Array.from(document.querySelectorAll("img"));
// const resetButton = document.getElementById("reset");
// const verifyButton = document.getElementById("verify");
const messagePara = document.getElementById("para");
const heading = document.getElementById("h");




// Get a reference to the images container
const imagesContainer = document.querySelector(".images");

// Create a new image element and set its attributes
const newImage = document.createElement("img");
newImage.classList.add("tile", "img6");

// Randomly select an image from the existing array
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

// Set the new image's source to the randomly selected image's source
newImage.src = randomImage.src;

// Add the new image to the container and the array
imagesContainer.appendChild(newImage);
images.push(newImage);




// Get a reference to the reset button and verify button
const resetButton = document.querySelector("#reset");
const verifyButton = document.querySelector("#verify");

// Get a reference to the message paragraph
const message = document.querySelector("#para");

// Initialize variables to keep track of clicked tiles
let firstClickedTile = null;
let secondClickedTile = null;

// Add event listeners to each image
images.forEach(image => {
image.addEventListener("click", event => {
// If both tiles have been clicked, return early
if (firstClickedTile !== null && secondClickedTile !== null) {
return;
}

 
// Get a reference to the clicked tile
const clickedTile = event.target;

// If the clicked tile is already selected, return early
if (clickedTile.classList.contains("selected")) {
  return;
}

// If no tiles have been clicked yet, set this tile as the first clicked tile
if (firstClickedTile === null) {
  firstClickedTile = clickedTile;
  firstClickedTile.classList.add("selected");
  
  // Show the reset button
  resetButton.style.display = "inline-block";
} 
// If one tile has been clicked, set this tile as the second clicked tile
else {
  secondClickedTile = clickedTile;
  secondClickedTile.classList.add("selected");
  
  // Show the verify button
  verifyButton.style.display = "inline-block";
}
});
});

// Add event listener to reset button
resetButton.addEventListener("click", () => {
// Clear clicked tiles and remove selected class from all tiles
firstClickedTile = null;
secondClickedTile = null;
images.forEach(image => image.classList.remove("selected"));

// Hide the reset button and verify button
resetButton.style.display = "none";
verifyButton.style.display = "none";

// Clear the message
message.textContent = "";
});

// Add event listener to verify button
verifyButton.addEventListener("click", () => {
// If both tiles are identical, show success message
if (firstClickedTile.src === secondClickedTile.src) {
message.textContent = "You are a human. Congratulations!";
}
// If tiles are not identical, show error message
else {
message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
}

// Remove selected class from all tiles
images.forEach(image => image.classList.remove("selected"));

// Hide the reset button and verify button
resetButton.style.display = "none";
verifyButton.style.display = "none";

// Clear clicked tiles
firstClickedTile = null;
secondClickedTile = null;
});
