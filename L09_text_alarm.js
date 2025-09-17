let xpos = 0;
let ypos = height;
function setup() {
    createCanvas(1535, 727);
    background(220);
    fill("cyan")
    textSize(16);
}
function draw() {
    translate(width/2, ypos)
    background("black");
    textAlign(CENTER, CENTER);
    text("Bounce!")



}