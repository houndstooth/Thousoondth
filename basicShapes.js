SQUARE_VERTICES          =  [ [ 1, 1 ], [ 0, 1 ], [ 0, 0 ] ];
BOTTOM_TRIANGLE_VERTICES =  [ [ 1, 1 ], [ 0, 1 ]           ];
TOP_TRIANGLE_VERTICES    =  [           [ 0, 1 ], [ 0, 0 ] ];

function triangle ( resLayer, pos, white, topLeft ) {
  var vertices = topLeft ? TOP_TRIANGLE_VERTICES : BOTTOM_TRIANGLE_VERTICES;
  drawShape ( resLayer, pos, white, vertices );
};

function square ( resLayer, pos, white ) {
  drawShape ( resLayer, pos, white, SQUARE_VERTICES );
};

function drawShape ( resLayer, pos, white, vertices ) {
  ctx.fillStyle = white ? "#fff" : "#000"
  var res = Math.pow ( 2, resLayer );
  var unit = WIDTH / res;
  ctx.beginPath();
  ctx.moveTo( unit * ( pos[0] + 1 ), unit * pos[1] );
  for (var i = 0; i < vertices.length; i++ ) {
    ctx.lineTo(
      unit * ( pos[0] + vertices[i][0] ),
      unit * ( pos[1] + vertices[i][1] )
    );
  };
  ctx.closePath();
  ctx.fill();
};
