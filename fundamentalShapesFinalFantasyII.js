function drawPlainTriangle(resLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

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
};

function drawMirroredTriangle(resLayer, pos, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resLayer);
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
};

CUSP_EDGE_CONSTANTS = [2, 1, 0, 1, 3, 0];
ROOT_EDGE_CONSTANTS = [1, 2, 1, 0, 0, 3];

function drawRecursiveEdge(resLayer, pos, white, vertical, mirrored, resLayerToMirrorAcross) {
  if (resLayer > RESOLUTION_DEPTH) { return; }

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

  if (mirrored == true) {
    console.log(resLayerToMirrorAcross);
    drawMirroredTriangle(resLayer, pos, white);
    entireThingPos = mirrorPos(entireThingPos, resLayer + 2, resLayerToMirrorAcross);
    biggerEdgePos = mirrorPos(biggerEdgePos, resLayer + 1, resLayerToMirrorAcross);
    smallerEdgePos = mirrorPos(smallerEdgePos, resLayer + 2, resLayerToMirrorAcross);
  } else {
    drawPlainTriangle(resLayer, pos, white);
    console.log("sometimes it doesn't go in here");
  }

  drawEntireThing(
    resLayer + 2,
    entireThingPos,
    white
  );

  //getting the recursion going on remaining pieces of the edge

  drawRecursiveEdge(
    resLayer + 1,
    biggerEdgePos,
    white,
    vertical,
    mirrored,
    resLayerToMirrorAcross
  );

  drawRecursiveEdge(
    resLayer + 2,
    smallerEdgePos,
    white,
    vertical,
    mirrored,
    resLayerToMirrorAcross
  );
};

// function drawMirroredRecursiveEdge(resLayer, pos, white, vertical) {
//   if (resLayer > RESOLUTION_DEPTH) { return; }
//   drawMirroredTriangle(resLayer, pos, white);
//   var pos_constants = vertical ? ROOT_EDGE_CONSTANTS : CUSP_EDGE_CONSTANTS;
//
//   //the actual edge part of this...
// };
