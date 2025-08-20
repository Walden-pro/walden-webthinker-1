let xp  = 0;;;
let yp = 0;

function setup() {
    createCanvas(600, 600);
    background(220);
}
function draw() {
    background(220);
textSize(48);
text(key, 50,40);
text(keyCode,50,80);
if(keyIsDown(RIGHT_ARROW)){
xp = xp + 10;
}
if(keyIsDown(LEFT_ARROW)){
xp = xp - 10;
}
xp = constrain(xp,40,width-40);
if(keyIsDown(DOWN_ARROW)){
yp = yp + 10;
}
if(keyIsDown(UP_ARROW)){
yp = yp - 10;
}
yp = constrain(yp,40,height-40);
fill(255,0,0);
rect(xp,yp ,80, 80);

    background(220);
// textSize(48);
// text(key, 50,40);
// text(keyCode,50,80);
if(keyIsDown(68)){
xp = xp + 10;
}
if(keyIsDown(65)){
xp = xp - 10;
}
xp = constrain(xp,40,width-40);
if(keyIsDown(83)){
yp = yp + 10;
}
if(keyIsDown(87)){
yp = yp - 10;
}
yp = constrain(yp,40,height-40);
fill(255,0,0);
rect(xp,yp ,80,80);
noFill()
rect(40,40,300,300)
}
function keyPressed() {



}
function keyReleased(){





}





















































































