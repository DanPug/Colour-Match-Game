const colors = ["red", "yellow", "pink", "green", "purple", "orange", "blue", "grey"];
let gameActive = false;
let currentTimer = 3500;
let currentLevel = 1;

function startGame() {
  gameActive = true;
}

function colorToName(color) {
  const colorToNameMap = {
    "rgb(255, 0, 0)": "red",
    "rgb(255, 255, 0)": "yellow",
    "rgb(255, 192, 203)": "pink",
    "rgb(0, 128, 0)": "green",
    "rgb(128, 0, 128)": "purple",
    "rgb(255, 165, 0)": "orange",
    "rgb(0, 0, 255)": "blue",
    "rgb(128, 128, 128)": "grey"
  };
  return colorToNameMap[color] || "";
}

function displayColorName() {

}

function assignBoxColors() {

}

function updateLevelDisplay() {
  $("#level").text(currentLevel);
}

function UpdateInitialTimerDisplay() {
  $("#timer").text((currentTimer / 1000).toFixed(1));
}

function updateTimerDisplay() {

}

function endGame() {

}

function nextRound() {
  
}

$("#start-button").on("click", function () {

});

$(".box").on("click", function () {

});