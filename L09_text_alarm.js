// let xpos;
// let vx;
// let ypos;
// function setup() {
//     createCanvas(600, 400);
//     background(220);
//     fill("black");
//     textSize(48);
//     textAlign(CENTER, CENTER);
//     xpos = width/2;
//     vx = 50; }
// function draw() {
//     background(220);
//     translate(xpos, height/2);
//     text("Bounce!",0,0);
//     xpos = xpos + vx;
//     if(xpos > width||xpos < 0){
//         vx = vx * -1; } }
let bgcolor = 220;
let sfx;
let counter = 5;
let objectid;
let secondid;
function preload(){
sfx=loadSound("assets/bossaNova.mp3");
}
function setup() {
    createCanvas(800, 600);
    background(bgcolor);}
function draw() {
    fill("black");
    background(bgcolor);
    let hn = hour();
    hn = nf(hn,2);
    let mn = minute();
    mn = nf(mn,2);
    let sn = second();
    sn = nf(sn,2);
    textAlign(CENTER,CENTER);
    textSize(48);
    let time = hn + ":" + mn + ":"  + sn;
    text(time,width/2,height/3);

    textSize(25);
    fill("red");
    text("Countdown timer hmmmmmmmm...", width/2 , height/2 - 50);
    text("Click me to start the longggggg timer", width/2 , height/2 + 150);
    text(counter,width/2,height/2+50)


}
function keyPressed(){
    if(keyCode === UP_ARROW){ 
    sfx.play();
    }
        if(keyCode === DOWN_ARROW){ 
    sfx.stop();
    }
}
function mousePressed(){
    if(counter === 5){
objectid = setInterval(dosomething,1000);//1000 milliseconds is one second
UserStartAudio();
}
}
function dosomething(){
    counter--; 
    counter = constrain(counter,0,5);
    if(counter === 0){
        clearInterval(objectid);
        sfx.play();
        secondid = setInterval(blinkBG,500);
            // for(let index = 0;index < 10;index++){

            //     bgcolor = color(random(255), random(255),random(255));
            // }
    }
}


let bc = 0;
function blinkBG(){
bc++;
bgcolor = color(random(255), random(255),random(255));
if (bc === 10){
clearInterval(secondid);
bgcolor = 220;
}
}