


let xpos = 200;
let bx = 200;
let by = 300;
let bs = 50;
let bsx = 2;
let bsy = -2;
function setup() {
    createCanvas(600, 400);
    background("steelblue");
}
function draw() {

noStroke();

circle(bx,by,bs);
bx=bx+bsx;
by=by+bsy;
if (bx > width-bs/2){
bsx =bsx * -1;
fill( random(0,255), random(0,255), random(0,255))
}
if (bx < 0+bs/2){
bsx =bsx * -1;
fill( random(0,255), random(0,255), random(0,255))
}
// if (by > height-bs/2){
// bsy =bsy * -1;
// fill( random(0,255), random(0,255), random(0,255))
// }
if (by < 0+bs/2){
bsy =bsy * -1;
fill( random(0,255), random(0,255), random(0,255))
}


if(keyIsDown(UP_ARROW)){
bsx=bsx+1
}

if(keyIsDown(DOWN_ARROW)){
bsx=bsx-1
}
if(keyIsDown(87)){
bsy=bsy+1
}

if(keyIsDown(83)){
bsy=bsy-1
}
bsx = constrain(bsx,1,10);
bsy = constrain(bsy,1,10);

}






























































// function draw() {



// let xpos = 200;
// let ypos = 200;


// background("skyblue");
// circle(xpos, ypos/2, 50);
// if(keyIsDown(LEFT_ARROW)){
// xpos = xpos - 5;
// }
// if ( xpos < 25){
// xpos = 25;
// }
// if(keyIsDown(RIGHT_ARROW)){
//     xpos = xpos + 5;
// }

// if ( xpos > width-25){
// xpos = width-25;
// }
// if(keyIsDown(UP_ARROW)){
// ypos = ypos - 5;
// }

// if(keyIsDown(DOWN_ARROW)){
// ypos = ypos + 5;
// }
// if ( ypos < 25){
// ypos = 25;
// }


// }