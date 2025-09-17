
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


//Kaleidoscope games



// Define the global variables.
// The symmetry variable will define how many reflective sections the canvas
// is split into.
let symmetry = 6;

// The angle button will calculate the angle at which each section is rotated.
let angle = 360 / symmetry;

function setup() {
  describe(
    `Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`
  );
  createCanvas(720, 400);
  angleMode(DEGREES);
  background(50);
}

function draw() {
  // Move the 0,0 coordinates of the canvas to the center, instead of in
  // the top left corner.
  translate(width / 2, height / 2);

  // If the cursor is within the limits of the canvas...
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    // Translate the current position and the previous position of the
    // cursor to the new coordinates set with the translate() function above.
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    // And, if the mouse is pressed while in the canvas...
    if (mouseIsPressed === true) {
      // For every reflective section the canvas is split into, draw the cursor's
      // coordinates while pressed...
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(255);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        // ... and reflect the line within the symmetry sections as well.
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}