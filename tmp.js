// scratchpad for coming up with formula for main recursive squares
//
// drawSquare(1, [1, 0], true); //i = 0
// drawSquare(2, [2, 1], false); //i = 1
//
// drawSquare(2, [1, 2], true); //i = 2
// drawSquare(3, [2, 5], false); //i = 3
//
// drawSquare(3, [1, 6], true); //i = 4
// drawSquare(4, [2, 13], false); //i = 5
//
// drawSquare(4, [1, 14], true); //i = 6
// drawSquare(5, [2, 29], false); //i = 7

// scratchpad for coming up with final formula for main recursive roots
//
// drawBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTriangle(2, [1, 1], false);
// drawBottomRightTriangle(3, [3, 3], true);
// drawBottomRightTriangle(4, [7, 7], false);
// drawBottomRightTriangle(5, [15, 15], true);
//
// for (i = 0; i < RECURSIVE_DEPTH; i++) {
//   drawBottomRightTriangle(i + 1, [Math.pow(2, i) - 1, Math.pow(2, i) - 1], i % 2 == 0)
// }
//
// function drawRecursiveBottomRightTriangle(resolutionLayer, position, white) {
//   for (i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawBottomRightTriangle(i + resolutionLayer,
//       [Math.pow(2, i - 1) - 1, Math.pow(2, i - 1) - 1],
//       i % 2 == white ? 0 : 1)
//   }
// }

// scratchpad for final implementation of mirror imaging
//
// function mirrorImage(fn, resolutionLayer, position, white) {
//   console.log(fn);
//   position =
//   fn(resolutionLayer, position, white);
// }
//
// function mirrored(position) {
//   return Math.pow(2, resolutionLayer) - position;
// }
//
// mirrorImage(drawTopLeftTriangle, resolutionLayer, position, white);


// scratchpad for coming up with final implementation of truly recursive stuff
//
// for (var j = 0; j < RECURSIVE_DEPTH; j++) {
//   drawBottomRightTriangle(
//     i + resolutionLayer + 1 + j,
//     [
//       (position[0] + 1 - Math.pow(2, j)) * Math.pow(2, i) - 1 ,
//       (position[1] + 1) * Math.pow(2, i) - 1
//     ],
//     i % 2 == white ? 0 : 1
//   );
// }

// old logs for canvas drawing stuff
//
// console.log(resolution);
// console.log(unit);
// console.log(topLeftX);
// console.log(topLeftY);

// discarded unnecessary trapezoid function
//
// function drawBottomRightTrapezoid(resolutionLayer, position, white) {
//   for (var i = 0; i < 2; i++) {
//     drawBottomRightTriangle(
//       i + resolutionLayer,
//       [
//         (position[0] + 1) * Math.pow(2, i) - 1 ,
//         (position[1] + 1) * Math.pow(2, i) - 1
//       ],
//       i % 2 == white ? 0 : 1
//     );
//   }
// }

// scratchpad for recursive triangle function
//
// drawRecursiveBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTriangle(1, [0, 0], true);
// drawBottomRightTrapezoid(1, [0, 0], true);
//
// THIS WAS FOR A SQUARE OF (2, [2, 1], false)
// drawRecursiveBottomRightTriangle(3, [5, 1], false);
// drawRecursiveBottomRightTriangle(4, [9, 3], false);
// drawRecursiveBottomRightTriangle(5, [17, 7], false);
// drawRecursiveBottomRightTriangle(6, [33, 15], false);
//
// for (var i = 0; i < RECURSIVE_DEPTH; i++) {
//   drawRecursiveBottomRightTriangle(
//     i + 3,
//     [
//       Math.pow(2, i + 2) + 1,
//       Math.pow(2, i + 1) - 1
//     ],
//     false
//   );
// }
//
//   for (i = 0; i < RECURSIVE_DEPTH; i++) {
//     drawRecursiveBottomRightTriangle(
//       resolutionLayer + i + 1,
//       [
//         resolutionLayer * position[0] + 1,
//         resolutionLayer * position[0] - 1,
//       ],
//       white);
//   }

