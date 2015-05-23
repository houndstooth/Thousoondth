function mirrorpos(pos, resolutionLayer) {
  var mirroredpos = [];
  mirroredpos[0] = Math.pow(2, resolutionLayer) - pos[1] - 1;
  mirroredpos[1] = Math.pow(2, resolutionLayer) - pos[0] - 1;
  return mirroredpos;
};

function drawPlainTriangle(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // "mirrored" version in the bottom right half of the screen

  var mirroredpos = mirrorpos(pos, resolutionLayer);
  var mirroredTopLeftX = mirroredpos[0] * unit;
  var mirroredTopLeftY = mirroredpos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX,        mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

function drawUnmirroredPlainTriangle(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

function drawInvertedPlainTriangle(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // "mirrored" version in the bottom right half of the screen

  var mirroredpos = mirrorpos(pos, resolutionLayer);
  var mirroredTopLeftX = mirroredpos[0] * unit;
  var mirroredTopLeftY = mirroredpos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY + unit );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

// function drawOtherPlainTriangle(resolutionLayer, pos, white) {
//   ctx.fillStyle = white ? "#fff" : "#000"
//
//   // "original" version in the top left half of the screen
//
//   var resolution = Math.pow(2, resolutionLayer);
//   var unit = WIDTH / resolution;
//   var topLeftX = pos[0] * unit;
//   var topLeftY = pos[1] * unit;
//
//   ctx.beginPath();
//   ctx.moveTo(topLeftX , topLeftY        );
//   ctx.lineTo(topLeftX + unit, topLeftY  );
//   ctx.lineTo(topLeftX ,        topLeftY + unit );
//   ctx.closePath();
//   ctx.fill();
//
//   // "mirrored" version in the bottom right half of the screen
//
//   var mirroredpos = [];
//   mirroredpos[0] = Math.pow(2, resolutionLayer) - pos[1] - 1;
//   mirroredpos[1] = Math.pow(2, resolutionLayer) - pos[0] - 1;
//   var mirroredTopLeftX = mirroredpos[0] * unit;
//   var mirroredTopLeftY = mirroredpos[1] * unit;
//
//   ctx.beginPath();
//   ctx.moveTo(mirroredTopLeftX + unit,        mirroredTopLeftY        );
//   ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY + unit      );
//   ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
//   ctx.closePath();
//   ctx.fill();
// };

function drawSquare(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  var mirroredpos = mirrorpos(pos, resolutionLayer);
  var mirroredTopLeftX = mirroredpos[0] * unit;
  var mirroredTopLeftY = mirroredpos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX,        mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY + unit );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();
};


function drawUnmirroredSquare(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

function drawPlainTriangleUnmirrored(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

// function drawOtherRecursiveTriangle(resolutionLayer, pos, white) {
//   if (resolutionLayer > SHRINKING_DEPTH) {
//     console.log("TOO FAR");
//     return;
//   }
//   console.log("rL: " + resolutionLayer + ", pos: [" + pos[0] + ", " + pos[1] + "], w?: " + white);
//   drawOtherPlainTriangle(resolutionLayer, pos, white);
//
// }

function drawInvertedRecursiveTriangle(resolutionLayer, pos, white) {
  if (resolutionLayer > SHRINKING_DEPTH) {
    console.log("TOO FAR");
    return;
  }
  console.log("rL: " + resolutionLayer + ", pos: [" + pos[0] + ", " + pos[1] + "], w?: " + white);
  drawInvertedPlainTriangle(resolutionLayer, pos, white);

}

function drawRecursiveTriangle(resolutionLayer, pos, white) {
  if (resolutionLayer > SHRINKING_DEPTH) {
    console.log("TOO FAR");
    return;
  }
  console.log("rL: " + resolutionLayer + ", pos: [" + pos[0] + ", " + pos[1] + "], w?: " + white);

  //background (maybe shrinkable?)
  // drawSquare(resolutionLayer, pos, !white);

  //main triangle (maybe deletable?)
  drawPlainTriangle(resolutionLayer, pos, white);

//   //getting the recursions on either side of the flipped teeth going
//   drawRecursiveTriangle(
//     resolutionLayer + 1,
//     [
//       Math.pow(2, 1) * pos[0],
//       Math.pow(2, 1) * pos[1] + 1
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 2,
//     [
//       Math.pow(2, 2) * pos[0] + 3,
//       Math.pow(2, 2) * pos[1]
//     ],
//     white
//   );
//   // DO I NEED ANOTHER ONE IN THE STRETCH BETWEEN THE TWO CUSPS???
//
//
//   // // cores of the two flipped houndsteeth
//   drawSquare(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 5,
//       Math.pow(2, 3) * pos[1] + 3
//     ],
//     !white
//   );
//   drawSquare(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 4,
//       Math.pow(2, 3) * pos[1] + 2
//     ],
//     white
//   );
//
//   //background for shared roots
//   // drawSquare(
//   //   resolutionLayer + 3,
//   //   [
//   //     Math.pow(2, 3) * pos[0] + 4,
//   //     Math.pow(2, 3) * pos[1] + 3
//   //   ],
//   //   white
//   // );
//   //
//   //
//   // // outside of the roots
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 3,
//       Math.pow(2, 3) * pos[1] + 2
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 5,
//       Math.pow(2, 3) * pos[1] + 4
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 4,
//       Math.pow(2, 3) * pos[1] + 3
//     ],
//     !white
//   );
//
//   //inside of roots
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 7,
//       Math.pow(2, 4) * pos[1] + 5
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 8,
//       Math.pow(2, 4) * pos[1] + 6
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 9,
//       Math.pow(2, 4) * pos[1] + 7
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 10,
//       Math.pow(2, 4) * pos[1] + 8
//     ],
//     !white
//   );
//
//   //cusps
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 9,
//       Math.pow(2, 4) * pos[1] + 3
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 10,
//       Math.pow(2, 4) * pos[1] + 4
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 11,
//       Math.pow(2, 4) * pos[1] + 5
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 12,
//       Math.pow(2, 4) * pos[1] + 6
//     ],
//     white
//   );
}
//
// //THIS ONE HAS TO HAVE THE SQUARE DOWN A BIT
// function drawShiftedRecursiveTriangle(resolutionLayer, pos, white) {
//   if (resolutionLayer > SHRINKING_DEPTH) {
//     console.log("TOO FAR");
//     return;
//   }
//   console.log("rL: " + resolutionLayer + ", pos: [" + pos[0] + ", " + pos[1] + "], w?: " + white);
//
//   //background (maybe shrinkable?)
//   // drawSquare(resolutionLayer, pos, !white);
//
//   //main triangle (maybe deletable?)
//   drawPlainTriangle(resolutionLayer, pos, white);
//
//   //getting the recursions on either side of the flipped teeth going
//   drawRecursiveTriangle(
//     resolutionLayer + 1,
//     [
//       Math.pow(2, 1) * pos[0],
//       Math.pow(2, 1) * pos[1] + 1
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 2,
//     [
//       Math.pow(2, 2) * pos[0] + 3,
//       Math.pow(2, 2) * pos[1]
//     ],
//     white
//   );
//   // DO I NEED ANOTHER ONE IN THE STRETCH BETWEEN THE TWO CUSPS???
//
//
//   // // cores of the two flipped houndsteeth
//   drawSquare(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 5,
//       Math.pow(2, 3) * pos[1] + 3
//     ],
//     !white
//   );
//   drawSquare(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 4,
//       Math.pow(2, 3) * pos[1] + 2
//     ],
//     white
//   );
//
//   //background for shared roots
//   drawSquare(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 4,
//       Math.pow(2, 3) * pos[1] + 3
//     ],
//     white
//   );
//   //
//   //
//   // // outside of the roots
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 3,
//       Math.pow(2, 3) * pos[1] + 2
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 5,
//       Math.pow(2, 3) * pos[1] + 4
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 3,
//     [
//       Math.pow(2, 3) * pos[0] + 4,
//       Math.pow(2, 3) * pos[1] + 3
//     ],
//     !white
//   );
//
//   //inside of roots
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 7,
//       Math.pow(2, 4) * pos[1] + 5
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 8,
//       Math.pow(2, 4) * pos[1] + 6
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 9,
//       Math.pow(2, 4) * pos[1] + 7
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 10,
//       Math.pow(2, 4) * pos[1] + 8
//     ],
//     !white
//   );
//
//   //cusps
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 9,
//       Math.pow(2, 4) * pos[1] + 3
//     ],
//     white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 10,
//       Math.pow(2, 4) * pos[1] + 4
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 11,
//       Math.pow(2, 4) * pos[1] + 5
//     ],
//     !white
//   );
//   drawRecursiveTriangle(
//     resolutionLayer + 4,
//     [
//       Math.pow(2, 4) * pos[0] + 12,
//       Math.pow(2, 4) * pos[1] + 6
//     ],
//     white
//   );
// }
