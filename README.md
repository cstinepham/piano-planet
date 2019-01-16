# Piano Planet
Piano Planet is a simple, classic game based off the game Piano Tiles. The game play consists of the player pressing the correct piano note (a keyboard key) when it is asked for. Once pressed, a piano note plays and the row of keys scrolls to the next row. 

The goal of the game is to go through as many piano notes as you can in 10 seconds!

# Game Play
[game]: https://github.com/cstinepham/piano-planet/blob/master/assets/piano-planet-screenshot.png
![alt text][game]
Upon visiting Piano Planet, a user sees instructions and a Play button on the right panel. Once the Play button is pressed, the game board loads on the left and the game starts. The board is randomized each game. A countdown timer kicks off from 10 seconds and counts down to 0. There is a score counter that increments upon each correct key press. 

# Technologies
[code]: https://github.com/cstinepham/piano-planet/blob/master/assets/tile-code-screenshot.png
The game play utilized vanilla Javascript with an HTML5 Canvas element to render the piano board. 

## Randomly Generated Tiles
![alt text][code]
Each time the board is loaded, all 4 tiles seen on the board are generated instantly. As the user selects the right key, the next row's key is generated on the spot, while the previously generated keys are shifted down. Seen in the code snippet above - tile are reassigned to the tile above it on update(), which is called when a user selects the correct key.

## Audio Piano Effect on Key Press
Each key corresponds to a different piano note. Staying true to the note order on a piano -- Pressing 'A' corresponds to the middle c note, 'S' is the middle d note, 'D' is the middle e note , and 'F' is the middle f note.