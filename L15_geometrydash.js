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
    
    drawSpike();
}
function drawSpike(x1,x2,x3,y1,y2,y3) {
    x1=805,y1=610,x2=780,y2=675,x3=830,y3=675;
// fill("red")
// triangle(100,100,100,100,100,100)
triangle(x1,y1,x2,y2,x3,y3)

}