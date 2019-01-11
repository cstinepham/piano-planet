import _ from 'lodash';
var CANVAS_WIDTH, CANVAS_HEIGHT;
var canvasElement, canvasCtx, timeLimit = 10, time = 0, score = 0;

function drawCanvas() {
  canvasElement = document.getElementById("myCanvas");
  let leftPanel = document.getElementById("leftPanel");
  // canvasElement.width = leftPanel.width;
  // canvasElement.height = leftPanel.height-50;
  
  CANVAS_WIDTH = canvasElement.width;
  CANVAS_HEIGHT = canvasElement.height;
  console.log(CANVAS_HEIGHT);
  console.log(CANVAS_WIDTH);

  canvasCtx = canvasElement.getContext("2d");
  canvasCtx.fillStyle = "#FF0000";

}

document.querySelector(".playGameButton").addEventListener("click", drawCanvas)
console.log("Webpack is working =)")

