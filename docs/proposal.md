# Piano Planet
## Background and Overview
Piano Planet is a simple, classic game based off the game Piano Tiles. The game play consists of the player pressing the correct piano note (a keyboard key) when it is asked for. Once pressed, a piano note plays and the row of keys scrolls to the next row. 

The goal of the game is to go through as many piano notes as you can in 10 seconds!
## Functionality and MVP Features
### Welcome Page
[welcome-mockup]: https://github.com/cstinepham/piano-runner/blob/master/docs/images/piano_runner_mockup1.jpg
![alt text][welcome-mockup]
* Start Button
* Instructions
* Leaderboard

### Game Play
[gameplay-mockup]: https://github.com/cstinepham/piano-runner/blob/master/docs/images/piano_runner_mockup2.jpg
![alt text][gameplay-mockup]
* Piano Board UI
  * 'ASDF' and 'HJKL' on the bottom most keys
  * One random highlighted key per each row
* Piano Key Click - CORRECT 
  * Piano note sound triggers
  * Piano board row scrolls down to next row on bottom
 * Piano Key Click - INCORRECT 
   * Game Over
* 10 second countdown
* Piano Note Counter for leaderboard
* Game Over
   * If successful game => Records note count in to leaderboard history. Has name input.
   * 'Try Again' button
   * 'Home' button


## Architecture and Technologies
* Vanilla JavaScript 
* HTML5 Canvas 
* Webpack
* Node.js
## Implementation Timeline
Day 1 - Thursday January 10
* Research on overall technologies I need to use and solidify stack and strategy
* Look in to canvas (never used it) and start playing with it
* Set up basic CSS for page.. Change mockup so that gameplay is all in one game (No Home screen. Just put instructions & play button on top of screen above piano board?)

Day 2 - Friday January 11
* Continue polishing CSS for page
* Continue looking in to how to make a piano board using Canvas and should have a basic idea
* Begin research/logic for piano board gameplay 
* Look in to how to get sound to play on each correct key press

Day 3 & 4 - Weekend
* Polish implementation of piano board 
* Should move upon correct key press
* More CSS polishing
* Start on leaderboard

Day 5 - Monday January 14
* Get leaderboard working
* Have all basic functionality working, but polish animations and how it looks

Day 5 - Tuesday January 15
* Polishing CSS and any buggy logic

