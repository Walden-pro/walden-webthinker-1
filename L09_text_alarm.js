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


function setup() {
    createCanvas(1535, 727);
    background(220);}
function draw() {
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
    let pi = second();
    pi = nf(pi, 1 , 43);
    textSize(25)
    fill("red");
    text("pi is "+ pi , width/2 , height/2+ 50);
    text("Countdown timer hmmmmmmmm...", width/2 , height/2 - 50);
    text("Click me to start the longggggg timer", width/2 , height/2 + 150);




}   