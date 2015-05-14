var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 1;

function drawHoundstooth(resolutionLayer, position, white, iteration) {

  // set color for main triangles

  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resolutionLayer);
  var unit = WIDTH / resolution;
  var topLeftX = position[0] * unit;
  var topLeftY = position[1] * unit;

  ctx.beginPath();
  ctx.moveTo(topLeftX,        topLeftY        );
  ctx.lineTo(topLeftX + unit/2, topLeftY);
  ctx.lineTo(topLeftX + unit, topLeftY - unit/2);
  ctx.lineTo(topLeftX + unit, topLeftY        );
  ctx.lineTo(topLeftX + 3 * unit/2, topLeftY);
  ctx.lineTo(topLeftX + unit, topLeftY + unit/2);
  ctx.lineTo(topLeftX + unit, topLeftY + unit );
  ctx.lineTo(topLeftX, topLeftY + 2 * unit);
  ctx.lineTo(topLeftX, topLeftY + 3 * unit/2);
  ctx.lineTo(topLeftX + unit/2, topLeftY + unit);
  ctx.lineTo(topLeftX,        topLeftY + unit );
  ctx.lineTo(topLeftX,        topLeftY + unit/2 );
  ctx.lineTo(topLeftX - unit/2, topLeftY + unit);
  ctx.lineTo(topLeftX - unit, topLeftY + unit);
  ctx.closePath();
  ctx.fill();

  // console.log(iteration);

  if (iteration < RECURSIVE_DEPTH) {
    var newPosition = [
      position[0] * 4,
      position[1] * 4
    ];

    // console.log(newPosition);

    //RELATIVE TO [8, 4]

    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] + 3,
        newPosition[1] - 1
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] + 4,
        newPosition[1] - 2
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] - 3,
        newPosition[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] - 4,
        newPosition[1] + 4
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] + 1,
        newPosition[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] ,
        newPosition[1] + 4
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] + 3,
        newPosition[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resolutionLayer + 2,
      [
        newPosition[0] + 4,
        newPosition[1] + 2
      ],
      !white,
      iteration + 1
    );


    // drawHoundstooth(resolutionLayer + 2, [11, 3], white, iteration + 1);
    // drawHoundstooth(resolutionLayer + 2, [12, 2], !white, iteration + 1);

    // drawHoundstooth(resolutionLayer + 2, [5, 7], white, iteration + 1);
    // drawHoundstooth(resolutionLayer + 2, [4, 8], !white, iteration + 1);

    // drawHoundstooth(resolutionLayer + 2, [9, 7], white, iteration + 1);
    // drawHoundstooth(resolutionLayer + 2, [8, 8], !white, iteration + 1);

    // drawHoundstooth(resolutionLayer + 2, [11, 7], white, iteration + 1);
    // drawHoundstooth(resolutionLayer + 2, [12, 6], !white, iteration + 1);
  }
};

drawHoundstooth(2, [2, 1], false, 0);

// drawHoundstooth(4, [8, 4], false, 0);
//
// drawHoundstooth(6, [32, 16], false, 0);


// drawHoundstooth(4, [11, 3], false);
// drawHoundstooth(4, [12, 2], true);
//
// drawHoundstooth(4, [5, 7], false);
// drawHoundstooth(4, [4, 8], true);
//
// drawHoundstooth(4, [9, 7], false);
// drawHoundstooth(4, [8, 8], true);
//
// drawHoundstooth(4, [11, 7], false);
// drawHoundstooth(4, [12, 6], true);






















// drawHoundstooth(4, [9, 5], false);
// drawHoundstooth(4, [8, 4], true);

// drawHoundstooth(4, [7, 5], false);
// drawHoundstooth(4, [6, 6], true);



// drawHoundstooth(5, [15, 8], false);
// drawHoundstooth(5, [14, 9], true);
// drawHoundstooth(5, [13, 10], false);
// drawHoundstooth(5, [12, 11], true);
// drawHoundstooth(5, [11, 12], false);
// drawHoundstooth(5, [10, 13], true);
// drawHoundstooth(5, [9, 14], false);
// drawHoundstooth(5, [8, 15], true);




















// drawHoundstooth(resolutionLayer + 2,
//   [ ( position[0] + 1 ) * Math.pow(2, resolutionLayer) - 1,
//     position[1] * Math.pow(2, resolutionLayer) - 1 ],
//   white, iteration + 1);
// drawHoundstooth(resolutionLayer + 2,
//   [ position[0] * Math.pow(2, resolutionLayer) + 4,
//     position[1] * Math.pow(2, resolutionLayer) - 2 ],
//   !white, iteration + 1);
