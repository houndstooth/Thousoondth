CUSP_EDGE_CONSTANTS = [ [2,1], [0,1], [3,0], [5,2] ];
ROOT_EDGE_CONSTANTS = [ [1,2], [1,0], [0,3], [3,4] ];

function recursiveEdge(resLayer, pos, white, vertical) {
  if (resLayer > RESOLUTION_DEPTH) { return; }
  var pos_consts = vertical ? ROOT_EDGE_CONSTANTS : CUSP_EDGE_CONSTANTS;
  var superTilePos = [ 4 * pos[0] + pos_consts[0][0], 4 * pos[1] + pos_consts[0][1] ];
  superTile(resLayer + 2, superTilePos, white);
  recursiveEdge(resLayer + 1, edgePos(pos, pos_consts, 1), white, vertical);
  recursiveEdge(resLayer + 2, edgePos(pos, pos_consts, 2), white, vertical);
  recursiveEdge(resLayer + 3, edgePos(pos, pos_consts, 3), white, vertical);
};

function edgePos(pos, pos_consts, i) {
  return [
    Math.pow(2, i) * pos[0] + pos_consts[i][0],
    Math.pow(2, i) * pos[1] + pos_consts[i][1]
  ];
}
