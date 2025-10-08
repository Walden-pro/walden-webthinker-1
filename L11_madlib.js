let inputnoun;
let inputverb;
let inputadjective;
let inputadverb;
let inputplace;

let button1;
let story;

function setup() {
    createCanvas(1535, 727);
    background(220);

inputnoun = createInput(story,"e.g dog");
inputnoun.position(350,50);
inputnoun.size(350);

inputverb = createInput(story,"e.g jump");
inputverb.position(350,100);
inputverb.size(350);

inputadjective = createInput(story,"e.g happy");
inputadjective.position(350,150);
inputadjective.size(350);

inputadverb = createInput(story,"text");
inputadverb.position(350,200);
inputadverb.size(350);

inputplace = createInput(story,"text");
inputplace.position(350,250);
inputplace.size(350);

button1 = createButton("Generate story");
button1.position(350,300);
button1.size(100,50);
button1.mousePressed(updatestory);

}
function updatestory() {
console.log(inputnoun.value())
console.log(inputverb.value())
console.log(inputadjective.value())
console.log(inputadverb.value())
console.log(inputplace.value())
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
text("Enter an adjective:",150,170);
text("Enter a adverb:",150,220);
text("Enter an place:",150,270);


}