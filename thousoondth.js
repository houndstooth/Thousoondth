var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 5;

//LEVEL 1
// function drawRecursiveTriangle(resolutionLayer, pos, white) {
//   for (var i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawTriangle(
//       i + resolutionLayer,
//       [
//         (pos[0] + 1) * Math.pow(2, i) - 1 ,
//         (pos[1] + 1) * Math.pow(2, i) - 1
//       ],
//       i % 2 == white ? 0 : 1
//     );
//   }
// }

//LEVEL 2
function drawDoppleRecursiveTriangle(resolutionLayer, pos, white, iteration) {

  //DO I NEED TO DO SOMETHING WITH THE J PASSED IN TO THIS???????!?!?! okay, skip j for now

  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawTriangle(
      i + resolutionLayer,
      [
        (pos[0] + 1) * Math.pow(2, i ) - 1 ,
        (pos[1] + 1) * Math.pow(2, i ) - 1
      ],
      i % 2 == white ? 0 : 1
    );

    if (iteration < RECURSIVE_DEPTH) {
      if (i % 2 == 0 ) {
        drawVerticallyRecursiveEdgeOfTooth(resolutionLayer, pos, white, i, iteration + 1);
      }
      // else {
      //   drawRecursiveTopOfTooth(resolutionLayer, pos, white, i, iteration + 1);
      // }
    }


  }
}

function drawVerticallyRecursiveEdgeOfTooth(resolutionLayer, pos, white, i, iteration) {
  for (var j = 0; j < RECURSIVE_DEPTH; j++) {
    drawDoppleRecursiveTriangle(
      i + resolutionLayer + j + 2,
      [
        (pos[0] + 1) * Math.pow(2, i + 2 + j) - 1 ,
        (pos[1] + Math.pow(2, -1 - j)) * Math.pow(2, i + 2 + j) - 1
      ],
      i % 2 == white ? 1 : 0,
      iteration + 1
    );

    //if (j % 2 == 0 && iteration < RECURSIVE_DEPTH) {
      //drawDoppleRecursiveTriangle(resolutionLayer, pos, white, j, iteration + 1);
    //}

    // if (iteration < RECURSIVE_DEPTH) {
    //   drawRecursiveTopOfTooth(    //NOT AT ALL SURE ABOUT THESE PARAMS!!!!
    //     i + resolutionLayer + j ,
    //     [
    //       (pos[0] + 1) * Math.pow(2, i + j) - 1 ,
    //       (pos[1] + Math.pow(2, -1 - j)) * Math.pow(2, i + j) - 1
    //     ],
    //     i % 2 == white ? 1 : 0
    //   );
    // }

  }
}

//LEVEL 3
function drawRecursiveTopOfTooth(resolutionLayer, pos, white, j, iteration) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawDoppleRecursiveTriangle(
      i + 1 + resolutionLayer ,
      [
        pos[0] * Math.pow(2, i ) + Math.pow(2, i  + 1) + 1,
        pos[1] * Math.pow(2, i  + 1) - 1
      ],
      white,
      iteration + 1
    );
  }
};

//????
function drawRecursiveTopOfToothWithEdgeOfWhiteSpace(resolutionLayer, pos, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawDoppleRecursiveTriangle(
      i + 1 + resolutionLayer,
      [
        pos[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        pos[1] * Math.pow(2, i + 1) - 1
      ],
      white,
      0,
      0
    );
    drawTriangle(
      i + 1 + resolutionLayer,
      [
        pos[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        pos[1] * Math.pow(2, i + 1) - 2
      ],
      !white
    );
    drawSquare(
      i + 1 + resolutionLayer,
      [
        pos[0] * Math.pow(2, i) + Math.pow(2, i + 1) ,
        pos[1] * Math.pow(2, i + 1) - 2
      ],
      white
    )
  }
};

//NOT YET FINISHED IMPLEMENTING
// function drawDoppleRecursiveTopOfTooth(resolutionLayer, pos, white) {
//   for (var i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawRecursiveTopOfTooth(
//       i + 1 + resolutionLayer,
//       [
//         pos[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
//         pos[1] * Math.pow(2, i + 1) - 1
//       ],
//       white
//     );
//   }
// };
