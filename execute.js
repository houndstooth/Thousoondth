//initial black canvas
drawSquare(0, [0, 0], false);

//white rabbit object.
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
    drawTriangle(
      (i / 2) + 2,
      [
        1,
        Math.pow(2, (i / 2) + 2) - 4
      ],
      true
    );
    drawRecursiveTopOfToothWithEdgeOfWhiteSpace(
      (i / 2) + 1,
      [
        0,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      true
    );
    drawRecursiveTopOfToothWithEdgeOfWhiteSpace(
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
    // drawTriangle(
    //   Math.floor(i / 2) + 2,
    //   [
    //     1,
    //     Math.pow(2, Math.floor(i / 2) + 2) - 3
    //   ],
    //   false
    // );
    drawRecursiveTopOfTooth(
      Math.floor(i / 2) + 2,
      [
        2,
        Math.pow(2, Math.floor(i / 2) + 2) - 3
      ],
      false
    );
  }
}

// do a "wrap around" over the edges so see if you can get recursive formula to
//   capture this stuff on the left and bottom edges too?
drawRecursiveTopOfTooth(
  1,
  [
    0,
    2
  ],
  true
);
