<<<<<<< HEAD
const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;

img.onload = function () {
  ctx.drawImage(img, 0, 0, 150 * imgScale, 150);
};

img.src = "/Images/garden-background-vector-4.jpeg";
=======

    const canvas = document.getElementById('garden-game');
    const ctx = canvas.getContext('2d');


// Butoons

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "EASY";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "MEDIUM";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "HARD";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// End of Buttons

const img = new Image();
img.src = "/Images/frame-pic.jpeg"

>>>>>>> 7e9a232f0b4a7a254d54c39ae39b9343d1b46bda
