var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;
RECURSIVE_DEPTH = 5;
ITERATIVE_DEPTH = 6;

function drawMagicTriangle(resolutionLayer, position, white, recursiveStep) {
  drawPlainTriangle(resolutionLayer, position, white, recursiveStep);
  if (recursiveStep < RECURSIVE_DEPTH) {
    if (recursiveStep % 2 == 0 ) {
      drawVerticalJaggies(resolutionLayer, position, !white, recursiveStep + 1);
    }
    else {
      drawHorizontalJaggies(resolutionLayer, position, !white, recursiveStep + 1);
    }
  }
};

function drawHorizontalJaggies(resolutionLayer, position, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (position[0] + 0) * Math.pow(2, i + 1) + 1;
    var r = (position[1] + 1) * Math.pow(2, i + 1) - 1;
    var thisResLayer = resolutionLayer + i + 1;
    console.log("HJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};

function drawVerticalJaggies(resolutionLayer, position, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (position[0] + 1) * Math.pow(2, i + 1) - 1;
    var r = (position[1] + 0) * Math.pow(2, i + 1) + 1;
    var thisResLayer = resolutionLayer + i + 1;
    console.log("  VJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};
