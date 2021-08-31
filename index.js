const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;
const boyImage = new Image();
const plantImage = new Image();
const lifeBarImage = new Image();


const plant = {
  x: 500,
  y: 200,
  height: 100 * imgScale,
  width: 100,
};
const boy = {
  x: 150,
  y: 50,
  height: 150 * imgScale,
  width: 150,
};
const lifeBar = {
    x: 550,
    y: 150,
    height: 50 * imgScale,
    width: 50,
  };

  
boyImage.onload = function () {
  ctx.drawImage(boyImage, boy.x, boy.y, boy.height, boy.width);
};
boyImage.src = "/Images/boy_walking.gif";

plantImage.onload = function () {
  ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
};
plantImage.src = "/Images/the plant.jpg";

lifeBarImage.onload = function () {
    ctx.drawImage(lifeBarImage, lifeBar.x, lifeBar.y, lifeBar.height, lifeBar.width);
};
lifeBarImage.src = "/Images/pngfind.com-health-bar-png-769850.png";



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
  ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
  ctx.drawImage(lifeBarImage, lifeBar.x, lifeBar.y, lifeBar.height, lifeBar.width);
}
animate();

// Keys

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

function plantImages(){
    return plants();
}