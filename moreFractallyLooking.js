// SETUP


var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 1;

ORIGINAL_TOP_LEFT_GRID = [
  [ false, true,  true,  true  ],
  [ true,  false, true,  true  ],
  [ false, false, true,  false ],
  [ false, false, false, true  ]
];

ORIGINAL_BOTTOM_RIGHT_GRID = [
  [ true,  false, true,  true ],
  [ false, true,  true,  true ],
  [ false, false, false, true  ],
  [ false, false, true,  false ]
];

var topLeftGrid = ORIGINAL_TOP_LEFT_GRID;
var bottomRightGrid = ORIGINAL_BOTTOM_RIGHT_GRID;

var actualHoundstoothTopLeftGrid = ORIGINAL_TOP_LEFT_GRID;
var actualHoundstoothBottomRightGrid = ORIGINAL_BOTTOM_RIGHT_GRID;

var newTopLeftGrid, newBottomRightGrid;

var curLayer = 1;

// EXECUTE

// console.log(topLeftGrid);
// convertGridsToNextLayer();
// console.log(topLeftGrid);
// // convertGridsToNextLayer();
// // console.log(topLeftGrid);
// // convertGridsToNextLayer();
// // console.log(topLeftGrid);

// doSomeFractalMagic();
// doSomeFractalMagic();
//
// console.log(topLeftGrid);
// console.log(actualHoundstoothTopLeftGrid);

// FUNCTIONS


function renderReality() {
  var resolutionLayer = Math.ceil(Math.log2(topLeftGrid.length));
  // console.log(resolutionLayer);
  for (var i = 0; i < topLeftGrid.length; i++ ) {
    for (var j = 0; j < topLeftGrid[0].length; j++ ) {
      drawTopLeftTriangle(resolutionLayer, [i, j], topLeftGrid[i][j]);
      drawBottomRightTriangle(resolutionLayer, [i, j], bottomRightGrid[i][j]);
    }
  }
}

function renderActualHoundstooth() {
  var resolutionLayer = Math.log2(actualHoundstoothTopLeftGrid.length);
  // console.log(resolutionLayer);
  for (var i = 0; i < actualHoundstoothTopLeftGrid.length; i++ ) {
    for (var j = 0; j < actualHoundstoothTopLeftGrid[0].length; j++ ) {
      drawTopLeftTriangle(resolutionLayer, [i, j], actualHoundstoothTopLeftGrid[i][j]);
      drawBottomRightTriangle(resolutionLayer, [i, j], actualHoundstoothBottomRightGrid[i][j]);
    }
  }
}

function doSomeFractalMagic() {
  convertGridsToNextLayer();
  console.log("fractal reality top left grid: ");
  console.log(topLeftGrid);
  console.log("fractal reality bottom right grid: ");
  console.log(bottomRightGrid);
  convertActualHoundstoothGridsToNextLayer();
  console.log("actual houndstooth top left grid: ");
  console.log(actualHoundstoothTopLeftGrid);
  console.log("actual houndstooth bottom right grid: ");
  console.log(actualHoundstoothBottomRightGrid);
  var resolutionLayer = Math.log2(actualHoundstoothTopLeftGrid.length);  //MINUS ONE?!?!?!?!
  //check blacks
  for (var i = 2; i < topLeftGrid.length; i = i + 4 ) {
    for (var j = 0; j < topLeftGrid[0].length; j = j + 4 ) {
      console.log("[i: " + i + ", j: " + j + "] = " + numMatches(i,j));
      // console.log("[i: " + i + ", j: " + j + "] = " + numWhites(i,j));
      // if (numWhites(i,j) < 8) {
      //   ///.....so i actually have to create a houndstooth pattern for each layer, and
      //   ///also not coutn the white tris, but coutn the MATCHES between it and that...
      // }
      if (numMatches(i,j) >= 8 || numMatches(i,j) == 0) {
        // drawHoundstooth(resolutionLayer - 1, [i,j], false)
        flipGridTrisToHoundstooth(resolutionLayer - 1, [i,j], false);
      }
    }
  }
  //check whites
  for (var i = 0; i < topLeftGrid.length; i = i + 4 ) {
    for (var j = 2; j < topLeftGrid[0].length; j = j + 4 ) {
      console.log("[i: " + i + ", j: " + j + "] = " + numMatches(i,j));
      // console.log("[i: " + i + ", j: " + j + "] = " + numWhites(i,j));
      // if (numWhites(i,j) < 8) {
      //   ///.....so i actually have to create a houndstooth pattern for each layer, and
      //   ///also not coutn the white tris, but coutn the MATCHES between it and that...
      // }
      if (numMatches(i,j) >= 8 || numMatches(i,j) == 0) {
        // drawHoundstooth(resolutionLayer - 1, [i,j], true)
        flipGridTrisToHoundstooth(resolutionLayer - 1, [i,j], true);
      }
    }
  }
}

