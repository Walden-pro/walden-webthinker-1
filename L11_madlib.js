let inputnoun;
let inputverb;
let inputadjective;
let inputadverb;
let inputplace;
let button2;
let button1;
let story;

let templates;
function draw() {
    background(220);
fill("white")
rect(200,400,450,250,15); 
fill("black")
textSize(20);
text("Enter a noun:",150,70);
text("Enter a verb:",150,120);
text("Enter an adjective:",150,170);
text("Enter a adverb:",150,220);
text("Enter an place:",150,270);
fill("black")

text("story is :" + story,210,430);
// text(inputnoun.value(),inputverb.value(),inputadjective.value(),inputadverb.value(),inputplace.value(),350,500);

// text(inputnoun.value(),250,500);
// text(inputverb.value(),350,500);
// text(inputadjective.value(),450,500);
// text(inputadverb.value(),550,500);
// text(inputplace.value(),650,500);
}
function setup() {
    createCanvas(1535, 727);
    background(220);


inputnoun = createInput(story,"text");
inputnoun.position(350,50);
inputnoun.size(350);

inputverb = createInput(story,"text");
inputverb.position(350,100);
inputverb.size(350);

inputadjective = createInput(story,"text");
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

button2 = createButton("Erase story");
button2.position(550,300);
button2.size(100,50);
button2.mousePressed(eraseStory);

templates = [
"The {adj} {noun} is {verb} {adverb} at the {place}.",
"One day, a {adj} {noun} goes to the {place} and wanted to {verb} there. ",
"Did you hear about the {adj} {noun}, that tried to {verb} {adverb} near {place}. ",
"We did not know about this {adj} {noun}, that tried to {verb} {adverb} near {place}. ",
"We did not know this {adj} {noun} was {verb}ing {adverb}."

];
// let selection = random(templates);
// console.log("selection: "+ selection)
// story = selection.replace("{adj}","tall")
// story = story.replace("{noun}",inputnoun.value())
// story = story.replace("{verb}","get out")
// story = story.replace("{adverb}","skibidily")
// story = story.replace("{place}","principle's office")

// console.log("story is : "+ story)



}

function eraseStory() {
    story = ""
}

function updatestory() {
// console.log(inputnoun.value())
// console.log(inputverb.value())
// console.log(inputadjective.value())
// console.log(inputadverb.value())
// console.log(inputplace.value())


let selection = random(templates);
console.log("selection: "+ selection);
story = selection.replace("{adj}",inputadjective.value());
story = story.replace("{noun}",inputnoun.value());
story = story.replace("{verb}",inputverb.value());
story = story.replace("{adverb}",inputadverb.value());
story = story.replace("{place}",inputplace.value());
textSize(15)




//      background(220);
// story = ist.value();
// textAlign(CENTER,CENTER);
// textSize(28);
// text(story,width/2,250);


}
