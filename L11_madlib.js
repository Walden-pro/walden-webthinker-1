let ist;
let button1;
let story;

function setup() {
    createCanvas(1535, 727);
    background(220);
ist = createInput(story,"text");
ist.position(350,50);
ist.size(350);

button1 = createButton("Click on me");
button1.position(350,100);
button1.size(100,50);
button1.mousePressed(updatestory);

}
function updatestory() {
//      background(220);
// story = ist.value();
// textAlign(CENTER,CENTER);
// textSize(28);
// text(story,width/2,250);


}
function draw() {
textSize(28);
text("enter your noun;",100,68);


}