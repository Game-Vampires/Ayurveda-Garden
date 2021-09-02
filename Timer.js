function gameTimer() {
  document.getElementById("clock").innerText = "Time Left = " + timerLimit;
  timerLimit -= 1;
  //console.log(timerLimit); suntracts -1 after function runs. this is looped by set interval, which
  //schedules the -1 function to execute every milisecond.

  if (timerLimit < 0) {
    stopGameTimer();
    // if timer limit reaches 0, we will run the stopgametimer function, which will clear the interval, ending the interval loop.
  }
  // if (plant.health) is greater than 0 collect coins, if reaches 100 you get 5 coins(maybe)
}
function collectCoins() {
  document.getElementById("coins").innerText =
    "Coins Collected =" + collectCoin;
  collectCoin += 1;
  //when plant health increases collect coins. if plant health = 100 collectCoins()
}

function stopGameTimer() {
  clearInterval(mySetIntervalHandler);
  // when executed this function will stop the game timer interval from repeating.
}

//Game Timer
var mySetIntervalHandler = setInterval(gameTimer, 1000);
// variable setIntervalHAndler is equal to setInterval. the syntax of this setInterval tells us that it will run the
//game timer function ever 1000 miliseconds (1 second).
