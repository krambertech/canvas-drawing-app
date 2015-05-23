var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var brushSize = 20;
var brushColor = 20;
var isMouseDown = false;

ctx.lineWidth = brushSize;

var draw = function(e) {
	if(isMouseDown) {
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, brushSize/2, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
};

var mouseUp = function(e) {
	isMouseDown = false;
	ctx.closePath();
};

var mouseDown = function(e) {
	isMouseDown = true;
	ctx.moveTo(e.clientX, e.clientY);
	draw(e);
};

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove', draw);

var changeBrushColor =  function(value){
    brushColor = value;
    ctx.strokeStyle = brushColor;
    ctx.fillStyle=brushColor;
};

var changeBrushSize =  function(value){
    brushSize = +value;
    ctx.lineWidth = brushSize;
};
