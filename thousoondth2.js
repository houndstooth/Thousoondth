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

function drawMagicTriangle(resLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH) {
    if (recursiveStep % 2 == 1 ) {
      drawRecursiveTriangle(resLayer, pos, white, recursiveStep);
      drawVerticalJaggies(resLayer, pos, !white, recursiveStep + 1);
    }
    else {
      drawRecursiveTriangle(resLayer, pos, white, recursiveStep);
      //drawShiftedRecursiveTriangle(resLayer, pos, white, recursiveStep);
      drawHorizontalJaggies(resLayer, pos, !white, recursiveStep + 1);
    }
  }
};

// function drawOtherMagicTriangle(resLayer, pos, white, recursiveStep) {
//   drawOtherRecursiveTriangle(resLayer, pos, white, recursiveStep);
//   if (recursiveStep < RECURSIVE_DEPTH) {
//     if (recursiveStep % 2 == 0 ) {
//       drawVerticalJaggies(resLayer, pos, !white, recursiveStep + 1);
//     }
//     else {
//       drawHorizontalJaggies(resLayer, pos, !white, recursiveStep + 1);
//     }
//   }
// };

function drawInvertedMagicTriangle(resLayer, pos, white, recursiveStep) {
  drawInvertedRecursiveTriangle(resLayer, pos, white, recursiveStep);
  if (recursiveStep < RECURSIVE_DEPTH) {
    if (recursiveStep % 2 == 0 ) {
      drawVerticalJaggies(resLayer, pos, !white, recursiveStep + 1);
    }
    else {
      drawHorizontalJaggies(resLayer, pos, !white, recursiveStep + 1);
    }
  }
};

function drawHorizontalJaggies(resLayer, pos, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
    var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
    var thisResLayer = resLayer + i + 1;
    console.log("HJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};

function drawVerticalJaggies(resLayer, pos, white, recursiveStep) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
    var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
    var thisResLayer = resLayer + i + 1;
    console.log("  VJT | rL: " + thisResLayer + ", pos: [" + c + ", " + r + "]");
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};
