# Color Match Game

[View the live website here](https://danpug.github.io/Colour-Match-Game/)

![Am I Resonsive Image](/images/am-i-responsive.webp)

## How to Play

1. Click the "Start" button to begin the game.
2. A colour name will appear in the center, displayed in a different colour to the name.
3. Click on one of the surrounding colour boxes that matches the NAME of the colour displayed in the centre box.
4. You have a limited amount of time to make your decision; if you run out of time or click the wrong colour box, the game will end.
5. Correctly match 20 colours in a row to move on to the next level. Each level decreases the amount of time you have to select a box.
6. Complete level 5 to win the game.

<br/>

## User Experience (UX)

- Design
	- Colour Scheme	
		- The game is based on colours so the website uses base colours of black and white, with text written in bold colours

	- Typography
		- Arial is used for most of the text with Bungee Inline used for the heading so that it is bold and stands out. Press Start 2P is used for the game over and congratulations message as this is a traditional gaming font. Sans-serif is used as a backup font in case for some reason the font doesn't get imported into the website properly.

	- Imagery
		- The background image continues the theme of coloured squares and keeps the majority of the screen white for contrast.

<br/>


## Wireframes

[Wireframe can be viewed here](/images/wireframes.webp)

<br/>

## Features

- Responsive on all device sizes
- 5 levels of game play with increasing difficulty
- 100 correct responses required to complete the game
- Visual timer, level display and level score
- Works with touchscreen and with a mouse

<br/>

## Technologies Used

### Languages Used

- HTML
- CSS
- Javascript

### Frameworks, Libraries and Programs Used

- Google Fonts 
	- Google fonts were used to import the 'Bungee Inline' and 'Press Start 2P' fonts.
- JQuery
	- JQuery was used with Javascript.
- Git
	- Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub.
- Github
	- GitHub is used to store the project's code after being pushed from Git.
- Balsamiq 
	- Balsamiq was used to create the wireframe during the design process.
- Free Convert 
	- Free Convert was used to optimise the images for the website by converting them into WEBP.

<br/>

## Testing

W3C Markup Validator, W3C Validator and JsHint were used to validate the code.

[W3C Markup Validator Results](/images/html-validation.webp)

[W3C CSS Validator Results](/images/css-validation.webp)

[JsHint Validation Results](/images/jshint-validation.webp)

### Further Testing

- The website was tested on Google Chrome, Microsoft Edge, Brave and Firefox browsers.
- Google Lighthouse was used for mobile and desktop testing:
    - [Desktop Lighthouse Results](/images/lighthouse-desktop-result.webp)
    - [Mobile Lighthouse Results](/images/lighthouse-mobile-result.webp)
- The website was viewed on a desktop, laptop, Samsung S20 mobile phone and Samsung S10 mobile phone. It was also viewed on a variety of devices by using the Chrome developer tools.
- Family members were asked to play the game on the website to point out any bugs and/or user experience issues.

### Known Bugs

Stylesheet needs to include 'disabled' in order for Google Lighthouse to give a performance score of 100 on mobile.

<br/>

## Deployment

### GitHub Pages

The project was deployed to GitHub pages using the following steps:

1. Log in to GitHub and locate the GitHUb repository.
2. At the top of the repository, locate the 'Settings' button on the menu.
3. Locate the 'Pages' tab on the left hand side menu.
4. Under 'Branch', click the dropdown called 'None' and select 'Main'.
5. Click 'Save'.
6. Refresh the page if it doesn't do it automatically and at the top of the page you will see 'Your site is live at https://...'.

### Forking the Repository

By forking the GitHub repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

Log in to GitHub and locate the GitHub repository.
At the top of the repository, locate the 'Fork' button.
You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log into GitHub and locate the GitHub repository.
2. Under the repository name, click 'Clone or download'.
3. To clone the repository using HTTPS, under 'Clone with HTTPS' copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type 'Git Clone' and the paste the URL you copied in step 3.
7. Press 'Enter', your local clone will be created.

<br/>

## Credit

### Code

The 'Fisher-Yates shuffle' was used within assignBoxColors function, this code was obtained from w3schools.

### Content

background image - wwww.psdgraphics.com

<br/>

## Acknowledgments

[Click the colour and not the word game - Similar game used for inspiration](https://s3.mirror.co.uk/click-the-colour-and-not-the-word/index.html)

Functions are written out with the help of:
![Code Institute - tutorials and projects](https://codeinstitute.net/)
![w3schools - tutorials](www.w3schools.com)
![MDN Web Docs - tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
![overAPI - Javascript and JQuery cheat sheets](https://overapi.com/jquery)
![JSHint - code validation](https://jshint.com/)
![Python Tutor - code validation](https://pythontutor.com/javascript.html#mode=edit)

<br/>

## Future

The game could be added to in future in order to keep players coming back. Future ides include:
- option to swap the rules so you need to click on the colour not the name
- Additional levels could be added with:
    - shrinking squares
    - flashing squares
    - moving squares
- Additional colours can be added
- Sound can be added to improve the experience