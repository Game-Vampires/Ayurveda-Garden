const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;
const boyImage = new Image();
var timerLimit = 120; // change game timer here
let score = 1000;
const plantImage = new Image();
const lifeBarImage = new Image();
const rockImage = new Image();
//---------------------------------------------------------------------------------------------------------------
const pickAxeImage = new Image();
//----------------------------------------------------------------------------------------------------------------
let boywalk = "./Images/boywalk/right/";
rockImage.src = `./Images/pngegg.png`;
let playerCanMove = true;
// const plant = {
//   x: 500,
//   y: 200,
//   height: 50,
//   width: 50,
//   health: 100,
//   //setInterval(function(){ health -= 2; }, 5000);
// };
//--------------------------------------------------------------------------------------------
const pickaxe = {
  height: 50,
  width: 50,
};
// we need to create a function that animates the pick axe over the rock upon collision with
//the boy. the variable involved are the rock, boy, and pick axe. if rock and boy
//collide === true, animate pick axe at stone location.

//-----------------------------------------------------------------------------------------------
const plants = []; //This holds all of our plants
const rocks = [];
//Math.min(100, Math.max(50, 9))

setInterval(() => {
  plants.push({
    x: Math.min(
      Math.max(Math.random() * canvas.width, 125),
      canvas.width - 125
    ),
    y: Math.min(
      Math.max(Math.random() * canvas.height, 125),
      canvas.height - 125
    ),
    height: 100,
    width: 100,
    health: 100,
  });
}, 3000);

setInterval(() => {
  rocks.push({
    x: Math.min(
      Math.max(Math.random() * canvas.width, 125),
      canvas.width - 125
    ),
    y: Math.min(
      Math.max(Math.random() * canvas.height, 125),
      canvas.height - 125
    ),
    height: 150,
    width: 150,
    health: 100,
  });
}, 3000);

const boy = {
  x: 150,
  y: 50,
  height: 100,
  width: 150,
};

const lifeBar = {
  x: 550,
  y: 150,
  height: 50 * imgScale,
  width: 50,
};

//animates the boy walking
function animateBoyWalk() {
  if (boyWalkFrame > 10) boyWalkFrame = 1;

  var fileName = boywalk + "frame" + boyWalkFrame + ".gif";

  boyImage.src = fileName;
  ctx.drawImage(boyImage, boy.x, boy.y, boy.height, boy.width);

  //console.log(fileName);
  boyWalkFrame++;

  //requestAnimationFrame(animateBoyWalk, 100);
}

let boyWalkFrame = 1;

window.onload = function () {
  //animateBoyWalk();
  setInterval(animateBoyWalk, 100);
};

plantImage.src = "/Images/PlantCroppedv1.png";
// ---------------------------------------------------------------------------------------------------------
pickAxeImage.onload = function () {
  ctx.drawImage(
    pickAxeImage,
    pickaxe.x,
    pickaxe.y,
    pickaxe.height,
    pickaxe.width
  );
};
pickAxeImage.src = "/Images/pickaxe.gif";
// pick Axe -------------------------------------------------------------------------------------------------
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

  //PUT ALL BELOW IN A FOR LOOP  plants.forEach(plant => {  .... everything insidfe this})

  plants.forEach((plant) => {
    plant.health = Math.max(Math.min((plant.health -= 0.11), 100), 0);
    plant.height = plant.health;
    plant.width = plant.health;

    if (plant.health > 0) {
      ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);

      ctx.fillStyle = "white";
      ctx.fillRect(plant.x, plant.y, 100, 5);

      ctx.fillStyle = "red";
      //Swithc plants health

      ctx.fillRect(plant.x, plant.y, plant.health, 5);

      detectCol(boy, plant);
    } else {
      //splice from array
    }
  });

  rocks.forEach((rock, i) => {
    ctx.drawImage(rockImage, rock.x, rock.y, rock.height, rock.width);
    detectColWithRock(boy, rock, i);
  });

  if (mineRock) {
    if (boyWalkFrame % 2 == 0) {
      console.log("minerock, minerock", mineRock, axe, boy.x, boy.y);
      ctx.drawImage(axe, boy.x + axeSpace, boy.y, 100, 100);
    } else {
      ctx.drawImage(axe2, boy.x + axeSpace, boy.y, 100, 100);
    }
  }
  // if (waterPlant) {
  //   if (boyWalkFrame % 2 == 0) {
  //     console.log(
  //       "waterplant, waterplant",
  //       waterPlant,
  //       wateringCan,
  //       boy.x,
  //       boy.y
  //     );
  //     ctx.drawImage(wateringCan, boy.x + wcspace, boy.y, 100, 100);
  //   } else {
  //     ctx.drawImage(wateringCan2, boy.x + wcspace, boy.y, 100, 100);
  //   }
  // }

  /////this spot
  //END LOOP

  //drawPlantBattery();

  /*ctx.drawImage(
    lifeBarImage,
        lifeBar.x,
        lifeBar.y,
        lifeBar.height,
        lifeBar.width
    );*/
  ctx.drawImage(
    pickAxeImage,
    pickaxe.x,
    pickaxe.y,
    pickaxe.height,
    pickaxe.width
  );
}