function flipGridTrisToHoundstooth(resolutionLayer, position, white) {
  console.log("flipped houndstooth");
  console.log(resolutionLayer);
  console.log(position);
  console.log(white);
  var i = position[0];
  var j = position[1];
  var res = topLeftGrid.length;

  //square
  topLeftGrid[i][j] = white;
  bottomRightGrid[i][j] = white;
  topLeftGrid[(i+1)%res][j] = white;
  bottomRightGrid[(i+1)%res][j] = white;
  topLeftGrid[i][(j+1)%res] = white;
  bottomRightGrid[i][(j+1)%res] = white;
  topLeftGrid[(i+1)%res][(j+1)%res] = white;
  bottomRightGrid[(i+1)%res][(j+1)%res] = white;

  //top cusp
  bottomRightGrid[(i+1)%res][wrapIndex(j-1,res)] = white;

  //right cusp
  topLeftGrid[(i+2)%res][j] = white;

  //left root
  bottomRightGrid[wrapIndex(i-1,res)][j] = white;
  topLeftGrid[wrapIndex(i-1,res)][(j+1)%res] = white;
  bottomRightGrid[wrapIndex(i-2,res)][(j+1)%res] = white;

  //bottom root
  topLeftGrid[(i+1)%res][(j+2)%res] = white;
  bottomRightGrid[i][(j+2)%res] = white;
  topLeftGrid[i][(j+3)%res] = white;
}

// function drawHoundstooth(resolutionLayer, position, white) {
  // if (white) {
    // console.log("drawing a white houndsooth at level " + resolutionLayer + " at [" + position[0] + "," + position[1] + "]");

  // //square
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer),
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer),
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) ,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) ,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );
  //
  // //top cusp
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer) - 1
  //   ],
  //   white
  // );
  //
  // //right cusp
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 2,
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  //
  // //bottom root
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) + 1,
  //     position[1] * Math.pow(2, resolutionLayer) + 2
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) ,
  //     position[1] * Math.pow(2, resolutionLayer) + 2
  //   ],
  //   white
  // );
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) ,
  //     position[1] * Math.pow(2, resolutionLayer) + 3
  //   ],
  //   white
  // );
  //
  // //left root
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) - 1,
  //     position[1] * Math.pow(2, resolutionLayer)
  //   ],
  //   white
  // );
  // drawTopLeftTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) - 1 ,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );
  // drawBottomRightTriangle(
  //   resolutionLayer + 1,
  //   [
  //     position[0] * Math.pow(2, resolutionLayer) - 2 ,
  //     position[1] * Math.pow(2, resolutionLayer) + 1
  //   ],
  //   white
  // );


  // } else {
  //   console.log("drawing a black houndsooth at level " + resolutionLayer + " at [" + position[0] + "," + position[1] + "]");
  // }

// }

function convertActualHoundstoothGridsToNextLayer() {
  actualHoundstoothTopLeftGrid = [];
  actualHoundstoothBottomRightGrid = [];
  res = ORIGINAL_TOP_LEFT_GRID.length;
  times = Math.pow(2, curLayer);
  for (var i = 0; i < times; i++ ) {
    for (var j = 0; j < res; j++ ) {
      actualHoundstoothTopLeftGrid.push([]);
      actualHoundstoothBottomRightGrid.push([]);
      for (var k = 0; k < times; k++ ) {
        actualHoundstoothTopLeftGrid[(i*res)+j] = actualHoundstoothTopLeftGrid[j].concat(ORIGINAL_TOP_LEFT_GRID[j]);
        actualHoundstoothBottomRightGrid[(i*res)+j] = actualHoundstoothBottomRightGrid[j].concat(ORIGINAL_BOTTOM_RIGHT_GRID[j]);
      }
    }
  }
  curLayer++;
}

function wrapIndex(i, i_max) {
   return ((i % i_max) + i_max) % i_max;
}

