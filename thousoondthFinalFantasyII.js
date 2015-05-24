var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RECURSIVE_DEPTH = 3;
ITERATIVE_DEPTH = 3;
RESOLUTION_DEPTH = 12;

function drawMagicTriangle(resLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH && resLayer < RESOLUTION_DEPTH) {
    var vertical = recursiveStep % 2 == 1 ? true : false;
    drawRecursiveEdge(resLayer, pos, white, vertical, false);
    drawJaggies(resLayer, pos, !white, recursiveStep + 1, vertical, false);
  }
};

function drawMirroredMagicTriangle(resLayer, pos, white, recursiveStep) {
  if (recursiveStep < RECURSIVE_DEPTH && resLayer < RESOLUTION_DEPTH) {
    var vertical = recursiveStep % 2 == 1 ? true : false;
    drawRecursiveEdge(resLayer, pos, white, vertical, true, resLayer);
    drawJaggies(resLayer, pos, !white, recursiveStep + 1, vertical, true);
  }
};

function drawJaggies(resLayer, pos, white, recursiveStep, vertical, mirrored) {
  for (var i = 0; i < ITERATIVE_DEPTH; i++) {
    if (vertical) {
      var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
      var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
    } else {
      var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
      var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
    }
    var thisResLayer = resLayer + i + 1;
    if (mirrored) {
      drawMirroredMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
    } else {
      drawMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
    }
  };
};

// function drawMirroredJaggies(resLayer, pos, white, recursiveStep, vertical) {
//   for (var i = 0; i < ITERATIVE_DEPTH; i++) {
//     if (vertical) {
//       var c = (pos[0] + 1) * Math.pow(2, i + 1) - 1;
//       var r = (pos[1] + 0) * Math.pow(2, i + 1) + 1;
//     } else {
//       var c = (pos[0] + 0) * Math.pow(2, i + 1) + 1;
//       var r = (pos[1] + 1) * Math.pow(2, i + 1) - 1;
//     }
//
//     var thisResLayer = resLayer + i + 1;
//     mirroredPos = mirrorPos([c,r], thisResLayer, resLayer);
//     c = mirroredPos[0];
//     r = mirroredPos[1];
//     drawMirroredMagicTriangle(thisResLayer, [c,r], white, recursiveStep);
//   };
// };

function mirrorPos(pos, resLayer, resLayerToFlipAcross) {
  if (pos[0] + pos[1] < modAmount * 2) { return; } //already on other side
  console.log("")
  console.log("NEW GUY");;
  // resLayer += 1;
  console.log("res layer to flip across: " + resLayerToFlipAcross);
  console.log("actual res layer: " + resLayer);
  console.log("pos: " + pos);

  var modAmount = Math.pow(2, resLayer - resLayerToFlipAcross);
  console.log("mod amount: " + modAmount);
  var modC = pos[0] % modAmount;
  var modR = pos[1] % modAmount;
  console.log("mod pos: " + [modC,modR]);

  // var alreadyOnOtherSide = (pos[0] + pos[1] < modAmount * 2) ? 1 : 0

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

  var finalC = pos[0] - modC + newC; //- alreadyOnOtherSide;
  var finalR = pos[1] - modR + newR; //- alreadyOnOtherSide;
  console.log("final pos: " + [finalC,finalR]);

  return [finalC, finalR];
};
