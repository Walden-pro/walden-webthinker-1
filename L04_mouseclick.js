let shapeColor = "white"
let d  = 100

function setup() {
    createCanvas(1500, 700);
    background(220);
    fill(255,0,0)
}
function draw() {

// noStroke();
// fill(50,255);
// circle(mouseX,mouseY,d);
}

function mousePressed() {
    // fill(random(255),random(255),random(255))
    // circle(100,100,100)

}

function mouseReleased(){
// fill("white")
// circle(100,100,100)


}
function mouseMoved(){
//     fill(random(255),random(255),random(255));
// ellipse(mouseX,mouseY,10,10);

}
function mouseDragged(){
    
// let di = random(25);
// noStroke();
// fill(random(255),random(255),random(255));
// circle(mouseX,mouseY,di);
noStroke()
fill(random(254))
ellipse(mouseX, mouseY, 20, 20);
}