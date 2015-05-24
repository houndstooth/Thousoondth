var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = 800;
HEIGHT = WIDTH;
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 1;

RECURSIVE_DEPTH = 1;

function drawHoundstooth(resLayer, pos, white, iteration) {

  // set color for main triangles

  ctx.fillStyle = white ? "#fff" : "#000"

  // "original" version in the top left half of the screen

  var resolution = Math.pow(2, resLayer);
  var unit = WIDTH / resolution;
  var topLeftX = pos[0] * unit;
  var topLeftY = pos[1] * unit;

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
    var newpos = [
      pos[0] * 4,
      pos[1] * 4
    ];

    // console.log(newpos);

    //RELATIVE TO [8, 4]

    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] + 3,
        newpos[1] - 1
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] + 4,
        newpos[1] - 2
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] - 3,
        newpos[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] - 4,
        newpos[1] + 4
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] + 1,
        newpos[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] ,
        newpos[1] + 4
      ],
      !white,
      iteration + 1
    );

    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] + 3,
        newpos[1] + 3
      ],
      white,
      iteration + 1
    );
    drawHoundstooth(
      resLayer + 2,
      [
        newpos[0] + 4,
        newpos[1] + 2
      ],
      !white,
      iteration + 1
    );


    // drawHoundstooth(resLayer + 2, [11, 3], white, iteration + 1);
    // drawHoundstooth(resLayer + 2, [12, 2], !white, iteration + 1);

    // drawHoundstooth(resLayer + 2, [5, 7], white, iteration + 1);
    // drawHoundstooth(resLayer + 2, [4, 8], !white, iteration + 1);

    // drawHoundstooth(resLayer + 2, [9, 7], white, iteration + 1);
    // drawHoundstooth(resLayer + 2, [8, 8], !white, iteration + 1);

    // drawHoundstooth(resLayer + 2, [11, 7], white, iteration + 1);
    // drawHoundstooth(resLayer + 2, [12, 6], !white, iteration + 1);
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




















// drawHoundstooth(resLayer + 2,
//   [ ( pos[0] + 1 ) * Math.pow(2, resLayer) - 1,
//     pos[1] * Math.pow(2, resLayer) - 1 ],
//   white, iteration + 1);
// drawHoundstooth(resLayer + 2,
//   [ pos[0] * Math.pow(2, resLayer) + 4,
//     pos[1] * Math.pow(2, resLayer) - 2 ],
//   !white, iteration + 1);
