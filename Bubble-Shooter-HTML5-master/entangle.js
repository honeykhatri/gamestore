var cvs = document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');
var img = new Image();
img.src = 'tiles.png';

var originX = 200;
var originY = 173;
ctx.translate(originX, originY);
ctx.rotate(Math.PI / 3);
ctx.translate(-originX, -originY);

var sourceX = 1200;
var sourceY = 0;
var sourceWidth = 400;
var sourceHeight = 346;
var destinationX = 0;
var destinationY = 0;
var destinationWidth = 400;
var destinationHeight = 346;
ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight,
              destinationX, destinationY, destinationWidth, destinationHeight);

ctx.beginPath();
var pointX1 = 150;
var pointY1 = 0;
var controlX1 = 150;
var controlY1 = 86;
var controlX2 = 250;
var controlY2 = 260;
var pointX2 = 250;
var pointY2 = 346;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

ctx.beginPath();
pointX1 = 250;
pointY1 = 0;
controlX1 = 250;
controlY1 = 86;
controlX2 = 150;
controlY2 = 86;
pointX2 = 75;
pointY2 = 43;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

ctx.beginPath();
pointX1 = 150;
pointY1 = 346;
controlX1 = 150;
controlY1 = 260;
controlX2 = 300;
controlY2 = 173;
pointX2 = 375;
pointY2 = 213;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

ctx.beginPath();
pointX1 = 325;
pointY1 = 43;
controlX1 = 250;
controlY1 = 86;
controlX2 = 300;
controlY2 = 173;
pointX2 = 375;
pointY2 = 130;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

ctx.beginPath();
pointX1 = 25;
pointY1 = 130;
controlX1 = 100;
controlY1 = 173;
controlX2 = 100;
controlY2 = 173;
pointX2 = 25;
pointY2 = 213;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

ctx.beginPath();
pointX1 = 325;
pointY1 = 303;
controlX1 = 250;
controlY1 = 260;
controlX2 = 150;
controlY2 = 260;
pointX2 = 75;
pointY2 = 303;
ctx.moveTo(pointX1, pointY1);
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, pointX2, pointY2);
ctx.lineWidth = 15;
ctx.strokeStyle = '#ffffff';
ctx.stroke();
ctx.lineWidth = 10;
ctx.strokeStyle = '#786c44';
ctx.stroke();

