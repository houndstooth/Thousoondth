function drawPlainTriangle(resolutionLayer, position, white) {
  drawTriangle(resolutionLayer, position, white)
}

function drawTriangle(resolutionLayer, position, white, subTriangle) {

  // set color for main triangles

  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  // "mirrored" version in the bottom right half of the screen

  var mirroredPosition = [];
  mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
  mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
  var mirroredTopLeftX = mirroredPosition[0] * unit;
  var mirroredTopLeftY = mirroredPosition[1] * unit;

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
  //     resolutionLayer + 2,
  //     [
  //       position[0] * Math.pow(2, resolutionLayer) + 1,
  //       position[1] * Math.pow(2, resolutionLayer) + 2
  //     ],
  //     !white,
  //     true
  //   );
  // }
};

function drawSquare(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();

  var mirroredPosition = [];
  mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
  mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
  var mirroredTopLeftX = mirroredPosition[0] * unit;
  var mirroredTopLeftY = mirroredPosition[1] * unit;

  ctx.beginPath();
  ctx.moveTo(mirroredTopLeftX,        mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY        );
  ctx.lineTo(mirroredTopLeftX + unit, mirroredTopLeftY + unit );
  ctx.lineTo(mirroredTopLeftX,        mirroredTopLeftY + unit );
  ctx.closePath();
  ctx.fill();
};
