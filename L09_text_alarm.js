let xpos;
let vx;
let ypos;
function setup() {
    createCanvas(600, 400);
    background(220);
    fill("black")
    textSize(48);
    textAlign(CENTER, CENTER);
    xpos = width/2;
    vx = 50;
}
function draw() {
    background(220);
    translate(xpos, height/2);
    text("Bounce!",0,0);
    xpos = xpos + vx
    if(xpos > width){
        vx = vx * -1
    }
    else if(xpos < 0){
        vx = vx * -1
    }
}