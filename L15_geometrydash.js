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
function drawSpike(x1,x2,x3,y1,y2,y3) {
    x1=805,x2=610,
// fill("red")
// triangle(100,100,100,100,100,100)
triangle(x1,x2,780,675,830,675)

}