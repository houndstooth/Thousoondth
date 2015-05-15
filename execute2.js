for (var i = 0; i < RECURSIVE_DEPTH; i++ ) {
  if (i % 2 == 0) {
    drawSquare(
      (i / 2) + 1,
      [
        1,
        Math.pow(2, (i / 2) + 1) - 2
      ],
      true
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
    drawHorizontalJaggies(
      Math.floor(i / 2) + 2,
      [
        2,
        Math.pow(2, Math.floor(i / 2) + 2) - 4 //ughh... for some reason this has to be different than the square it attaches to... but it works w/ the recursive back and forth...
      ],
      false,
      0,
      0
    );
  }
}
