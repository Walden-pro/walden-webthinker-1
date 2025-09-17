let sfx;
let ypos;
function preload(){
sfx=loadSound("assets/star.war.mp3")
sfx.loop();
}
function setup() {
    createCanvas(1500, 700);
    background(220);
    fill("cyan")
    textSize(48);

    ypos=height;
}
function draw() {
    translate(width/2, ypos);
    background("black");
    textAlign(CENTER, CENTER);
    scale(1,3);
    text("Longgggg time ago in a galaxy far...",0,0);
    text("At episode 6.8 in the year 1968.9",0,50);
    let story = ["very very very longggg ago", "There is a spaceship in the space...", "There was a bunch of amonguses"]
ypos = ypos - 0.8;
if (ypos < 0){

    ypos = height;
}

if (keyIsDown(32)){
sfx.play();
}

else if(keyIsDown(DOWN_ARROW)){
sfx.stop();
}

}