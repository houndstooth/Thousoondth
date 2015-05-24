SQUARE_VERTICES =           [ [1,0], [1,1], [0,1], [0,0] ];
BOTTOM_TRIANGLE_VERTICES =  [ [1,0], [1,1], [0,1]        ];
TOP_TRIANGLE_VERTICES =     [ [1,0],        [0,1], [0,0] ];

function PlainTriangle(resLayer, pos, white, TL) {
  var vertices = TL ? TOP_TRIANGLE_VERTICES : BOTTOM_TRIANGLE_VERTICES;
  Shape(resLayer, pos[0], pos[1], white, vertices);
};

function Square(resLayer, pos, white) {
  Shape(resLayer, pos[0], pos[1], white, SQUARE_VERTICES);
};

function Shape(resLayer, r, c, white, vertices) {
  ctx.fillStyle = white ? "#fff" : "#000"
  var resolution = Math.pow(2, resLayer);
  var unit = WIDTH / resolution;
  ctx.beginPath();
  ctx.moveTo(unit * (r + 1), unit * c);
  for (var i = 1; i < vertices.length; i++ ) {
    ctx.lineTo(unit * (r + vertices[i][0]), unit * (c + vertices[i][1]));
  };
  ctx.closePath();
  ctx.fill();
};
