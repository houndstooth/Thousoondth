VERTICAL_CONSTANTS   = [ [ 1, 2 ], [ 1, 0 ], [ 0, 3 ], [ 3, 4 ] ];
HORIZONTAL_CONSTANTS = [ [ 2, 1 ], [ 0, 1 ], [ 3, 0 ], [ 5, 2 ] ];

function magicEdge ( resLayer, pos, white, vertical ) {
  if ( resLayer > RESOLUTION_DEPTH ) { return; }
  var consts = vertical ? VERTICAL_CONSTANTS : HORIZONTAL_CONSTANTS;
  var superTilePos = [ 4 * pos[0] + consts[0][0], 4 * pos[1] + consts[0][1] ];
  superTile ( resLayer + 2, superTilePos, white );
  magicEdge ( resLayer + 1, edgePos ( pos, consts, 1 ), white, vertical );
  magicEdge ( resLayer + 2, edgePos ( pos, consts, 2 ), white, vertical );
  magicEdge ( resLayer + 3, edgePos ( pos, consts, 3 ), white, vertical );
};

function edgePos ( pos, consts, i ) {
  return [
    Math.pow ( 2, i ) * pos[0] + consts[i][0],
    Math.pow ( 2, i ) * pos[1] + consts[i][1]
  ];
};
