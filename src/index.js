var myHeading = document.querySelector('h1');
myHeading.textContent = 'Piano Planet';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(105, 50, 50, 0, 2 * Math.PI);
ctx.stroke();

console.log("Webpack is working!")
