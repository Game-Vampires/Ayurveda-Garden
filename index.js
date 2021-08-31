const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;
const boyImage = new Image();
const boy = {
  x: 0,
  y: 0,
  height: 150 * imgScale,
  width: 150,
};
boyImage.onload = function () {
  ctx.drawImage(boyImage, boy.x, boy.y, boy.height, boy.width);
};

boyImage.src = "/Images/boy_walking.gif";

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

function animate() {
  console.log("animate");
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //flip page redraw everything below
  ctx.drawImage(boyImage, boy.x, boy.y, boy.width, boy.height);
}
animate();

window.onkeydown = function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") {
    boy.x -= 10;
  }
  if (e.key === "ArrowRight") {
    boy.x += 10;
  }
  if (e.key === "ArrowUp") {
    boy.y -= 10;
  }
  if (e.key === "ArrowDown") {
    boy.y += 10;
  }
};
