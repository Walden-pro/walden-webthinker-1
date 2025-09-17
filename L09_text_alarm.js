let xpos;
let vx;
let ypos;
function setup() {
    createCanvas(1535, 728);
    background(220);
    fill("cyan")
    textSize(16);
    textAlign(CENTER, CENTER);
}
function draw() {
    background(220);
    translate(xpos, height/2);
    
    text("Bounce!",width/2,height/2);



}