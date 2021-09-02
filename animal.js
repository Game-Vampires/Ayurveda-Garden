function drawAnimal() {
  let enemyGroundLine = boy.y;
  ctx.drawImage(enemyFace, enemyXLocation, enemyGroundLine + 40, 50, 50);
  //console.log(enemyXLocation);
}

function moveAnimal() {
  enemyXLocation = enemyXLocation - 1.2;
}
