let xp  = 0;;;
let yp = 0;
let six = 




function setup() {
    createCanvas(1535, 727);
    background(220);
}
function draw() {
background("skyblue")


if(keyIsDown(RIGHT_ARROW)){
xp = xp + 30;
}
if(keyIsDown(LEFT_ARROW)){
xp = xp - 30;
}

}
function preload() {

si = loadImage('assets/pico-a.png')




}