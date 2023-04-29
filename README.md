# Color Match Game

## How to Play

1. Click the "Start" button to begin the game.
2. A colour name will appear in the center, displayed in a different colour to the name.
3. Click on one of the surrounding colour boxes that matches the NAME of the colour displayed in the centre box.
4. You have a limited amount of time to make your decision; if you run out of time or click the wrong colour box, the game will end.
5. Correctly match 20 colours in a row to move on to the next level. Each level decreases the amount of time you have to select a box.
6. Complete level 5 to win the game.

### Credits

https://s3.mirror.co.uk/click-the-colour-and-not-the-word/index.html

Functions required:

startGame: Start the game on level 1. Set up the color boxes, assign the correct color name, and start the timer.
colorToName: Convert the RGB color values to the corresponding color names.
displayColorName: Set the text and text color of the displayed color name.
assignBoxColors: Assign a random color to each box.
updateLevelDisplay: Update the level on the screen.
UpdateInitialTimerDisplay: Update the timer to zero.
updateTimerDisplay: Update the timer by decrementing it every 100 milliseconds.
nextRound: Proceed to the next round or stop the game and display the "Game Over" message.
endGame: End the game,clear the timer and display the start button.

Click event handlers for the boxes and start button