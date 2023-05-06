$(document).ready(function () {

      const colors = ["Red", "Yellow", "Pink", "Green", "Purple", "Orange", "Blue", "Grey"];
      let gameActive = false;
      let currentTimer = 3500;
      let currentLevel = 1;
      let currentScore = 0;
      let timeout;
      let correctAnswers = 0;
      let countdownInterval;

      function startGame(currentTimer, onTimeout) {
        gameActive = true;
        const {
          correctColor,
          textColor
        } = assignBoxColors();
        displayColorName(correctColor, textColor);

        clearInterval(countdownInterval);
        $("#timer").text((currentTimer / 1000).toFixed(1));
        countdownInterval = setInterval(updateTimerDisplay, 100);

        clearTimeout(timeout);
        timeout = setTimeout(function () {
          onTimeout();
        }, currentTimer);
      }

      // Convert colour to name
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

        return {
          correctColor,
          textColor
        };
      }

      // Update the level
      function updateLevelDisplay() {
        $("#level").text(currentLevel);
      }

      // Update the initial timer
      function updateInitialTimerDisplay() {
        $("#timer").text((currentTimer / 1000).toFixed(1));
      }

      // Update the timer every 100 milliseconds
      function updateTimerDisplay() {
        let currentTime = parseFloat($("#timer").text());
        currentTime -= 0.1;
        currentTime = currentTime.toFixed(1);
        $("#timer").text(currentTime);
      }

      function endGame() {
        gameActive = false;
        clearTimeout(timeout);
        clearInterval(countdownInterval);
        $("#start-button").show();
      }

      function nextRound() {
        gameActive = false;
        endGame();
        $("#game-area").after("<div><p id='game-over'>GAME OVER!</p></div>");
      }

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

          $("#start-button").hide();

           // Remove the "Game Over" message if present
        $("#game-over").remove();

          // Start a new game
          startGame(currentTimer, nextRound);
        }
      });

      $(".box").on("click", function () {
          // If the game is not active, do nothing
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
              // Check if the player is at level 5
              if (currentLevel === 5) {
                // Set the game state to inactive, clear the timeout and end the game
                gameActive = false;
                clearTimeout(timeout);
                endGame();

                $("#game-container").after("<div id='congratulations'><p>CONGRATULATIONS!</p></div>");

              } else {
                // Increment the level, reduce the timer, and reset the number of correct answers
                currentLevel++;
                currentTimer -= 500; // Reduce the timer by 0.5 seconds
                correctAnswers = 0;

                // Update the level and timer display
                updateLevelDisplay();
                updateInitialTimerDisplay();
              }
            }
            // Start a new round
            startGame(currentTimer, nextRound);
          } else {
            endGame();
            nextRound();
        }
      });
});