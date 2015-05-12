// do a "mirror image" across the main diagonal function for elegant simplicity
// do a "wrap around" over the edges so see if you can get recursive formula to
//    capture the stuff on the left and bottom edge using the same stuff for the middle
// be careful when you're going back and forth between scaling down to the left and
//    down to the up that you don't create an infinite loop... perhaps best to have it
//    inside a for loop that alternates like the others do... esp since it itself
//    alternates between whether it iterates or doesn't


var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');

WIDTH = 800;
HEIGHT = WIDTH;

canvas.width = WIDTH;
canvas.height = HEIGHT;

RECURSIVE_DEPTH = 25;

ctx.lineWidth = 1;

//black canvas
drawSquare(0, [0, 0], false);

//recursive draw central diagonal squares
// drawSquare(1, [1, 0], true); //i = 0
// drawSquare(2, [2, 1], false); //i = 1
//
// drawSquare(2, [1, 2], true); //i = 2
// drawSquare(3, [2, 5], false); //i = 3
//
// drawSquare(3, [1, 6], true); //i = 4
// drawSquare(4, [2, 13], false); //i = 5
//
// drawSquare(4, [1, 14], true); //i = 6
// drawSquare(5, [2, 29], false); //i = 7

for (var i = 0; i < RECURSIVE_DEPTH; i++) {
  if (i % 2 == 0) {
    drawSquare(
      (i / 2) + 1,
      [
        1,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      true
    );
    drawBottomRightTriangle(
      (i / 2) + 1,
      [
        0,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      true
    );
    drawRecursiveTopOfTooth(
      (i / 2) + 1,
      [
        0,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      true
    );
    drawRecursiveTopOfTooth(
      (i / 2) + 1,
      [
        -2,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      false
    );
  } else {
    drawSquare(
      Math.floor(i / 2) + 2,
      [
        2,
        Math.pow(2, Math.floor(i / 2) + 2) - 3
      ],
      false
    );
    drawBottomRightTriangle(
      Math.floor(i / 2) + 2,
      [
        1,
        Math.pow(2, Math.floor(i / 2) + 2) - 3
      ],
      false
    );
    drawRecursiveTopOfTooth(
      Math.floor(i / 2) + 2,
      [
        2,
        Math.pow(2, Math.floor(i / 2) + 2) - 3
      ],
      false
    );

    // console.log("drawing recursive top of tooth");
    // console.log("at resolution " + (Math.floor(i / 2) + 2));
    // console.log("and x: " + 2);
    // console.log("and y: " + (Math.pow(2, Math.floor(i / 2) + 2) - 3));
  }
}

// drawBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTriangle(2, [1, 1], false);
// drawBottomRightTriangle(3, [3, 3], true);
// drawBottomRightTriangle(4, [7, 7], false);
// drawBottomRightTriangle(5, [15, 15], true);

// for (i = 0; i < RECURSIVE_DEPTH; i++) {
//   drawBottomRightTriangle(i + 1, [Math.pow(2, i) - 1, Math.pow(2, i) - 1], i % 2 == 0)
// }

// function drawRecursiveBottomRightTriangle(resolutionLayer, position, white) {
//   for (i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawBottomRightTriangle(i + resolutionLayer,
//       [Math.pow(2, i - 1) - 1, Math.pow(2, i - 1) - 1],
//       i % 2 == white ? 0 : 1)
//   }
// }

// function mirrorImage(fn, resolutionLayer, position, white) {
//   console.log(fn);
//   position =
//   fn(resolutionLayer, position, white);
// }

// function mirrored(position) {
//   return Math.pow(2, resolutionLayer) - position;
// }

function drawRecursiveBottomRightTriangle(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawBottomRightTriangle(
      i + resolutionLayer,
      [
        (position[0] + 1) * Math.pow(2, i) - 1 ,
        (position[1] + 1) * Math.pow(2, i) - 1
      ],
      i % 2 == white ? 0 : 1
    );
  }
}

function drawDoppleRecursiveBottomRightTriangle(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    drawBottomRightTriangle(
      i + resolutionLayer,
      [
        (position[0] + 1) * Math.pow(2, i) - 1 ,
        (position[1] + 1) * Math.pow(2, i) - 1
      ],
      i % 2 == white ? 0 : 1
    );

    if (i % 2 == 0) {
      drawRecursiveBottomRightTriangle(
        i + resolutionLayer + 2,
        [
          (position[0] + 1) * Math.pow(2, i + 2) - 1 ,
          (position[1] + .5) * Math.pow(2, i + 2) - 1
        ],
        i % 2 == white ? 1 : 0
      );
      drawRecursiveBottomRightTriangle(
        i + resolutionLayer + 3,
        [
          (position[0] + 1) * Math.pow(2, i + 3) - 1 ,
          (position[1] + .25) * Math.pow(2, i + 3) - 1
        ],
        i % 2 == white ? 1 : 0
      );
      drawRecursiveBottomRightTriangle(
        i + resolutionLayer + 4,
        [
          (position[0] + 1) * Math.pow(2, i + 4) - 1 ,
          (position[1] + .125) * Math.pow(2, i + 4) - 1
        ],
        i % 2 == white ? 1 : 0
      );
      drawRecursiveBottomRightTriangle(
        i + resolutionLayer + 5,
        [
          (position[0] + 1) * Math.pow(2, i + 5) - 1 ,
          (position[1] + .0625) * Math.pow(2, i + 5) - 1
        ],
        i % 2 == white ? 1 : 0
      );


      // for (var j = 0; j < RECURSIVE_DEPTH; j++) {
      //   drawBottomRightTriangle(
      //     i + resolutionLayer + 1 + j,
      //     [
      //       (position[0] + 1 - Math.pow(2, j)) * Math.pow(2, i) - 1 ,
      //       (position[1] + 1) * Math.pow(2, i) - 1
      //     ],
      //     i % 2 == white ? 0 : 1
      //   );
      // }
    }
  }

}



// function drawBottomRightTrapezoid(resolutionLayer, position, white) {
//   for (var i = 0; i < 2; i++) {
//     drawBottomRightTriangle(
//       i + resolutionLayer,
//       [
//         (position[0] + 1) * Math.pow(2, i) - 1 ,
//         (position[1] + 1) * Math.pow(2, i) - 1
//       ],
//       i % 2 == white ? 0 : 1
//     );
//   }
// }

//drawRecursiveBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTrapezoid(1, [0, 0], true);


//THIS WAS FOR A SQUARE OF (2, [2, 1], false)
// drawRecursiveBottomRightTriangle(3, [5, 1], false);
// drawRecursiveBottomRightTriangle(4, [9, 3], false);
// drawRecursiveBottomRightTriangle(5, [17, 7], false);
// drawRecursiveBottomRightTriangle(6, [33, 15], false);

// for (var i = 0; i < RECURSIVE_DEPTH; i++) {
//   drawRecursiveBottomRightTriangle(
//     i + 3,
//     [
//       Math.pow(2, i + 2) + 1,
//       Math.pow(2, i + 1) - 1
//     ],
//     false
//   );
// }

function drawRecursiveTopOfTooth(resolutionLayer, position, white) {
  for (var i = 0; i < RECURSIVE_DEPTH; i++) {
    //drawRecursiveBottomRightTriangle(
    drawDoppleRecursiveBottomRightTriangle(
      i + 1 + resolutionLayer,
      [
        position[0] * Math.pow(2, i) + Math.pow(2, i + 1) + 1,
        position[1] * Math.pow(2, i + 1) - 1
      ],
      white
    );
  }

};


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


//   for (i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawRecursiveBottomRightTriangle(
//       resolutionLayer + i + 1,
//       [
//         resolutionLayer * position[0] + 1,
//         resolutionLayer * position[0] - 1,
//       ],
//       white);
//   }




function drawTopLeftTriangle(resolutionLayer, position, white, drawMirror) {
  drawMirror = typeof drawMirror !== 'undefined' ? drawMirror : true;
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;
  // console.log(resolution);
  // console.log(unit);
  // console.log(topLeftX);
  // console.log(topLeftY);

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  //ctx.lineTo(topLeftX + unit, topLeftY + unit ); skip bottom right corner
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
  if (drawMirror) {
    var mirroredPosition = [];
    mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
    mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
    drawBottomRightTriangle(resolutionLayer, mirroredPosition, white, false);
  }


}

function drawBottomRightTriangle(resolutionLayer, position, white, drawMirror) {
  drawMirror = typeof drawMirror !== 'undefined' ? drawMirror : true;
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;
  // console.log(resolution);
  // console.log(unit);
  // console.log(topLeftX);
  // console.log(topLeftY);

  ctx.beginPath();
  //ctx.moveTo(topLeftX,        topLeftY        ); //start at top right corner
  ctx.moveTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit ); //skip bottom right corner
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
  // mirrorImage(drawTopLeftTriangle, resolutionLayer, position, white);
  if (drawMirror) {
    var mirroredPosition = [];
    mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
    mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
    drawTopLeftTriangle(resolutionLayer, mirroredPosition, white, false);
  }
}

function drawSquare(resolutionLayer, position, white) {
  ctx.fillStyle = white ? "#fff" : "#000"

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;
  // console.log(resolution);
  // console.log(unit);
  // console.log(topLeftX);
  // console.log(topLeftY);

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.closePath();
  ctx.fill();
}



drawRecursiveTopOfTooth(
  1,
  [
    0,
    2
  ],
  true
);
