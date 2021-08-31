const lifeBarImage = new Image();
const plantImage = new Image();
const plant = {
  x: 500,
  y: 200,
  height: 100 * imgScale,
  width: 100,
};
const lifeBar = {
  x: plant.x,
  y: plant.y,
  height: 10 * imgScale,
  width: 50,
};
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
