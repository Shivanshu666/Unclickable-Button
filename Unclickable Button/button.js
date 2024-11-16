let container = document.querySelector(".container");
let question = document.querySelector(".question");
let yesBtn = document.querySelector(".yes-btn");
let noBtn = document.querySelector(".no-btn");
let image = document.querySelector("#image");

// Get the container's bounding rect
const containerRect = container.getBoundingClientRect();

// When the "Yes" button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Me Too :) ";
  image.src = "giphy.gif";
  noBtn.remove();
  yesBtn.remove();
});

// When mouse is over the "No" button, move it randomly within the container
noBtn.addEventListener("mouseover", () => {
  // Get the current position of the "No" button
  const noBtnRect = noBtn.getBoundingClientRect();

  // Generate random positions inside the container
  let i =
    Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
  let j =
    Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

  // Apply the new random position to the "No" button
  noBtn.style.position = "absolute"; // Make sure "No" button can move freely
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
