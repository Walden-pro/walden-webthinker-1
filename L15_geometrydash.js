let ypos = 625;
function setup() {
    createCanvas(1000, 700);
    
    background("black");
    
    
}
function draw() {
    background("black");
    fill("darkblue");
    rect(0,675,1000,60);
    fill("limegreen")
    rect(100,ypos,50,50)
    fill("red")
    
    drawSpike()
}
function drawSpike(x1,x2,y1,y2) {
// fill("red")
// triangle(100,100,100,100,100,100)
triangle(830,600,7,675,830,675)

}