function EntireThing(resLayer, pos, white) {
  Houndstooth  (resLayer + 1, [pos[0]+.5,pos[1]+.5], !white ); //unfortunate
  Houndstooth  (resLayer + 1, pos                  , white  );
};

function Houndstooth(resLayer, pos, white) {
  Square       (resLayer, [2 * pos[0]    , 2 * pos[1]    ], white                   );
  MagicTriangle(resLayer, [2 * pos[0] + 1, 2 * pos[1]    ], !white, 0, true , true  );
  MagicTriangle(resLayer, [2 * pos[0]    , 2 * pos[1] + 1], white , 0, false, true  );
  MagicTriangle(resLayer, [2 * pos[0] - 1, 2 * pos[1]    ], white , 0, false, false );
  MagicTriangle(resLayer, [2 * pos[0]    , 2 * pos[1] - 1], !white, 0, true , false );
};

EntireThing(0, [0,0], true);
RecursiveEdge(1, [1,0], true);
//in a perfect world, I would have one call to a recursive edge bigger than the
//canvas, where the canvas's view was centered on its self-similar square
