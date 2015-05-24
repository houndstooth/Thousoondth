TOP_LEFT_CONSTANTS     = [ [-2, 0], [0, -2] ];
BOTTOM_RIGHT_CONSTANTS = [ [-1, 1], [1, -1] ];

function magicTriangle ( resLayer, pos, white, topLeft, vertical, withEdge ) {
  triangle ( resLayer, pos, white,  topLeft );
  if ( withEdge ) {
    magicEdge ( resLayer, pos, ( topLeft ? !white : white ), vertical, false );
  }
  jaggies  ( resLayer, pos, !white, topLeft, vertical );
};

function jaggies       ( resLayer, pos, white, topLeft, vertical           ) {
  var offset_constants = topLeft  ? TOP_LEFT_CONSTANTS : BOTTOM_RIGHT_CONSTANTS;
  var idx              = vertical ? 0 : 1
  var i = c = r = 0;
  while ( true ) {
    var thisResLayer = resLayer + i + 1;
    if ( thisResLayer > RESOLUTION_DEPTH ) { return; }
    var depthScalar = Math.pow ( 2, i + 1 );
    c = ( pos[0] + 1 - idx ) * depthScalar + offset_constants[idx][0];
    r = ( pos[1] + 0 + idx ) * depthScalar + offset_constants[idx][1];
    magicTriangle ( thisResLayer, [ c, r ], white, topLeft, !vertical, true );
    i++;
  };
};
