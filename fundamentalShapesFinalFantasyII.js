function drawPlainTriangle(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

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

function drawMirroredTriangle(resolutionLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX , topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY  );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
};

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
};

CUSP_EDGE_CONSTANTS = [2, 1, 0, 1, 3, 0];
ROOT_EDGE_CONSTANTS = [1, 2, 1, 0, 0, 3];

function drawRecursiveEdge(resolutionLayer, pos, white, vertical, mirrored, resolutionLayerToMirrorAcross) {
  if (resolutionLayer > RESOLUTION_DEPTH) { return; }
  drawPlainTriangle(resolutionLayer, pos, white);
  var pos_constants = vertical ? ROOT_EDGE_CONSTANTS : CUSP_EDGE_CONSTANTS;

  //the as-above-so-below square
  var entireThingPos = [
    Math.pow(2, 2) * pos[0] + pos_constants[0],
    Math.pow(2, 2) * pos[1] + pos_constants[1]
  ];
  var biggerEdgePos = [
    Math.pow(2, 1) * pos[0] + pos_constants[2],
    Math.pow(2, 1) * pos[1] + pos_constants[3]
  ];
  var smallerEdgePos = [
    Math.pow(2, 2) * pos[0] + pos_constants[4],
    Math.pow(2, 2) * pos[1] + pos_constants[5]
  ];

  if (mirrored) {
    entireThingPos = mirrorPos(entireThingPos, resolutionLayerToMirrorAcross);
    biggerEdgePos = mirrorPos(biggerEdgePos, resolutionLayerToMirrorAcross);
    smallerEdgePos = mirrorPos(smallerEdgePos, resolutionLayerToMirrorAcross);
  }

  drawEntireThing(
    resolutionLayer + 2,
    entireThingPos,
    white
  )

  //getting the recursion going on remaining pieces of the edge

  drawRecursiveEdge(
    resolutionLayer + 1,
    biggerEdgePos,
    white,
    vertical,
    mirrored, 
    resolutionLayerToMirrorAcross
  );

  drawRecursiveEdge(
    resolutionLayer + 2,
    smallerEdgePos,
    white,
    vertical,
    mirrored,
    resolutionLayerToMirrorAcross
  );
};

// function drawMirroredRecursiveEdge(resolutionLayer, pos, white, vertical) {
//   if (resolutionLayer > RESOLUTION_DEPTH) { return; }
//   drawMirroredTriangle(resolutionLayer, pos, white);
//   var pos_constants = vertical ? ROOT_EDGE_CONSTANTS : CUSP_EDGE_CONSTANTS;
//
//   //the actual edge part of this...
// };
