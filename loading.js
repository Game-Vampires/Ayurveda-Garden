const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;
const boyImage = new Image();
const plantImage = new Image();
const lifeBarImage = new Image();
let score = 10000;
const enemyFace = new Image();
const left = new Image();
const canvasElement = document.getElementById("garden-game");
let enemyXLocation = canvas.width;
let boywalk = "/Images/boywalk/right/";

left.src = "/Images/walking-left.gif";
var timerLimit = 60; // change game timer here

enemyFace.src = "/Images/pngwing.png";

const plant = {
  x: 700,
  y: 200,
  height: 100,
  width: 100,
  health: 50,
  //setInterval(function(){ health -= 2; }, 5000);
};

const boy = {
  x: 10,
  y: 225,
  height: 100,
  width: 150,
};

let enemyYLocation = boy.y;
// below variables are for PlayerJump code logic
var positionX = boy.x;
var positionY = boy.y;
var velocityX = 4.0;
var velocityY = 0.0;
var gravity = 0.5;
var onGround = false;

const lifeBar = {
  x: 550,
  y: 150,
  height: 50 * imgScale,
  width: 50,
};

//animates the boy walking
function animateBoyWalk() {
  if (boyWalkFrame > 10) boyWalkFrame = 1;

  let fileName = boywalk + "frame" + boyWalkFrame + ".gif";
  boyImage.src = fileName;
  ctx.drawImage(boyImage, boy.x, boy.y, boy.height, boy.width);

  //console.log(fileName);
  boyWalkFrame++;

  //requestAnimationFrame(animateBoyWalk, 100);
}

function animateBackground() {}

let boyWalkFrame = 1;

window.onload = function () {
  //animateBoyWalk();
  setInterval(animateBoyWalk, 100);
};

let ninja = {
  img: left,
};

plantImage.onload = function () {
  ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
};
plantImage.src = "/Images/PlantCroppedv1.png";

lifeBarImage.onload = function () {
  ctx.drawImage(
    lifeBarImage,
    lifeBar.x,
    lifeBar.y,
    lifeBar.height,
    lifeBar.width
  );
};

lifeBarImage.src = "/Images/pngfind.com-health-bar-png-769850.png";

//draw battery above plant
function drawPlantBattery() {
  //console.log("Inside Draw battery");

  let x = plant.x + plant.x * (4 / 100);
  let y = plant.y - 25;
  //console.log(y);

  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  //console.log((8 * timerLimit) / 60);
  //loop to draw the battery
  for (let i = 1; i <= 8; i++) {
    ctx.rect(x, y, 7, 20);
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 7, 20);
    x += 7;
  }

  //reset battery x,y coordinates
  x = plant.x + plant.x * (4 / 100);
  y = plant.y - 25;
  //console.log(timerLimit);
  //loop to fill battery progress based on the remaining timer
  for (let i = 0; i < (8 * timerLimit) / 60; i++) {
    ctx.rect(x, y, 7, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 7, 20);

    x += 7;
  }

  ctx.stroke();
}

function animate() {
  console.log("Boy.y " + boy.x);

  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //flip page redraw everything below
  updateCanvas();
  ctx.drawImage(boyImage, boy.x, boy.y, boy.width, boy.height);

  ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
  moveAnimal();
  drawAnimal();
  detectCol(boy, plant);
  drawPlantBattery();

  /*ctx.drawImage(
    lifeBarImage,
        lifeBar.x,
        lifeBar.y,
        lifeBar.height,
        lifeBar.width
    );*/
}
animate();

// Keys

window.onkeydown = function (e) {
  if (e.key === "ArrowLeft") {
    boywalk = "/Images/boywalk/left/";
    console.log(canvasElement.x);

    if (boy.x == 1) boy.x = boy.x;
    // detected boy met left margin .. set the X value to previous X and make it look like not moving backward
    else boy.x -= 3; //else move back by 3 pixels

    // ninja.img = left
  }

  if (e.key === "ArrowRight") {
    boywalk = "/Images/boywalk/right/";
    if (boy.x + boy.width == canvasElement.width - 1) boy.x = boy.x;
    // detected boy met right margin .. set the X value to previous X and make it look like not moving forward
    else boy.x += 6; //else move  by 3 pixels
  }

  if (e.key === "ArrowUp") {
    boy.y -= 3;
  }
  /*if (e.key === "ArrowDown") {
        boy.y += 3;

    }*/
};

function plantImages() {
  return plants();
}

function detectCol(rect1, rect2) {
  //var rect2 = {x: 20, y: 10, width: 10, height: 10}

  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    // collision detected!
    //increase health
    //stop
    collectCoins();
    rect2.health++;
    console.log("collision");
    // we want to increase the health bar for every 3 seconds you are colliding
    //setInterval(function(){ health += 5; }, 3000);
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function collectCoins() {
  document.getElementById("coins").innerText =
    "Coins Collected =" + collectCoin;
  collectCoin += 1;
  //when plant health increases collect coins. if plant health = 100 collectCoins()
}
let collectCoin = 0;

setTimeout(function () {
  window.location.href = "index.html";
}, 11000);
