let sfx;
let ypos;
function preload(){
sfx=loadSound("assets/star.war.mp3")
sfx.loop();
}
function setup() {
    createCanvas(600, 400);
    background(220);
    fill("cyan")
    textSize(32);

    ypos=height;
}
function draw() {
    background("black");
    textAlign(CENTER,CENTER)
    text("Longgggg time ago in a galaxy far...",0,50)



if (keyIsDown(32)){
sfx.play();
}

else if(keyIsDown(DOWN_ARROW)){
sfx.stop();
}

}