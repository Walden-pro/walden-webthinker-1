let xp  = 0;;;
let yp = 0;


let si,se,bgm;

function setup() {
    createCanvas(1535, 727);
    background(220);
}
function draw() {
background("skyblue")
image(si,xp, yp ,110,133)

if(keyIsDown(RIGHT_ARROW)){
xp = xp + 30;
}
if(keyIsDown(LEFT_ARROW)){
xp = xp - 30;
}
if(keyIsDown(DOWN_ARROW)){
yp = yp + 30;
}
if(keyIsDown(UP_ARROW)){
yp = yp - 30;
}
if(keyIsDown()){
yp = yp - 30;
}
yp = constrain(yp,40,height-120);
xp = constrain(xp,40,width-120);
}
function preload() {
se = loadSound('assets/pop.mp3')
si = loadImage('assets/pico-a.png')
bgm = loadSound('assets/brain.mp3')



}