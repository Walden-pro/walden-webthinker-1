let sfx;
let ypos;
function preload(){
sfx=loadSound("assets/star.war.mp3")
sfx.loop();
}
function setup() {
    createCanvas(600, 700);
    background(220);
    fill("cyan")
    textSize(32);

    ypos=height;
}
function draw() {
    background("black");
    textAlign(CENTER,CENTER)
    scale(1,3);
    text("Longgggg time ago in a galaxy far...",150,0);
    text("At episode 6.8 in the year 1968.9",150,40);
ypos = ypos - 0.6;


if (keyIsDown(32)){
sfx.play();
}

else if(keyIsDown(DOWN_ARROW)){
sfx.stop();
}

}