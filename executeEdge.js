function doWholeThing(resLayer, pos, white) {
  for (var i = 0; i < SHRINKING_DEPTH; i++ ) {
    if (i % 2 == 0) {
      drawSquare(
        (i / 2) + 1 + resLayer,
        [
          1,
          Math.pow(2, (i / 2) + 1 + resLayer) - 2
        ],
        !white
      );
      drawSquare(
        (i / 2) + 1 + resLayer,
        [
          0,
          Math.pow(2, (i / 2) + 1 + resLayer) - 2
        ],
        white
      );
      drawPlainTriangle(
        (i / 2) + 1 + resLayer,
        [
          0,
          Math.pow(2, (i / 2) + 1 + resLayer) - 2
        ],
        !white
      );
    } else {
      drawSquare(
        Math.floor(i / 2) + 2 + resLayer,
        [
          2,
          Math.pow(2, Math.floor(i / 2) + 2 + resLayer) - 3
        ],
        white
      );
      drawHorizontalJaggies(
        Math.floor(i / 2) + 2 + resLayer,
        [
          2,
          Math.pow(2, Math.floor(i / 2) + 2 + resLayer) - 4 //ughh... for some reason this has to be different than the square it attaches to... but it works w/ the recursive back and forth...
        ],
        white,
        0,
        0
      );
      drawPlainTriangle(
        Math.floor(i / 2) + 2 + resLayer,
        [
          1,
          Math.pow(2, Math.floor(i / 2) + 2 + resLayer) - 3
        ],
        white
      );
      drawHorizontalJaggies(
        Math.floor(i / 2) + 2 + resLayer,
        [
          1,
          Math.pow(2, Math.floor(i / 2) + 2 + resLayer) - 3
        ],
        !white,
        0,
        0
      );
      drawHorizontalJaggies(
        Math.floor(i / 2) + 2,
        [
          0,
          Math.pow(2, Math.floor(i / 2) + 2 + resLayer) - 3
        ],
        white,
        0,
        0
      );
    }
  }
}

doWholeThing(2, [0,0], false);
//so... scaling resLayer here is just putting it smaller and smaller
// weirdly in the BOTTOM LEFT corner... but intact!

// drawHorizontalJaggies(
//   1,
//   [
//     1,
//     1
//   ],
//   true,
//   0,
//   0
// );

// drawPlainTriangleUnmirrored(
//   0,
//   [
//     0,
//     0
//   ],
//   true
// )
