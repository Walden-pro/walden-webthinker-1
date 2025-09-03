let xpos = 200;
let ypos = 200;

function setup() {
    createCanvas(600, 400);
    background("skyblue");
}
function draw() {
background("skyblue");
circle(xpos, ypos/2, 50);
if(keyIsDown(LEFT_ARROW)){
xpos = xpos - 5;
}
if ( xpos < 25){
xpos = 25;
}
if(keyIsDown(RIGHT_ARROW)){
    xpos = xpos + 5;
}

if ( xpos > width-25){
xpos = width-25;
}
if(keyIsDown(UP_ARROW)){
ypos = ypos - 5;
}

if(keyIsDown(DOWN_ARROW)){
ypos = ypos + 5;
}
if ( xpos < 25){
xpos = 25;
}
if ( xpos > width-25){
xpos = width-25;
}
}






