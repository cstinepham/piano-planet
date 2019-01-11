import _ from 'lodash';
var CANVAS_WIDTH, CANVAS_HEIGHT;
var canvasElement, canvasCtx, timeLimit = 10, time = 0, score = 0;
var tile1, tile2, tile3, tile4;

function drawCanvas() {
  canvasElement = document.getElementById("myCanvas");

  canvasElement.width = 480;
  canvasElement.height = 600;
  CANVAS_WIDTH = canvasElement.width;
  CANVAS_HEIGHT = canvasElement.height;
  console.log("CANVAS_HEIGHT: "+ CANVAS_HEIGHT);
  console.log("CANVAS_WIDTH: " + CANVAS_WIDTH);
  

  canvasCtx = canvasElement.getContext("2d");
  canvasCtx.fillStyle = "000000";
  //canvasCtx.fillRect(0, 20, 150, 100);
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
  color: "000000",
  x: 0,
  y: 0,
  width: CANVAS_WIDTH/4,
  height: CANVAS_WIDTH/4,
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
  canvasCtx.moveTo(CANVAS_WIDTH / 4, 0);
  canvasCtx.lineTo(CANVAS_WIDTH / 4, CANVAS_HEIGHT);
  canvasCtx.moveTo(2 * CANVAS_WIDTH / 4, 0);
  canvasCtx.lineTo(2 * CANVAS_WIDTH / 4, CANVAS_HEIGHT);
  canvasCtx.moveTo(3 * CANVAS_WIDTH / 4, 0);
  canvasCtx.lineTo(3 * CANVAS_WIDTH / 4, CANVAS_HEIGHT);
  canvasCtx.moveTo(0, CANVAS_HEIGHT / 4);
  canvasCtx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 4);
  canvasCtx.moveTo(0, 2 * CANVAS_HEIGHT / 4);
  canvasCtx.lineTo(CANVAS_WIDTH, 2 * CANVAS_HEIGHT / 4);
  canvasCtx.moveTo(0, 3 * CANVAS_HEIGHT / 4);
  canvasCtx.lineTo(CANVAS_WIDTH, 3 * CANVAS_HEIGHT / 4);
  canvasCtx.stroke();
}
document.querySelector(".playGameButton").addEventListener("click", drawCanvas)

console.log("Webpack is working =)")

