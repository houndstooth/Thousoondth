var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RESOLUTION_DEPTH = 7;

TOP_LEFT_CONSTANTS     = [ -2,  0,  0, -2 ];
BOTTOM_RIGHT_CONSTANTS = [ -1,  1,  1, -1 ];

function magicTriangle ( resLayer, pos, white, topLeft, vertical, withEdge ) {
  triangle ( resLayer, pos, white,  topLeft );
  if ( withEdge ) {
    recursiveEdge( resLayer, pos, ( topLeft ? !white : white ), vertical, false );
  }
  jaggies  ( resLayer, pos, !white, topLeft, vertical );
};

function jaggies       ( resLayer, pos, white, topLeft, vertical           ) {
  var offset_constants = topLeft ? TOP_LEFT_CONSTANTS : BOTTOM_RIGHT_CONSTANTS;
  var i = c = r = 0;
  while ( true ) {
    var thisResLayer = resLayer + i + 1;
    if ( thisResLayer > RESOLUTION_DEPTH ) { return; }
    if ( vertical ) {
      c = ( pos[0] + 1 ) * Math.pow( 2, i + 1 ) + offset_constants[0];
      r = ( pos[1] + 0 ) * Math.pow( 2, i + 1 ) + offset_constants[1];
    } else {
      c = ( pos[0] - 0 ) * Math.pow( 2, i + 1 ) + offset_constants[2];
      r = ( pos[1] + 1 ) * Math.pow( 2, i + 1 ) + offset_constants[3];
    }
    magicTriangle ( thisResLayer, [c,r], white, topLeft, !vertical, true );
    i++;
  };
};