function numMatches(i,j){ //getCountofWhiteTrisforHoundsToothByItsTriWhichIsItsSquaresTopLeft
  var count = 0;
  var res = topLeftGrid.length;
  // console.log("");
  // console.log([i,j]);
  //square
  if (topLeftGrid[i][j] == actualHoundstoothTopLeftGrid[i][j])                     { count++; }
  // console.log("");
  // console.log(i)
  // console.log(j);;
  // console.log(count);
  if (bottomRightGrid[i][j] == actualHoundstoothBottomRightGrid[i][j])                 { count++; }
  // console.log("");
  // console.log(i);
  // console.log(j);
  // console.log(count);
  if (topLeftGrid[(i+1)%res][j] == actualHoundstoothTopLeftGrid[(i+1)%res][j])     { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log(j);
  // console.log(count);
  if (bottomRightGrid[(i+1)%res][j] == actualHoundstoothBottomRightGrid[(i+1)%res][j]) { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log(j);
  // console.log(count);
  if (topLeftGrid[i][(j+1)%res] == actualHoundstoothTopLeftGrid[i][(j+1)%res])     { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+1)%res);
  // console.log(count);
  if (bottomRightGrid[i][(j+1)%res] == actualHoundstoothBottomRightGrid[i][(j+1)%res]) { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+1)%res);
  // console.log(count);
  if (topLeftGrid[(i+1)%res][(j+1)%res] == actualHoundstoothTopLeftGrid[(i+1)%res][(j+1)%res])     { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log((j+1)%res);
  // console.log(count);
  if (bottomRightGrid[(i+1)%res][(j+1)%res] == actualHoundstoothTopLeftGrid[(i+1)%res][(j+1)%res]) { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log((j+1)%res);
  // console.log(count);

  //top cusp
  if (bottomRightGrid[(i+1)%res][wrapIndex(j-1,res)] == actualHoundstoothBottomRightGrid[(i+1)%res][wrapIndex(j-1,res)])                 { count++; }
  // console.log("top cusp");
  //   console.log((i+1)%res);
  // console.log(wrapIndex(j-1,res));
  // console.log([(i+1)%res,wrapIndex(j-1,res)]);
  // console.log("fractal: " + bottomRightGrid[(i+1)%res][wrapIndex(j-1,res)]);
  // console.log("underly: " + actualHoundstoothBottomRightGrid[(i+1)%res][wrapIndex(j-1,res)]);
  // console.log("new count: " + count);
  //right cusp
  if (topLeftGrid[(i+2)%res][j] == actualHoundstoothTopLeftGrid[(i+2)%res][j])                     { count++; }
  // console.log("right cusp");
  //   console.log((i+2)%res);
  // console.log(j);
  // console.log("new count: " + count);
  //left root
  if (bottomRightGrid[wrapIndex(i-1,res)][j] == actualHoundstoothBottomRightGrid[wrapIndex(i-1,res)][j])                 { count++; }
  // console.log("begin left root");
  // console.log(wrapIndex(i-1,res));
  // console.log(j);
  // console.log("new count: " + count);
  if (topLeftGrid[wrapIndex(i-1,res)][(j+1)%res] == actualHoundstoothTopLeftGrid[wrapIndex(i-1,res)][(j+1)%res])                     { count++; }
  // console.log("");
  // console.log(wrapIndex(i-1,res));
  // console.log((j+1)%res);
  // console.log("new count: " + count);
  if (bottomRightGrid[wrapIndex(i-2,res)][(j+1)%res] == actualHoundstoothBottomRightGrid[wrapIndex(i-2,res)][(j+1)%res])                 { count++; }
  // console.log("");
  //   console.log(wrapIndex(i-2,res));
  // console.log((j+1)%res);
  // console.log("new count: " + count);
  //bottom root
  if (topLeftGrid[(i+1)%res][(j+2)%res] == actualHoundstoothTopLeftGrid[(i+1)%res][(j+2)%res])                     { count++; }
  // console.log("begin bottom root");
  // console.log((i+1)%res);
  // console.log((j+2)%res);
  // console.log("new count: " + count);
  if (bottomRightGrid[i][(j+2)%res] == actualHoundstoothBottomRightGrid[i][(j+2)%res])                 { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+2)%res);
  // console.log("new count: " + count);
  if (topLeftGrid[i][(j+3)%res] == actualHoundstoothTopLeftGrid[i][(j+3)%res]){ count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+3)%res);
  // console.log("new count: " + count);
  //
  // console.log("");
  return count;
}

