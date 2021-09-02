function StartJump() {
  if (onGround) {
    velocityY = -12.0;
    onGround = false;
  }
}

function EndJump() {
  if (velocityY < -6.0) velocityY = -6.0;
}

function Loop() {
  Update();
  Render();
  window.setTimeout(Loop, 33);
}

function Update() {
  velocityY += gravity;
  positionY += velocityY;
  positionX += velocityX;

  if (positionY > 90) {
    positionY = 175.0;
    velocityY = 0.0;
    onGround = true;
    console.log("inside > 175 logic");
  }

  if (positionX < 10 || positionX > 190) velocityX *= -1;
}

window.addEventListener("mousedown", StartJump, false);
window.addEventListener("mouseup", EndJump, false);

Loop();

function Render() {
  console.log("X = " + positionX - 10);
  console.log("Y = " + positionY - 20);
  ctx.drawImage(
    boyImage,
    positionX - 10,
    positionY - 20,
    boy.height,
    boy.width
  );
  //ctx.moveTo(positionX - 10, positionY - 20);
}
