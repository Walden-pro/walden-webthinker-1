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
    textSize(16);

    ypos=height;
}
function draw() {
    let textY = 0;

    translate(width/2, ypos);
    background("black");
    textAlign(CENTER, CENTER);
    scale(1,3);
    // text("Longgggg time ago in a galaxy far...",0,0);
    // text("very very very longggg ago",0,50);
    let story = [
        "Longggggggggggggggggggggggggggggggggggggggggggg time ago in a galaxy far...",
        "very very very very very very very very very very very very very very very very very very longgggggggggggggggggggggg ago", 
        "super extremely longgggggggggg ago not even close when you were born",
        "very super longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg (wow that was actually longggg)",
        "very good and longggggggggggggggggg and good boyyyy",
        "There was a bunch of amonguses...",
        "there is a suspicious person that is the imposter...",
        "the amonguses have to do their tasks to save the spaceship from dieing...",
        "the amonguses are suspicious that they have a imposter killing their other amonguses...",
        "the amongus vote the imposter out of the spaceship...",
        "wow the end!"]
    for(let i = 0;i > story.length;i++){
        text(story[i],0,textY);
        textY = textY +20;
    }
ypos = ypos - 0.6;
if (ypos < 0){

    ypos =height;
}

if (keyIsDown(32)){
sfx.play();
}

else if(keyIsDown(DOWN_ARROW)){
sfx.stop();
}

}