let axe = new Image();
axe.src = "Images/pickaxee/1.gif";

let axe2 = new Image();
axe2.src = "Images/pickaxee/2.gif";

// Keys
let axeSpace = boy.width / 2;
let wcspace = boy.width / 2;

window.onkeydown = function (e) {
  console.log("playerCanMove", playerCanMove);
  if (playerCanMove) {
    if (e.key === "ArrowLeft") {
      boy.x -= 30;
      boywalk = "/Images/boywalk/left/";
      axeSpace = 0;
      wcspace = 0;
      wateringCan.src = "./Images/watering-can/1.gif";

      wateringCan2.src = "./Images/watering-can/2.gif";
    }
    if (e.key === "ArrowRight") {
      boy.x += 30;
      boywalk = "/Images/boywalk/right/";
      axeSpace = boy.width / 2;
      wcspace = boy.width / 2;

      wateringCan.src = "./Images/wateringLeft/1L.gif";

      wateringCan2.src = "./Images/wateringLeft/2L.gif";
    }
    if (e.key === "ArrowUp") {
      boy.y -= 30;
    }
    if (e.key === "ArrowDown") {
      boy.y += 30;
    }
  }
};

function plantImages() {
  return plants();
}

let space = 0;

let wateringCan = new Image();
wateringCan.src = "./Images/wateringLeft/1L.gif";

let wateringCan2 = new Image();
wateringCan2.src = "./Images/wateringLeft/2L.gif";
let waterPlant = false;
function detectCol(rect1, rect2) {
  //var rect2 = {x: 20, y: 10, width: 10, height: 10}
  // define image stop. define values that make image
  //stop.

  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    waterplant = true;
    collectCoins();
    rect2.health++;
    if (boyWalkFrame % 2 == 0) {
      ctx.drawImage(wateringCan2, boy.x + wcspace, boy.y, 80, 80);
    } else {
      ctx.drawImage(wateringCan, boy.x + wcspace, boy.y, 80, 80);
    }
    //boywalk = "/Images/boywalk/water/";
    //stop
    // if right/left side of rectangle is collided with.
    //stop x:speed. if bottom and top is
    console.log("collision");
    // we want to increase the health bar for every 3 seconds you are colliding
    //setInterval(function(){ health += 5; }, 3000);
  }
}

let mineRock = false;

function detectColWithRock(rect1, rect2, i) {
  //var rect2 = {x: 20, y: 10, width: 10, height: 10}
  // define image stop. define values that make image
  //stop.
  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  ) {
    // collision detected!
    //increase health
    //rect2.health++;
    //stop

    // if right/left side of rectangle is collided with.
    //stop x:speed. if bottom and top is
    console.log("collision with rock");

    rocks[i].width -= 0.3;
    rocks[i].height -= 0.3;
    if (!mineRock) {
      playerCanMove = false;
      mineRock = true;

      console.log(rocks[i]);
      //boywalk = "/Images/boywalk/mine/";
      setTimeout(() => {
        playerCanMove = true;
        mineRock = false;
        rocks.splice(i, 1);
        //boywalk = "/Images/boywalk/right/";
      }, 3000);
    }
  }
}
// boy.x = 0;
// boy.y = 0;
// we want to increase the health bar for every 3 seconds you are colliding
//setInterval(function(){ health += 5; }, 3000);
//   } else {
//     //playerCanMove = true;
//   }
// }

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

document.querySelector("#play").onclick = function () {
  console.log("?");
  var gamemusic = new Audio(`sounds/bggamesound.mp3`);

  gamemusic.play();

  animate();
  document.querySelector("#play").remove();
};
// Music for the game
