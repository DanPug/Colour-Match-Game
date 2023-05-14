$(document).ready(function () {

    const colors = ["Red", "Yellow", "Pink", "Green", "Purple", "Orange", "Blue", "Grey"];
    let gameActive = false;
    let currentTimer = 3500;
    let currentLevel = 1;
    let currentScore = 0;
    let timeout;
    let correctAnswers = 0;
    let countdownInterval;
    
    // Function to start the game
    function startGame(currentTimer, onTimeout) {
        gameActive = true;
        const { correctColor, textColor } = assignBoxColors();
        displayColorName(correctColor, textColor);

        clearInterval(countdownInterval);
        $("#timer").text((currentTimer / 1000).toFixed(1));
        countdownInterval = setInterval(updateTimerDisplay, 100);

        clearTimeout(timeout);
        timeout = setTimeout(function () { onTimeout(); }, currentTimer);
    }

    // Function to convert colour to name
    function colorToName(color) {
        const colorToNameMap = {
            "rgb(255, 0, 0)": "Red",
            "rgb(255, 255, 0)": "Yellow",
            "rgb(255, 192, 203)": "Pink",
            "rgb(0, 128, 0)": "Green",
            "rgb(128, 0, 128)": "Purple",
            "rgb(255, 165, 0)": "Orange",
            "rgb(0, 0, 255)": "Blue",
            "rgb(128, 128, 128)": "Grey"
        };
        return colorToNameMap[color] || "";
    }

    // Function to display the colour name with a different colour text
    function displayColorName(correctColor, textColor) {
        $("#color-name").text(correctColor).css("color", textColor);
    }

    // Function to ssign random colours to the boxes
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

        $(".box").each(function (index) { $(this).css("background-color", colors[index]); 
      });

        return {
            correctColor, textColor
        };
      }

    // Function to update the level
    function updateLevelDisplay() {
        $("#level").text(currentLevel);
      }

    // Function to update the initial timer
    function updateInitialTimerDisplay() {
        $("#timer").text((currentTimer / 1000).toFixed(1));
      }

    // Function to update the timer every 100 milliseconds
    function updateTimerDisplay() {
        let currentTime = parseFloat($("#timer").text());
        currentTime -= 0.1;
        currentTime = currentTime.toFixed(1);
        $("#timer").text(currentTime);
      }

    // Function to end the game
    function endGame() {
        gameActive = false;
        clearTimeout(timeout);
        clearInterval(countdownInterval);
        $("#start-button").css("opacity", "1");
      }

    // Function to hide info when game is completed
    function gameCompleted() {
        endGame();
        $("#level-section, #timer-section").hide();
    }

    // Function to increment the level, reduce the timer, and reset the number of correct answers
    function advanceLevel() {
        currentLevel++;
        currentTimer -= 500;
        correctAnswers = 0;
  
        // Update the level and timer display
        updateLevelDisplay();
        updateInitialTimerDisplay();

        }

    // Function to start a new round
    function nextRound() {
        gameActive = false;
        endGame();
        $("#game-area").after("<div><p id='game-over'>GAME OVER!</p></div>");
      }

    // Click event handler for the start button
    $("#start-button").on("click", function () {
        if (!gameActive) {

            // Reset the score, level, and timer
            currentScore = 0;
            currentLevel = 1;
            currentTimer = 3500;

            // Update the level and timer display
            updateLevelDisplay();
            updateInitialTimerDisplay();
  
            // Update the score display
            $("#score").text(currentScore);

            // Hide the start button
            $("#start-button").css("opacity", "0");

            // Remove the "Game Over" message if present
            $("#game-over").remove();

            // Remove the "Congratulations" message if present
            $("#congratulations").remove();

            // Show the timer, score, and level elements
            $("#timer-section").show();
            $("#level-section").show();

            // Start a new game
            startGame(currentTimer, nextRound);
         }
      });

    // Click event handler for the coloured boxes
        $(".box").on("click", function () {
            if (!gameActive) return;

            // Get the selected colour name and the correct colour name
            const selectedColorName = colorToName($(this).css("background-color"));
            const correctColorName = $("#color-name").text();

            // Check if the selected colour is the correct colour
            if (selectedColorName === correctColorName) {

            // Increment the score and the number of correct answers
            currentScore++;
            correctAnswers++;

            // Update the score
            $("#score").text(currentScore);

            // Check if the player has answered 20 questions correctly
            if (correctAnswers === 20) {
                advanceLevel();

                if (currentLevel === 6) {
                    gameCompleted();
                    $("#game-area").after("<div id='congratulations'><p>CONGRATULATIONS!</p></div>");
                    return;
                }
                updateInitialTimerDisplay();
            }
               
                // Start a new round
                startGame(currentTimer, nextRound);
            } else {
                endGame();
                nextRound();
          }
      });
});