var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RESOLUTION_DEPTH = 7;

TL_CONSTANTS = [ -2,  0,  0, -2]
BR_CONSTANTS = [ -1,  1,  1, -1]

function MagicTriangle(resLayer, pos, white, recursiveStep, woEdge, TL) {
  var vertical = recursiveStep % 2 == 1 ? true : false;
  PlainTriangle(resLayer, pos, white, TL);
  if (!woEdge) { RecursiveEdge(resLayer, pos, (TL ? !white : white), vertical, false); }
  Jaggies(resLayer, pos, !white, recursiveStep + 1, vertical, TL);
};

function Jaggies(resLayer, pos, white, recursiveStep, vertical, TL) {
  var offset_constants = TL ? TL_CONSTANTS : BR_CONSTANTS;
  var i = 0;
  while (true) {
    var thisResLayer = resLayer + i + 1;
    if (thisResLayer > RESOLUTION_DEPTH ) { return; }
    if (vertical) {
      var c = (pos[0] + 1) * Math.pow(2, i + 1) + offset_constants[0];
      var r = (pos[1] + 0) * Math.pow(2, i + 1) + offset_constants[1];
    } else {
      var c = (pos[0] - 0) * Math.pow(2, i + 1) + offset_constants[2];
      var r = (pos[1] + 1) * Math.pow(2, i + 1) + offset_constants[3];
    }
    MagicTriangle(thisResLayer, [c,r], white, recursiveStep, false, TL);
    i++;
  };
};
