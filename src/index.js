import _ from 'lodash';

// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Piano Planet';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(105, 50, 50, 0, 2 * Math.PI);
ctx.stroke();

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpacky'], ' ');
  return element;
}

document.body.appendChild(component());


console.log("Webpack is working =) ")
