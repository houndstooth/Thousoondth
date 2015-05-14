var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 1;

var topLeftGrid = [
  [ false, true,  true,  true  ],
  [ true,  false, true,  true  ],
  [ false, false, true,  false ],
  [ false, false, false, true  ]
];

var bottomRightGrid = [
  [ true,  false, true,  true ],
  [ false, true,  true,  true ],
  [ false, false, false, true  ],
  [ false, false, true,  false ]
];

var newTopLeftGrid, newBottomRightGrid;


// EXECUTE

convertGridsToNextLayer();

for (var i = 0; i < topLeftGrid.length; i++ ) {
  for (var j = 0; j < topLeftGrid[0].length; j++ ) {
    drawTopLeftTriangle(Math.ceil(Math.sqrt(topLeftGrid.length)), [i, j], topLeftGrid[i][j])
    drawBottomRightTriangle(Math.ceil(Math.sqrt(topLeftGrid.length)), [i, j], bottomRightGrid[i][j])
  }
}



// FUNCTIONS

//getCountofWhiteTrisforHoundsToothByItsTriWhichIsItsSquaresTopLeft

function wrapIndex(i, i_max) {
   return ((i % i_max) + i_max) % i_max;
}

function bob(i,j){
  var count = 0;
  var res = topLeftGrid.length;

  //square
  if (topLeftGrid[i][j])                     { count++; }
  // console.log("");
  // console.log(i)
  // console.log(j);;
  if (bottomRightGrid[i][j])                 { count++; }
  // console.log("");
  // console.log(i);
  // console.log(j);
  if (topLeftGrid[(i+1)%res][j])     { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log(j);
  if (bottomRightGrid[(i+1)%res][j]) { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log(j);
  if (topLeftGrid[i][(j+1)%res])     { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+1)%res);
  if (bottomRightGrid[i][(j+1)%res]) { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+1)%res);
  if (topLeftGrid[(i+1)%res][(j+1)%res])     { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log((j+1)%res);
  if (bottomRightGrid[(i+1)%res][(j+1)%res]) { count++; }
  // console.log("");
  // console.log((i+1)%res);
  // console.log((j+1)%res);

  //top cusp
  if (bottomRightGrid[(i+1)%res][wrapIndex(j-1,res)])                 { count++; }
  // console.log("top cusp");
  //   console.log((i+1)%res);
  // console.log(wrapIndex(j-1,res));
  //right cusp
  if (topLeftGrid[(i+2)%res][j])                     { count++; }
  // console.log("right cusp");
  //   console.log((i+2)%res);
  // console.log(j);
  //left root
  if (bottomRightGrid[wrapIndex(i-1,res)][j])                 { count++; }
  // console.log("begin left root");
  // console.log(wrapIndex(i-1,res));
  // console.log(j);
  if (topLeftGrid[wrapIndex(i-1,res)][(j+1)%res])                     { count++; }
  // console.log("");
  // console.log(wrapIndex(i-1,res));
  // console.log((j+1)%res);
  if (bottomRightGrid[wrapIndex(i-2,res)][(j+1)%res])                 { count++; }
  // console.log("");
  //   console.log(wrapIndex(i-2,res));
  // console.log((j+1)%res);
  //bottom root
  if (topLeftGrid[(i+1)%res][(j+2)%res])                     { count++; }
  // console.log("begin bottom root");
  // console.log((i+1)%res);
  // console.log((j+2)%res);
  if (bottomRightGrid[i][(j+2)%res])                 { count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+2)%res);
  if (topLeftGrid[i][(j+3)%res]){ count++; }
  // console.log("");
  // console.log(i);
  // console.log((j+3)%res);
  //
  // console.log("");
  return count;
}

for (var i = 0; i < topLeftGrid.length; i = i + 2 ) {
  for (var j = 0; j < topLeftGrid[0].length; j = j + 2 ) {
    console.log("[i: " + i + ", j: " + j + "] = " + bob(i,j));
    if (bob(i,j) < 8) {
      ///.....so i actually have to create a houndstooth pattern for each layer, and
      ///also not coutn the white tris, but coutn the MATCHES between it and that...
    }
  }
}

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

}

function drawTopLeftTriangle(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

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
}
