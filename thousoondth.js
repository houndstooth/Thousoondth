var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');

WIDTH = 800;
HEIGHT = WIDTH;

canvas.width = WIDTH;
canvas.height = HEIGHT;


ctx.strokeStyle="#000";
ctx.fillStyle="#000";
ctx.lineWidth = 1;

ctx.beginPath();

ctx.moveTo(WIDTH, HEIGHT/2);
ctx.lineTo(WIDTH, 0);
ctx.closePath();
ctx.fill();
ctx.stroke();
