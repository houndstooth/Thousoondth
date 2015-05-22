function drawPlainTriangle(resolutionLayer, position, white) {
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

function drawPlainTriangleUnmirrored(resolutionLayer, position, white) {
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
};

function drawRecursiveTriangle(resolutionLayer, position, white) {
  if (resolutionLayer > SHRINKING_DEPTH) {
    console.log("TOO FAR");
    return;
  }
  console.log("rL: " + resolutionLayer + ", pos: [" + position[0] + ", " + position[1] + "], w?: " + white);

  //background (maybe shrinkable?)
  drawSquare(resolutionLayer, position, !white);

  //main triangle (maybe deletable?)
  drawPlainTriangle(resolutionLayer, position, white);

  //getting the recursions on either side of the flipped teeth going
  drawRecursiveTriangle(
    resolutionLayer + 1,
    [
      Math.pow(2, resolutionLayer + 1) * position[0],
      Math.pow(2, resolutionLayer + 1) * position[1] + 1
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 2,
    [
      Math.pow(2, resolutionLayer + 2) * position[0] + 3,
      Math.pow(2, resolutionLayer + 2) * position[1]
    ],
    white
  );

  //cores of the two flipped houndsteeth
  drawSquare(
    resolutionLayer + 3,
    [
      Math.pow(2, resolutionLayer + 3) * position[0] + 5,
      Math.pow(2, resolutionLayer + 3) * position[1] + 3
    ],
    !white
  );
  drawSquare(
    resolutionLayer + 3,
    [
      Math.pow(2, resolutionLayer + 3) * position[0] + 4,
      Math.pow(2, resolutionLayer + 3) * position[1] + 2
    ],
    white
  );

  //outside of the roots
  drawRecursiveTriangle(
    resolutionLayer + 3,
    [
      Math.pow(2, resolutionLayer + 3) * position[0] + 3,
      Math.pow(2, resolutionLayer + 3) * position[1] + 2
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 3,
    [
      Math.pow(2, resolutionLayer + 3) * position[0] + 5,
      Math.pow(2, resolutionLayer + 3) * position[1] + 4
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 3,
    [
      Math.pow(2, resolutionLayer + 3) * position[0] + 4,
      Math.pow(2, resolutionLayer + 3) * position[1] + 3
    ],
    !white
  );

  //inside of roots
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 7,
      Math.pow(2, resolutionLayer + 4) * position[1] + 5
    ],
    !white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 8,
      Math.pow(2, resolutionLayer + 4) * position[1] + 6
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 9,
      Math.pow(2, resolutionLayer + 4) * position[1] + 7
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 10,
      Math.pow(2, resolutionLayer + 4) * position[1] + 8
    ],
    !white
  );

  //cusps
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 9,
      Math.pow(2, resolutionLayer + 4) * position[1] + 3
    ],
    white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 10,
      Math.pow(2, resolutionLayer + 4) * position[1] + 4
    ],
    !white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 11,
      Math.pow(2, resolutionLayer + 4) * position[1] + 5
    ],
    !white
  );
  drawRecursiveTriangle(
    resolutionLayer + 4,
    [
      Math.pow(2, resolutionLayer + 4) * position[0] + 12,
      Math.pow(2, resolutionLayer + 4) * position[1] + 6
    ],
    white
  );
}

// function drawHoundstooth(resolutionLayer, position, white) {
//   drawSquare(resolutionLayer, position, white);
//   drawRecursiveTriangle(resolutionLayer, [position[0] - 1, position[1]], white);
//   //drawRecursiveTriangle(resolutionLayer, [position[0], position[1] + 1], white);
// }
