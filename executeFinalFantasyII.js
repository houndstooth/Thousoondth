function drawEntireThing(resolutionLayer, pos, white) {
  drawSquare(resolutionLayer + 1, [2 * pos[0], 2 * pos[1]], white);
  drawSquare(resolutionLayer + 1, [2 * pos[0] + 1, 2 * pos[1] + 1], !white);

  drawMirroredMagicTriangle(resolutionLayer + 1, [2 * pos[0] + 1, 2 * pos[1]], !white, 0);
  drawMirroredMagicTriangle(resolutionLayer + 1, [2 * pos[0], 2 * pos[1] + 1], white, 0);

  // drawMagicTriangle(resolutionLayer + 1, [2 * pos[0] + 1, 2 * pos[1]], white, 0);
  // drawMagicTriangle(resolutionLayer + 1, [2 * pos[0], 2 * pos[1] + 1], !white, 0);

  //outside main view ones
  // drawMagicTriangle(resolutionLayer + 1, [2 * pos[0] - 1, 2 * pos[1]], white, 0);
  // drawMagicTriangle(resolutionLayer + 1, [2 * pos[0], 2 * pos[1] - 1], !white, 0);
};

drawEntireThing(0, [0,0], true);

// mirrorPos([14,15], 3, 1);
