let cv = 0;

function setup() {
    createCanvas(200, 200);
    background(220);
//    noLoop(); // Stops continuous drawing
  }
//i = i + 1 is i++
function draw() {
  // Recap 1: Repeating Circles
// let diameter = 80;
// let x = 75;
// for(let i =0; i<2; i++) {
// circle(x,400,diameter);
// x = x + diameter + 10;
// }
// x = x -135;
// for(let i =0; i<1; i++) {
// circle(x,300,diameter);
// x = x + diameter + 10;
// }
// x = x -135;
// for(let i =0; i<1; i++) {
// circle(x,200,diameter);
// x = x + diameter + 10;
// }
  // Task 1: Colour Gradient
// let diameter = 80;
// let posx = 75;
// for(let i=0;i<6; i++) {
//   fill(i*50,255,255);
//   circle(posx, 200, diameter);
//   posx = posx + diameter + 10;
// }
  // Task 2: Colour Loop
// fill(cv,0,0);
// circle(250,250,200);
// cv++;
  // Task 3: Row of Circles
// let posx = 75;
// fill((cv% 2) * 255);
// circle(posx,250,100)
// cv++;
// posx = posx + 105;

  // Task 4: Grid of Circles
// const diameter = 50;
// let posx = 50;
// let posy = 50;
// let greenvalue = 0;

// for (let count = 0; count < 5 ; count++) {
//   fill(0,greenvalue,0);
//   greenvalue = greenvalue + 60;
//   circle(posx,posy,diameter);
//   posx = posx + 60;
//   posy = posy + 60;
// }
// let xpos = 50;
// noStroke();

// for (let count = 0; count < 5; count++) {
//     fill(0);
//     if (count%2 === 0 ) fill(255);
//     rect(xpos,50,50,50);
//     xpos = xpos + 60;

// }
noStroke();
fill(255)
rect(0,50,width,100);

fill("red");
circle(width / 2, height / 2, 50);
}
