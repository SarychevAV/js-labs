// JavaScript Document
var canvas = document.getElementById("canv")
var ctx = canvas.getContext('2d')
canvas.height = 600
canvas.width = 400
var centerX = canvas.width / 2
var centerY = canvas.height / 2
var a = 40
var b = 60

//тут должны отрисовываться полуос
function plot() {
ctx.clearRect(0,0,canvas.width,canvas.height);
a = document.getElementById("a").value;
b = document.getElementById("b").value;
ctx.save();
ctx.beginPath();
ctx.translate(centerX, centerY);
ctx.moveTo(2*a,0);
ctx.lineTo(2*a-30,-30);
ctx.moveTo(2*a,0);
ctx.lineTo(2*a-30,30);
ctx.moveTo(2*a,0);
ctx.lineTo(-2*a,0);

ctx.moveTo(0,-2*b);
ctx.lineTo(30,-2*b+30);
ctx.moveTo(0,-2*b);
ctx.lineTo(-30,-2*b+30);
ctx.moveTo(0,-2*b);
ctx.lineTo(0,b*2);
ctx.stroke();
ctx.restore();
ctx.closePath();
ctx.stroke();
ctx.save();
ctx.beginPath();
ctx.translate(centerX, centerY);
ctx.scale(a / b, 1);
ctx.arc(0, 0, b, 0, Math.PI * 2, true);
ctx.restore();
ctx.closePath();
ctx.stroke();
}
