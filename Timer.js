function gameTimer() {
  document.getElementById("clock").innerText = "Time Left = " + timerLimit;
  timerLimit -= 1;
  //console.log(timerLimit);

  if (timerLimit < 0) {
    stopGameTimer();
  }
}

function stopGameTimer() {
  clearInterval(mySetIntervalHandler);
}

//Game Timer
var mySetIntervalHandler = setInterval(gameTimer, 1000);
