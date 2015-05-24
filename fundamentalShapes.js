function drawPlainTriangle(resLayer, pos, white) {
  drawTriangle(resLayer, pos, white)
}

function drawTriangle(resLayer, pos, white, subTriangle) {

  // set color for main triangles

  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resLayer);
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

  var mirroredpos = [];
  mirroredpos[0] = Math.pow(2, resLayer) - pos[1] - 1;
  mirroredpos[1] = Math.pow(2, resLayer) - pos[0] - 1;
  var mirroredTopLeftX = mirroredpos[0] * unit;
  var mirroredTopLeftY = mirroredpos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX,        mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // flip the color for the 2nd halves of each triangle

  ctx.fillStyle = white ? "#000" : "#fff"

  // other half of original triangle

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // other half of mirrored triangle

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY + unit );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // houndstooth fractaling

  // subTriangle = typeof subTriangle !== 'undefined' ? subTriangle : false;
  // if (!subTriangle) {
  //   drawTriangle(
  //     resLayer + 2,
  //     [
  //       pos[0] * Math.pow(2, resLayer) + 1,
  //       pos[1] * Math.pow(2, resLayer) + 2
  //     ],
  //     !white,
  //     true
  //   );
  // }
};

function drawSquare(resLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resLayer);
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

  var mirroredpos = [];
  mirroredpos[0] = Math.pow(2, resLayer) - pos[1] - 1;
  mirroredpos[1] = Math.pow(2, resLayer) - pos[0] - 1;
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
