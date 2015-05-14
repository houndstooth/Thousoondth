var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 15;

//LEVEL 1
function drawRecursiveTriangle(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawTriangle(
      i + resolutionLayer,
      [
        (position[0] + 1) * Math.pow(2, i) - 1 ,
        (position[1] + 1) * Math.pow(2, i) - 1
      ],
      i % 2 == white ? 0 : 1
    );
  }
}

//LEVEL 2
function drawDoppleRecursiveTriangle(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawTriangle(
      i + resolutionLayer,
      [
        (position[0] + 1) * Math.pow(2, i) - 1 ,
        (position[1] + 1) * Math.pow(2, i) - 1
      ],
      i % 2 == white ? 0 : 1
    );

    if (i % 2 == 0) {
      for (var j = 0; j < RECURSIVE_DEPTH; j++) {
        drawRecursiveTriangle(
          i + resolutionLayer + j + 2,
          [
            (position[0] + 1) * Math.pow(2, i + 2 + j) - 1 ,
            (position[1] + Math.pow(2, -1 - j)) * Math.pow(2, i + 2 + j) - 1
          ],
          i % 2 == white ? 1 : 0
        );
      }
    }
  }
}

//LEVEL 3
function drawRecursiveTopOfTooth(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawDoppleRecursiveTriangle(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        position[1] * Math.pow(2, i + 1) - 1
      ],
      white
    );
  }
};

//????
function drawRecursiveTopOfToothWithEdgeOfWhiteSpace(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawDoppleRecursiveTriangle(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        position[1] * Math.pow(2, i + 1) - 1
      ],
      white
    );
    drawTriangle(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        position[1] * Math.pow(2, i + 1) - 2
      ],
      !white
    );
    drawSquare(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) ,
        position[1] * Math.pow(2, i + 1) - 2
      ],
      white
    )
  }
};

//NOT YET FINISHED IMPLEMENTING
function drawDoppleRecursiveTopOfTooth(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawRecursiveTopOfTooth(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        position[1] * Math.pow(2, i + 1) - 1
      ],
      white
    );
  }
};
