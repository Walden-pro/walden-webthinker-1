let xp  = 0;;;
let yp = 0;


let si,se,bgm,si2;

function setup() {
    createCanvas(1535, 727);
    background(220);
    bgm.loop();
}
function draw() {
background("skyblue")
image(si,xp, yp ,110,133)
image(si2,xp, yp ,110,133)
if(keyIsDown(68)){
xp = xp + 30;
}
if(keyIsDown(65)){
xp = xp - 30;
}
if(keyIsDown(83)){
yp = yp + 30;
}
if(keyIsDown(87)){
yp = yp - 30;
}
if(keyIsDown(32)){

}





if(keyIsDown(39)){
xp = xp + 30;
}
if(keyIsDown(37)){
xp = xp - 30;
}
if(keyIsDown(40)){
yp = yp + 30;
}
if(keyIsDown(38)){
yp = yp - 30;
}
yp = constrain(yp,40,height-120);
xp = constrain(xp,40,width-120);
}
function preload() {
se = loadSound('assets/pop.mp3')
si = loadImage('assets/pico-a.png')
si2 = loadImage('assets/penguin.svg')
bgm = loadSound('assets/brain.mp3')



}


