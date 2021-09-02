const canvas = document.getElementById("garden-game");
const ctx = canvas.getContext("2d");

imgScale = 700 / 400;
const boyImage = new Image();
const plantImage = new Image();
const lifeBarImage = new Image();
const rockImage = new Image();
rockImage.src = `./Images/50-504004_download-rocks-png-images-background-cartoon-rock-no.png`;
var timerLimit = 60; // change game timer here
let playerCanMove = true;
const plant = {
  x: 500,
  y: 200,
  height: 50,
  width: 50,
  health: 100,
  //setInterval(function(){ health -= 2; }, 5000);
};

const plants = [plant]; //This holds all of our plants
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
    height: 50,
    width: 50,
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
    height: 30,
    width: 30,
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

  var fileName = "/Images/boywalk_frames/frame" + boyWalkFrame + ".gif";
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

function animate() {
  console.log("Boy.y " + boy.y);
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //flip page redraw everything below
  ctx.drawImage(boyImage, boy.x, boy.y, boy.width, boy.height);

  //PUT ALL BELOW IN A FOR LOOP  plants.forEach(plant => {  .... everything insidfe this})

  plants.forEach((plant) => {
    plant.health = Math.max(Math.min((plant.health -= 0.11), 100), 0);

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

  //END LOOP

  //drawPlantBattery();

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
  console.log("playerCanMove", playerCanMove);
  if (playerCanMove) {
    if (e.key === "ArrowLeft") {
      boy.x -= 30;
    }
    if (e.key === "ArrowRight") {
      boy.x += 30;
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
    // collision detected!
    //increase health
    rect2.health++;
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
    if (!mineRock) {
      playerCanMove = false;
      mineRock = true;
      setTimeout(() => {
        playerCanMove = true;
        mineRock = false;
        rocks.splice(i, 1);
      }, 3000);
    }
    // boy.x = 0;
    // boy.y = 0;
    // we want to increase the health bar for every 3 seconds you are colliding
    //setInterval(function(){ health += 5; }, 3000);
  } else {
    //playerCanMove = true;
  }
}