// scratchpad for top left vs bottom right triangles
//
// function drawMirror(resolutionLayer, position, white) {
//   var mirroredPosition = [];
//   mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
//   mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
//   drawTriangle(!topLeft, resolutionLayer, mirroredPosition, white, false);
// }
//
// function traceTriangleCoords(topLeft, topLeftX, topLeftY, unit) {
//   if (topLeft) {
//     ctx.moveTo(topLeftX,        topLeftY        );
//     ctx.lineTo(topLeftX + unit, topLeftY        );
//   } else {
//     ctx.moveTo(topLeftX + unit, topLeftY        );
//     ctx.lineTo(topLeftX + unit, topLeftY + unit );
//   }
//   ctx.lineTo(topLeftX, topLeftY + unit );
// }
//
// function drawTopLeftTriangle(resolutionLayer, position, white, drawMirror) {
//   drawMirror = typeof drawMirror !== 'undefined' ? drawMirror : true;
//   ctx.fillStyle = white ? "#fff" : "#000"
//
//   var resolution = Math.pow(2, resolutionLayer);
//   var unit = WIDTH / resolution;
//   var topLeftX = position[0] * unit;
//   var topLeftY = position[1] * unit;
//
//   ctx.beginPath();
//   ctx.moveTo(topLeftX,        topLeftY        );
//   ctx.lineTo(topLeftX + unit, topLeftY        );
//   //ctx.lineTo(topLeftX + unit, topLeftY + unit ); skip bottom right corner
//   ctx.lineTo(topLeftX,        topLeftY + unit );
//   ctx.closePath();
//   ctx.fill();
//   if (drawMirror) {
//     var mirroredPosition = [];
//     mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
//     mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
//     drawBottomRightTriangle(resolutionLayer, mirroredPosition, white, false);
//   }
// }
//
// function drawBottomRightTriangle(resolutionLayer, position, white, drawMirror) {
//   drawMirror = typeof drawMirror !== 'undefined' ? drawMirror : true;
//   ctx.fillStyle = white ? "#fff" : "#000"
//
//   var resolution = Math.pow(2, resolutionLayer);
//   var unit = WIDTH / resolution;
//   var topLeftX = position[0] * unit;
//   var topLeftY = position[1] * unit;
//
//   ctx.beginPath();
//   //ctx.moveTo(topLeftX,        topLeftY        ); //start at top right corner
//   ctx.moveTo(topLeftX + unit, topLeftY        );
//   ctx.lineTo(topLeftX + unit, topLeftY + unit ); //skip bottom right corner
//   ctx.lineTo(topLeftX,        topLeftY + unit );
//   ctx.closePath();
//   ctx.fill();
//
//   if (drawMirror) {
//     var mirroredPosition = [];
//     mirroredPosition[0] = Math.pow(2, resolutionLayer) - position[1] - 1;
//     mirroredPosition[1] = Math.pow(2, resolutionLayer) - position[0] - 1;
//     drawTopLeftTriangle(resolutionLayer, mirroredPosition, white, false);
//   }
// }

// scratchpad for dopple recursive top of tooth
//
// drawRecursiveTriangle(
//   i + resolutionLayer + 2,
//   [
//     (position[0] + 1) * Math.pow(2, i + 2) - 1 ,
//     (position[1] + .5) * Math.pow(2, i + 2) - 1
//   ],
//   i % 2 == white ? 1 : 0
// );
// drawRecursiveTriangle(
//   i + resolutionLayer + 3,
//   [
//     (position[0] + 1) * Math.pow(2, i + 3) - 1 ,
//     (position[1] + .25) * Math.pow(2, i + 3) - 1
//   ],
//   i % 2 == white ? 1 : 0
// );
// drawRecursiveTriangle(
//   i + resolutionLayer + 4,
//   [
//     (position[0] + 1) * Math.pow(2, i + 4) - 1 ,
//     (position[1] + .125) * Math.pow(2, i + 4) - 1
//   ],
//   i % 2 == white ? 1 : 0
// );
// drawRecursiveTriangle(
//   i + resolutionLayer + 5,
//   [
//     (position[0] + 1) * Math.pow(2, i + 5) - 1 ,
//     (position[1] + .0625) * Math.pow(2, i + 5) - 1
//   ],
//   i % 2 == white ? 1 : 0
// );
