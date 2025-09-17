let xpos = 0;
let ypos = 0;
function setup() {
    createCanvas(1535, 728);
    background(220);
    fill("cyan")
    textSize(16);
    ypos = height;
}
function draw() {
    translate(xpos, height/2);
    textAlign(CENTER, CENTER);
    text("Bounce!",width/2,728/2);



}