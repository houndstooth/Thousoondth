function drawEntireThing(resLayer, pos, white) {
  drawHoundstooth  (resLayer + 1, [pos[0]+.5,pos[1]+.5], !white ); //unfortunate
  drawHoundstooth  (resLayer + 1, pos                  , white  );
};

function drawHoundstooth(resLayer, pos, white) {
  drawSquare       (resLayer, [2 * pos[0]    , 2 * pos[1]    ], white                   );
  drawMagicTriangle(resLayer, [2 * pos[0] + 1, 2 * pos[1]    ], !white, 0, true , true  );
  drawMagicTriangle(resLayer, [2 * pos[0]    , 2 * pos[1] + 1], white , 0, false, true  );
  drawMagicTriangle(resLayer, [2 * pos[0] - 1, 2 * pos[1]    ], white , 0, false, false );
  drawMagicTriangle(resLayer, [2 * pos[0]    , 2 * pos[1] - 1], !white, 0, true , false );
};

drawEntireThing(0, [0,0], true);
drawRecursiveEdge(1, [1,0], true);
//in a perfect world, I would have one call to a recursive edge bigger than the
//canvas, where the canvas's view was centered on its self-similar square
