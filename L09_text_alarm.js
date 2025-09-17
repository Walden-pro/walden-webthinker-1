
let ypos = 0;
let vx
function setup() {
    createCanvas(1535, 728);
    background(220);
    fill("cyan")
    textSize(16);
}
function draw() {
    background(220);
    translate(ypos, height/2);
    textAlign(CENTER, CENTER);
    text("Bounce!",width/2,height/2);



}