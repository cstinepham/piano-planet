import _ from 'lodash';
var CANVAS_WIDTH, CANVAS_HEIGHT;
var canvasElement, canvasCtx, timeLimit = 10, time = 0, score = 0;
var tile1, tile2, tile3, tile4;

function drawCanvas() {
  canvasElement = document.getElementById("myCanvas");

  CANVAS_WIDTH = canvasElement.width;
  CANVAS_HEIGHT = canvasElement.height;
  
  

  canvasCtx = canvasElement.getContext("2d");
  canvasCtx.fillStyle = "000000";
  
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
}

var filledTile = {
  color: "#000000",
  x: 0,
  y: 0,
  width: 480/4,
  height: 600/4,
  draw: function(z1, z2) {
    console.log("CANVAS_HEIGHT: " + CANVAS_HEIGHT);
    console.log("CANVAS_WIDTH: " + CANVAS_WIDTH);
    console.log("width is: " + this.width)
    console.log("height is: " + this.height);
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

function draw() {
  var xt = Math.floor(Math.random() * 3);
  var yt = Math.floor(Math.random() * 3);
}

document.querySelector(".playGameButton").addEventListener("click", drawCanvas)

console.log("Webpack is working =)")

