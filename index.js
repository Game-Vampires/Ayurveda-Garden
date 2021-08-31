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
  health: 100,
  //setInterval(function(){ health -= 2; }, 5000);
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
  ctx.drawImage(
    lifeBarImage,
    lifeBar.x,
    lifeBar.y,
    lifeBar.height,
    lifeBar.width
  );
};
lifeBarImage.src = "/Images/pngfind.com-health-bar-png-769850.png";

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //flip page redraw everything below
  ctx.drawImage(boyImage, boy.x, boy.y, boy.width, boy.height);
  ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
  detectCol(boy, plant);
  ctx.drawImage(
    lifeBarImage,
    lifeBar.x,
    lifeBar.y,
    lifeBar.height,
    lifeBar.width
  );
}
animate();

// Keys

window.onkeydown = function (e) {
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
    console.log("colision");
    // we want to increase the health bar for every 3 seconds you are colliding
    //setInterval(function(){ health += 5; }, 3000);
  }
}
