function drawTriangle(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  // top left half

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

  // bottom right half

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
};
