let ist;
let button1;
let story;

function setup() {
    createCanvas(1535, 727);
    background(220);
ist = createInput(story,"text");
ist.position(50,50);
ist.size(350);

button1 = createButton("Click on me");
button1.position(50,100);
button1.size(100,50);
button1.mousePressed(updatestory);

}
function updatestory() {
story = ist.value();
textAlign(CENTRE,CENTRE);
text(story,height/2,250);


}
function draw() {



}