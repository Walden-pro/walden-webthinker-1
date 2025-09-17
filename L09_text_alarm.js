let xpos;
let vx;
let ypos;
function setup() {
    createCanvas(1535, 728);
    background(220);
    fill("cyan")
    textSize(48);
    textAlign(CENTER, CENTER);
    xpos = width/2;
    vx = 3;
}
function draw() {
    background(220);
    translate(xpos, height/2);
    
    text("Bounce!",0,0);
    xpos = xpos + vx
    if(xpos > width){


        
    }


}