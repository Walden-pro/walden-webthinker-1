let xpos = 200;
let ypos = 200;
let vX = 2;
function setup() {
    createCanvas(600, 400);
    background("black");
    fill("cyan");
    textSize(32);
    // textAlign(LEFT,TOP);
    textAlign(CENTER,CENTER);
    // text("My name is blah blah blah", 50, 50);
    // text("I am blah this year", 50, 100);
    // text("My favourite activity is blahing ", 50, 150);
let ffs = ["fried chickens","pasta","pizza"];
console.log(ffs.length);
console.log(ffs);
let yv = 80;
for (let index=0;index<ffs.length;index++) {
console.log("i like "+ffs[index],"!!!");
text("i like "+ffs[index],280,yv);
yv=yv+55;
}


}
function draw() {





//     background(220);
// noStroke();
// rect(xpos,ypos,50,50);
// xpos = xpos + vX;
// if (xpos < 0 || xpos> width-50 ){
// xpos = xpos - 1;
// fill( random(0,255), random(0,255), random(0,255));
// vX = vX * -1;
// }



}



