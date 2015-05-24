var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RESOLUTION_DEPTH = 12;

function superTile   (resLayer, pos, white) {
  houndstooth  (resLayer + 1, [ pos[0] + .5, pos[1] + .5], !white );
  houndstooth  (resLayer + 1, pos                        , white  );
};

function houndstooth (resLayer, pos, white) {
  square        (resLayer, [ 2 * pos[0]    , 2 * pos[1]     ], white                       );
  magicTriangle (resLayer, [ 2 * pos[0] + 1, 2 * pos[1]     ], !white, true,  false, false );
  magicTriangle (resLayer, [ 2 * pos[0]    , 2 * pos[1] + 1 ], white , true,  false, true  );
  magicTriangle (resLayer, [ 2 * pos[0] - 1, 2 * pos[1]     ], white , false, false, true  );
  magicTriangle (resLayer, [ 2 * pos[0]    , 2 * pos[1] - 1 ], !white, false, false, false );
};

superTile (0, [ 0, 0 ], true);
magicEdge (1, [ 1, 0 ], true);
