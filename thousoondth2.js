var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;
RECURSIVE_DEPTH = 5;
ITERATIVE_DEPTH = 5;
SHRINKING_DEPTH = 10;

function drawMagicTriangle(resolutionLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH) {
    if (recursiveStep % 2 == 1 ) {
      drawRecursiveTriangle(resolutionLayer, pos, white, recursiveStep);
      drawVerticalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
    }
    else {
      drawRecursiveTriangle(resolutionLayer, pos, white, recursiveStep);
      //drawShiftedRecursiveTriangle(resolutionLayer, pos, white, recursiveStep);
      drawHorizontalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
    }
  }
};

// function drawOtherMagicTriangle(resolutionLayer, pos, white, recursiveStep) {
//   drawOtherRecursiveTriangle(resolutionLayer, pos, white, recursiveStep);
//   if (recursiveStep < RECURSIVE_DEPTH) {
//     if (recursiveStep % 2 == 0 ) {
//       drawVerticalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
//     }
//     else {
//       drawHorizontalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
//     }
//   }
// };

function drawInvertedMagicTriangle(resolutionLayer, pos, white, recursiveStep) {
  drawInvertedRecursiveTriangle(resolutionLayer, pos, white, recursiveStep);
  if (recursiveStep < RECURSIVE_DEPTH) {
    if (recursiveStep % 2 == 0 ) {
      drawVerticalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
    }
    else {
      drawHorizontalJaggies(resolutionLayer, pos, !white, recursiveStep + 1);
    }
  }
};

function drawHorizontalJaggies(resolutionLayer, pos, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
    var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
    var thisResLayer = resolutionLayer + i + 1;
    console.log("HJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};

function drawVerticalJaggies(resolutionLayer, pos, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
    var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
    var thisResLayer = resolutionLayer + i + 1;
    console.log("  VJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};
