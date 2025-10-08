
let button1;
let story;
let inputNoun;
function setup() {
    createCanvas(1535, 727);
    background(220);
ist = createInput(story,"text");
ist.position(350,50);
ist.size(350);

button1 = createButton("Generate story");
button1.position(350,100);
button1.size(100,50);
button1.mousePressed(updatestory);

}
function updatestory() {
console.log(inputNoun.value())
//      background(220);
// story = ist.value();
// textAlign(CENTER,CENTER);
// textSize(28);
// text(story,width/2,250);


}
function mousePressed(){



}
function draw() {

textSize(20);
text("Enter a noun:",100,68);


}