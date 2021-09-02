const img = new Image();
img.src = "/Images/backgroundnew.jpg";

const backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function () {
    this.x += this.speed;
    this.x %= canvas.width;
    //console.log(this.x);
  },

  draw: function () {
    ctx.drawImage(this.img, this.x, 0);
    ctx.drawImage(this.img, this.x + canvas.width, 0);
    //console.log(this.x + canvas.width);
    ctx.font = "20px Arial";
    //ctx.fillText(`${(this.x + canvas.width)},0`, this.x, 100);
    //ctx.fillText(`x(column)=${(this.x)},y=0`, (this.x + canvas.width - 200), 100);
    //ctx.fillText(`x(column)=${(this.x + canvas.width)},y=0`, (this.x + canvas.width + 5), 100);
    /* if (this.speed < 0) {
             ctx.drawImage(this.img, this.x + canvas.width, 0);
             console.log("x = " + this.x);
             console.log("width = " + canvas.width);
         } else {
             //ctx.drawImage(this.img, this.x - this.img.width, 0);
             //console.log("x = " + this.x);
             //console.log("width = " + canvas.width);
         }*/
  },
};

function myPause(time) {
  // empty function
}

function updateCanvas() {
  backgroundImage.move();

  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  //requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
//img.onload = updateCanvas;
