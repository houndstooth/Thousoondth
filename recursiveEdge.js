CUSP_EDGE_CONSTANTS = [ [2,1], [0,1], [3,0], [5,2] ];
ROOT_EDGE_CONSTANTS = [ [1,2], [1,0], [0,3], [3,4] ];

function RecursiveEdge(resLayer, pos, white, vertical) {
  if (resLayer > RESOLUTION_DEPTH) { return; }
  var pos_constants = vertical ? ROOT_EDGE_CONSTANTS : CUSP_EDGE_CONSTANTS;
  var entireThingPos = [
    Math.pow(2, 2) * pos[0] + pos_constants[0][0],
    Math.pow(2, 2) * pos[1] + pos_constants[0][1]
  ];
  EntireThing(resLayer + 2, entireThingPos, white);
  RecursiveEdge(resLayer + 1, edgePos(pos, pos_constants, 1), white, vertical);
  RecursiveEdge(resLayer + 2, edgePos(pos, pos_constants, 2), white, vertical);
  RecursiveEdge(resLayer + 3, edgePos(pos, pos_constants, 3), white, vertical);
};

function edgePos(pos, pos_constants, i) {
  return [
    Math.pow(2, i) * pos[0] + pos_constants[i][0],
    Math.pow(2, i) * pos[1] + pos_constants[i][1]
  ];
}