// function numWhites(i,j){ //getCountofWhiteTrisforHoundsToothByItsTriWhichIsItsSquaresTopLeft
//   var count = 0;
//   var res = topLeftGrid.length;
//
//   //square
//   if (topLeftGrid[i][j])                     { count++; }
//   // console.log("");
//   // console.log(i)
//   // console.log(j);;
//   if (bottomRightGrid[i][j])                 { count++; }
//   // console.log("");
//   // console.log(i);
//   // console.log(j);
//   if (topLeftGrid[(i+1)%res][j])     { count++; }
//   // console.log("");
//   // console.log((i+1)%res);
//   // console.log(j);
//   if (bottomRightGrid[(i+1)%res][j]) { count++; }
//   // console.log("");
//   // console.log((i+1)%res);
//   // console.log(j);
//   if (topLeftGrid[i][(j+1)%res])     { count++; }
//   // console.log("");
//   // console.log(i);
//   // console.log((j+1)%res);
//   if (bottomRightGrid[i][(j+1)%res]) { count++; }
//   // console.log("");
//   // console.log(i);
//   // console.log((j+1)%res);
//   if (topLeftGrid[(i+1)%res][(j+1)%res])     { count++; }
//   // console.log("");
//   // console.log((i+1)%res);
//   // console.log((j+1)%res);
//   if (bottomRightGrid[(i+1)%res][(j+1)%res]) { count++; }
//   // console.log("");
//   // console.log((i+1)%res);
//   // console.log((j+1)%res);
//
//   //top cusp
//   if (bottomRightGrid[(i+1)%res][wrapIndex(j-1,res)])                 { count++; }
//   // console.log("top cusp");
//   //   console.log((i+1)%res);
//   // console.log(wrapIndex(j-1,res));
//   //right cusp
//   if (topLeftGrid[(i+2)%res][j])                     { count++; }
//   // console.log("right cusp");
//   //   console.log((i+2)%res);
//   // console.log(j);
//   //left root
//   if (bottomRightGrid[wrapIndex(i-1,res)][j])                 { count++; }
//   // console.log("begin left root");
//   // console.log(wrapIndex(i-1,res));
//   // console.log(j);
//   if (topLeftGrid[wrapIndex(i-1,res)][(j+1)%res])                     { count++; }
//   // console.log("");
//   // console.log(wrapIndex(i-1,res));
//   // console.log((j+1)%res);
//   if (bottomRightGrid[wrapIndex(i-2,res)][(j+1)%res])                 { count++; }
//   // console.log("");
//   //   console.log(wrapIndex(i-2,res));
//   // console.log((j+1)%res);
//   //bottom root
//   if (topLeftGrid[(i+1)%res][(j+2)%res])                     { count++; }
//   // console.log("begin bottom root");
//   // console.log((i+1)%res);
//   // console.log((j+2)%res);
//   if (bottomRightGrid[i][(j+2)%res])                 { count++; }
//   // console.log("");
//   // console.log(i);
//   // console.log((j+2)%res);
//   if (topLeftGrid[i][(j+3)%res]){ count++; }
//   // console.log("");
//   // console.log(i);
//   // console.log((j+3)%res);
//   //
//   // console.log("");
//   return count;
// }

function convertGridsToNextLayer() {
  prepareNewBlankGrids();
  fillOutNewGrids();
  topLeftGrid = newTopLeftGrid;
  bottomRightGrid = newBottomRightGrid;
}

function prepareNewBlankGrids() {
  newTopLeftGrid = [];
  newBottomRightGrid = [];
  for (var i = 0; i < topLeftGrid.length * 2; i++ ) {
    newTopLeftGrid.push([]);
    newBottomRightGrid.push([]);
    for (var j = 0; j < topLeftGrid[0].length * 2; j++ ) {
      newTopLeftGrid[i].push("");
      newBottomRightGrid[i].push("");
    }
  }
}

function fillOutNewGrids() {
  for (var i = 0; i < topLeftGrid.length; i++ ) {
    for (var j = 0; j < topLeftGrid[0].length; j++ ) {
      convertTopLeftGridCell(i, j);
      convertBottomRightGridCell(i, j);
    }
  }
}

function convertTopLeftGridCell(i, j) {
  newTopLeftGrid[i*2][j*2] = topLeftGrid[i][j];
  newTopLeftGrid[i*2+1][j*2] = topLeftGrid[i][j];
  newTopLeftGrid[i*2][j*2+1] = topLeftGrid[i][j];
  newBottomRightGrid[i*2][j*2] = topLeftGrid[i][j];
}

function convertBottomRightGridCell(i, j) {
  newBottomRightGrid[i*2+1][j*2+1] = bottomRightGrid[i][j];
  newBottomRightGrid[i*2+1][j*2] = bottomRightGrid[i][j];
  newBottomRightGrid[i*2][j*2+1] = bottomRightGrid[i][j];
  newTopLeftGrid[i*2+1][j*2+1] = bottomRightGrid[i][j];
}

function drawBottomRightTriangle(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"
  ctx.strokeStyle = white ? "#fff" : "#000"

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
  ctx.stroke();
}

function drawTopLeftTriangle(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"
  ctx.strokeStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}


// var key = [];

// onkeyup = function(e) {
//   key[e.keyCode] = false;
// }

onkeydown = function(e) {
  if (e.keyCode == 37) { renderActualHoundstooth(); }
  else if (e.keyCode == 39) { renderReality();  }
  else if(e.keyCode == 40) { doSomeFractalMagic(); }
  // key[e.keyCode] = true;
}
//
// function manualControls() {
//   if(key[38]) { rotation -= 0.001 };
//   if(key[40]) { rotation += 0.001 };
//   if(key[37]) {
//     progress[0] -= Math.cos(-rotation);
//     progress[1] -= Math.sin(-rotation);
//   };
//   if(key[39]) {
//     progress[0] += Math.cos(-rotation);
//     progress[1] += Math.sin(-rotation);
//   };
// }
