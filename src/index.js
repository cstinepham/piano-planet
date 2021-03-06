import _ from 'lodash';
import Tile from './tile.js';

var CANVAS_WIDTH, CANVAS_HEIGHT, loaded, threading;
var canvasElement, canvasCtx, time = 10, score = 0;
var tile1, tile2, tile3, tile4;

function drawCanvas() {
  
  disablePlayButton();
  loaded = true;
  time = 10;
  score = 0;
  canvasElement = document.getElementById("myCanvas");

  CANVAS_WIDTH = canvasElement.width;
  CANVAS_HEIGHT = canvasElement.height;

  canvasCtx = canvasElement.getContext("2d");
  canvasCtx.fillStyle = "#000";

  // canvasCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  var xt = Math.floor(Math.random() * 4);
  tile1 = xt;
  xt = Math.floor(Math.random() * 4);
  tile2 = xt;
  xt = Math.floor(Math.random() * 4);
  tile3 = xt;
  xt = Math.floor(Math.random() * 4);
  tile4 = xt;
  console.log(tile1, tile2, tile3, tile4);

  filledTile.draw(tile1, 0);
  filledTile.draw(tile2, 1);
  filledTile.draw(tile3, 2);
  filledTile.draw(tile4, 3);
  drawLines();
  clearInterval(threading);
  threading = setInterval(function () {
    time -= 0.01;
    if (time <= 0) {
      clearInterval(threading);
      document.getElementById("score").innerHTML = score + " tiles!";
    } else
      document.getElementById("countdowntimer").innerHTML = time.toPrecision(2);
  }, 10)
  
}

var filledTile = {
  color: "#000",
  x: 0,
  y: 0,
  width: 480/4,
  height: 600/4,
  draw: function(z1, z2) {
    canvasCtx.fillStyle = this.color;
    canvasCtx.fillRect(z1 * this.width, z2 * this.height, this.width, this.height);
  },
  update: function() {
    tile4 = tile3;
    tile3 = tile2;
    tile2 = tile1;
    tile1 = Math.floor(Math.random() * 4);
    canvasCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    drawLines();
    filledTile.draw(tile1, 0);
    filledTile.draw(tile2, 1);
    filledTile.draw(tile3, 2);
    filledTile.draw(tile4, 3);
  }
}

function drawLines() {
  canvasCtx.beginPath();
  // Vertical Lines
  for(let i = 1; i < 4; i++) {
    canvasCtx.moveTo(i * CANVAS_WIDTH/4, 0);
    canvasCtx.lineTo(i * CANVAS_WIDTH / 4, CANVAS_HEIGHT);
  }
  
  // Horizontal Lines
  for (let i = 1; i < 4; i++) {
    canvasCtx.moveTo(0, i * CANVAS_HEIGHT / 4);
    canvasCtx.lineTo(CANVAS_WIDTH, i * CANVAS_HEIGHT / 4);  
  }
  canvasCtx.stroke();
}

function play(key) {
  var noteId;
  switch (key) {
    case 97:
      noteId = "c_note";
      break;
    case 115: 
      noteId = "d_note";
      break;
    case 100:
      noteId = "e_note";
      break;
    case 102:
      noteId = "f_note";
      break;
    default:
      break;
  }
  var audio = document.getElementById(noteId);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function disablePlayButton() {
  document.querySelector(".playGameButton").disabled = true;
}

function update(key) {

  if (key == 97 || key == 115 || key == 100 || key == 102) {
    if ((key == 97 && tile4 == 0) || (key == 115 && tile4 == 1) || (key == 100 && tile4 == 2) || (key == 102 && tile4 == 3)) {
      
      score++;
      filledTile.update();
      play(key)
    }
    else {
      alert('You pressed the wrong key! Game Over.');
      return false;
    }
  }
  
  

    document.getElementById("score").innerHTML = score;
    if (time <= 0) {
      clearInterval(threading);
      document.getElementById("score").innerHTML = score + " tiles!";
      return false;
    }
    return true;
}

document.querySelector(".playGameButton").addEventListener("click", drawCanvas)
document.addEventListener("keypress", function onPress(event) {
  if (loaded) {
    console.log(event.which)
    loaded = update(event.which);
  }
});




