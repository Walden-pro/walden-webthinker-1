let xp  = 0;;;
let yp = 0;


let si,se;

function setup() {
    createCanvas(1535, 727);
    background(220);
}
function draw() {
background("skyblue")
Image(si,xp, yp ,110,133)

if(keyIsDown(RIGHT_ARROW)){
xp = xp + 30;
}
if(keyIsDown(LEFT_ARROW)){
xp = xp - 30;
}

}
function preload() {
se = loadSound('assets/pop.mp3')
si = loadImage('assets/pico-a.png')




}