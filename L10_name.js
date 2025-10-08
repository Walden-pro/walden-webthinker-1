let bgcolor = "skyblue";
let cp;
let username;
let userinput;
let ageinput;
let age = 15;
function setup() {
    createCanvas(600, 600);
    background(bgcolor);
    cp = createColorPicker(bgcolor);
    cp.position(width/2+0,height/2+150);
    textSize(25);
    userinput = createInput();
    userinput.position(300,height/2+50);
    userinput.input(updateLabel);
    ageinput = createInput(age,"number");
    ageinput.position(300,height/2+100);
    ageinput.input(updateage);
}
function updateage(){
age = ageinput.value();
}
function updateLabel(){
username = userinput.value();
}

function draw() {
textAlign(CENTER,CENTER);
background(cp.value());
fill("white");
rect(100,100,400,200,20);
fill("black");
text(username, width/2,150);
text(age, width/2,200);
textAlign(RIGHT,CENTER);
text("Choose background:",300,height/2+160);
text("Your name:",300,height/2+60);
text("Your age:",300,height/2+110);


}