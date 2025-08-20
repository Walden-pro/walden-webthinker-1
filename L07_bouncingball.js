
function setup() {
    createCanvas(1535, 727);
    background(220);
}
function draw() {
  triangle(0,200,200,200,100,0)
}


let xpos = 50;
noStroke();
for (let count = 0; count < 5; count++) {
    fill(0);
    if (count%2 === 0 ) fill(255);
    rect(xpos,50,50,50);
    xpos = xpos + 60;


}