const colors = ["red", "yellow", "pink", "green", "purple", "orange", "blue", "grey"];
let gameActive = false;
let currentTimer = 3500;
let currentLevel = 1;
let currentScore = 0;

function startGame(difficulty, onTimeout) {
  gameActive = true;
  const { correctColor, textColor } = assignBoxColors();
  displayColorName(correctColor, textColor);
}

// Convert colour to name
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

// Display the colour name with a different colour text
function displayColorName(correctColor, textColor) {
  $("#color-name").text(correctColor).css("color", textColor);
}

// Assign random colours to the boxes
function assignBoxColors() {
  // Fisher-Yates shuffle
  for (let i = colors.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  const correctColor = colors[Math.floor(Math.random() * colors.length)];
  let textColor;

  do {
    textColor = colors[Math.floor(Math.random() * colors.length)];
  } while (textColor === correctColor);

  $(".box").each(function (index) {
    $(this).css("background-color", colors[index]);
  });

  return { correctColor, textColor };
}

// Update the level
function updateLevelDisplay() {
  $("#level").text(currentLevel);
}

// Update the initial timer
function UpdateInitialTimerDisplay() {
  $("#timer").text((currentTimer / 1000).toFixed(1));
}

// Update the timer every 100 milliseconds
function updateTimerDisplay() {
  function updateTimerDisplay() {
    let currentTime = parseFloat($("#timer").text());
    currentTime -= 0.1;
    currentTime = currentTime.toFixed(1);
    $("#timer").text(currentTime);
  }
}

function endGame() {
  gameActive = false;
}

function nextRound() {
  gameActive = false;
  endGame();
  $("#game-area").after("<div><p id='game-over'>Game Over</p></div>");
}

$("#start-button").on("click", function () {
  if (!gameActive) {
   
    // Reset the score, level, and timer
    CurrentScore = 0;
    currentLevel = 1;
    currentTimer = 3500;

    // Update the level and timer display
    updateLevelDisplay();
    updateInitialTimerDisplay();

    // Update the score display
    $("#score").text(currentScore);

    // Start a new game
    startGame(currentDifficulty, nextRound);
  }
});

$(".box").on("click", function () {

});