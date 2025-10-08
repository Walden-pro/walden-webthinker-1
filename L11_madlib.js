let inputverb;
let button1;
let story;
let inputnoun;
function setup() {
    createCanvas(1535, 727);
    background(220);

inputnoun = createInput(story,"text");
inputnoun.position(350,50);
inputnoun.size(350);

inputverb = createInput(story,"text");
inputverb.position(350,100);
inputverb.size(350);

button1 = createButton("Generate story");
button1.position(350,500);
button1.size(100,50);
button1.mousePressed(updatestory);

}
function updatestory() {
console.log(inputnoun.value())
console.log(inputverb.value())
console.log(inputnoun.value())
console.log(inputnoun.value())
console.log(inputnoun.value())
//      background(220);
// story = ist.value();
// textAlign(CENTER,CENTER);
// textSize(28);
// text(story,width/2,250);


}
function draw() {

textSize(20);
text("Enter a noun:",150,70);
text("Enter a verb:",150,120);

}