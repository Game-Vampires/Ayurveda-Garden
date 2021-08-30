function draw() {
    const canvas = document.getElementById('garden-game');
    const ctx = canvas.getContext('2d');

    imgScale = 700/400;

    img.onload = function(){
        ctx.drawImage( img, 0, 0, 150*imgScale, 150);

    };

    img.src = "/Images/garden-background-vector-4.jpeg"; 

    console.log(img)