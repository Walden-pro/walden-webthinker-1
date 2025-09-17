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
//         vx = vx * -1;
//     } }


function setup() {
    createCanvas(1535, 727);
    background(220);
}
function draw() {
    background(220);
    let hn = hour();
    let mn = minute();
    let sn = second();
    textAlign(CENTER,CENTER);
    textSize(48);
    
    text(mn,width/2,height/2);
    text(";",width/2-30,height/2-4);
    text(hn,width/2-60,height/2);
    text(mn,width/2,height/2);




}