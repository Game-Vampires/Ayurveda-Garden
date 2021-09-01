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

    if (boyWalkFrame > 10)
        boyWalkFrame = 1;

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


    x: 550,
        y: 150,
            height: 50 * imgScale,
                width: 50,
};

boyImage.onload = function () {
    ctx.drawImage(boyImage, boy.x, boy.y, boy.height, boy.width);
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

    let x = plant.x + (plant.x * (4 / 100));
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
    x = plant.x + (plant.x * (4 / 100));
    y = plant.y - 25;
    //console.log(timerLimit);
    //loop to fill battery progress based on the remaining timer
    for (let i = 0; i < ((8 * timerLimit) / 60); i++) {
        ctx.rect(x, y, 7, 20);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x, y, 7, 20);

        x += 7;
    }



    ctx.stroke();


}

function animate() {
    console.log("Boy.y " + boy.y);
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); //flip page redraw everything below
    ctx.drawImage(boyImage, boy.x, boy.y, boy.width, boy.height);
    ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width);
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
        boy.x -= 3;
        boyImage.src = left;
    }
    if (e.key === "ArrowRight") {
        boy.x += 3;
        boyImage.src = right;
    }
    if (e.key === "ArrowUp") {
        boy.y -= 3;
        boyImage.src = up;
    }
    if (e.key === "ArrowDown") {
        boy.y += 3;
        boyImage.src = down;

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
        console.log("collision");
        // we want to increase the health bar for every 3 seconds you are colliding
        //setInterval(function(){ health += 5; }, 3000);
    }
}
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
        boy.x -= 10;
        boy.y -= 10;
        //
        console.log("colision");
        // we want to increase the health bar for every 3 seconds you are colliding
        //setInterval(function(){ health += 5; }, 3000);
    }
}
