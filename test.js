
// //orbit control game
// function setup() {
//   createCanvas(1535, 727, WEBGL);
//   angleMode(DEGREES);
//   strokeWeight(5);
//   noFill();
//   stroke(32, 8, 64);
//   describe(
//     'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
//   );
// }

// function draw() {
//   background(250, 180, 200);

//   // Call every frame to adjust camera based on mouse/touch
//   orbitControl();

//   // Rotate rings in a half circle to create a sphere of cubes
//   for (let zAngle = 0; zAngle < 180; zAngle += 30) {
//     // Rotate cubes in a full circle to create a ring of cubes
//     for (let xAngle = 0; xAngle < 360; xAngle += 30) {
//       push();

//       // Rotate from center of sphere
//       rotateZ(zAngle);
//       rotateX(xAngle);

//       // Then translate down 400 units
//       translate(0, 400, 0);
//       box();
//       pop();
//     }
//   }
// }





// // Ball keycode game
// let xp  = 0;;;
// let yp = 0;

// function setup() {
//     createCanvas(1535, 727);
//     background(220);
// }
// function draw() {
//     background(220);
// textSize(48);
// text(key, 50,40);
// text(keyCode,50,80);
// if(keyIsDown(RIGHT_ARROW)){
// xp = xp + 10;
// }
// if(keyIsDown(LEFT_ARROW)){
// xp = xp - 10;
// }
// xp = constrain(xp,40,width-40);
// if(keyIsDown(DOWN_ARROW)){
// yp = yp + 10;
// }
// if(keyIsDown(UP_ARROW)){
// yp = yp - 10;
// }
// yp = constrain(yp,40,height-40);
// fill(255,0,0);
// circle(xp,yp ,80);

//     background(220);
// textSize(48);
// text(key, 50,40);
// text(keyCode,50,80);
// if(keyIsDown(68)){
// xp = xp + 10;
// }
// if(keyIsDown(65)){
// xp = xp - 10;
// }
// xp = constrain(xp,40,width-40);
// if(keyIsDown(83)){
// yp = yp + 10;
// }
// if(keyIsDown(87)){
// yp = yp - 10;
// }
// yp = constrain(yp,40,height-40);
// fill(255,0,0);
// circle(xp,yp ,80);
// }