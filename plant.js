function plants() {

  const lifeBarImage = new Image();
  const plantImage = new Image();

  plantImage.src = "/Imags/PlantCropped.png";
  lifeBarImage.src = "/Images/pngfind.com-health-bar-png-769850.png";


  const plant = {
    x: 100,
    y: 200,
    height: 400,
    width: 10,
  };

  const lifeBar = {
    x: 200,
    y: 200,
    height: 10 * imgScale,
    width: 50,
  };


  /* plantImage.onload = function () {
     console.log("Plant image loaded");
     ctx.drawImage(plantImage, plant.x, plant.y, plant.height, plant.width)
 
   };
   */

  lifeBarImage.onload = function () {
    ctx.drawImage(lifeBarImage, lifeBar.x, lifeBar.y, lifeBar.height, lifeBar.width);

  };




}
