function drawEntireThing(resLayer, pos, white) {
  drawSquare(resLayer + 1, [2 * pos[0], 2 * pos[1]], white);
  drawSquare(resLayer + 1, [2 * pos[0] + 1, 2 * pos[1] + 1], !white);

  drawMirroredMagicTriangle(resLayer + 1, [2 * pos[0] + 1, 2 * pos[1]], !white, 0);
  drawMirroredMagicTriangle(resLayer + 1, [2 * pos[0], 2 * pos[1] + 1], white, 0);

  // drawMagicTriangle(resLayer + 1, [2 * pos[0] + 1, 2 * pos[1]], white, 0);
  // drawMagicTriangle(resLayer + 1, [2 * pos[0], 2 * pos[1] + 1], !white, 0);

  //outside main view ones
  // drawMagicTriangle(resLayer + 1, [2 * pos[0] - 1, 2 * pos[1]], white, 0);
  // drawMagicTriangle(resLayer + 1, [2 * pos[0], 2 * pos[1] - 1], !white, 0);
};

drawEntireThing(0, [0,0], true);

// mirrorPos([14,15], 3, 1);
