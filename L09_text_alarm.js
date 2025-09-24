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
let sfx;
function preload(){
sfx=loadSound("assets/bossaNova.mp3");


}
function setup() {
    createCanvas(1535, 727);
    background(220);}
function draw() {
    if (keyIsDown(32)){
    sfx.play();
    }
    else if(keyIsDown(DOWN_ARROW)){ 
    sfx.stop(); }
    fill("black")
    background(220);
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
    let pi = 5;
    let index;
    for (let index=0;index<5;index++){
    pi = pi - 1

    }
    
    pi = nf(pi, 1 , 1);
    textSize(25)
    fill("red");
    text(pi , width/2 , height/2+ 50);
    text("Countdown timer hmmmmmmmm...", width/2 , height/2 - 50);
    text("Click me to start the longggggg timer", width/2 , height/2 + 150);




}   