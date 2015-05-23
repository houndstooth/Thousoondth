var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RECURSIVE_DEPTH = 3;
ITERATIVE_DEPTH = 3;
RESOLUTION_DEPTH = 12;

function drawMagicTriangle(resolutionLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH && resolutionLayer < RESOLUTION_DEPTH) {
    var vertical = recursiveStep % 2 == 1 ? true : false;
    drawRecursiveEdge(resolutionLayer, pos, white, vertical, false);
    drawJaggies(resolutionLayer, pos, !white, recursiveStep + 1, vertical);
  }
};

function drawMirroredMagicTriangle(resolutionLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH && resolutionLayer < RESOLUTION_DEPTH) {
    var vertical = recursiveStep % 2 == 1 ? true : false;
    drawRecursiveEdge(resolutionLayer, pos, white, vertical, true, resolutionLayer);
    drawJaggies(resolutionLayer, pos, !white, recursiveStep + 1, vertical);
  }
};

function drawJaggies(resolutionLayer, pos, white, recursiveStep, vertical) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    if (vertical) {
      var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
      var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
    } else {
      var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
      var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
    }
    var thisResLayer = resolutionLayer + i + 1;
    drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
  };
};

// function drawMirroredJaggies(resolutionLayer, pos, white, recursiveStep, vertical) {
//   for (var i = 0; i < ITERATIVE_DEPTH; i++) {
//     if (vertical) {
//       var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
//       var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
//     } else {
//       var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
//       var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
//     }
//
//     var thisResLayer = resolutionLayer + i + 1;
//     mirroredPos = mirrorPos([c,r], thisResLayer, resolutionLayer);
//     c = mirroredPos[0];
//     r = mirroredPos[1];
//     drawMirroredMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
//   };
// };

function mirrorPos(pos, resolutionLayer, resolutionLayerToFlipAcross) {
  console.log("")
  console.log("NEW GUY");;
  // resolutionLayer += 1;
  console.log("res layer to flip across: " + resolutionLayerToFlipAcross);
  console.log("actual res layer: " + resolutionLayer);
  console.log("pos: " + pos);

  var modAmount = Math.pow(2, 1 + resolutionLayer - resolutionLayerToFlipAcross);
  console.log("mod amount: " + modAmount);
  var modC = pos[0] % modAmount;
  var modR = pos[1] % modAmount;
  console.log("mod pos: " + [modC,modR]);

  // var centerPoint = [
  //   modAmount / 2,
  //   modAmount / 2
  // ];
  // console.log("centerpoint: " + centerPoint);
  //
  // var newC = modC - centerPoint[0];
  // var newR = modR - centerPoint[1];
  var newC = modAmount - modR;
  var newR = modAmount - modC;
  console.log("new pos: " + [newC,newR]);

  var finalC = pos[0] - modC + newC;
  var finalR = pos[1] - modR + newR;
  console.log("final pos: " + [finalC,finalR]);

  return [finalC, finalR];
};
