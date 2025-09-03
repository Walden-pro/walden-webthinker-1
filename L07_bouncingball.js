let xpos = 200;


function setup() {
    createCanvas(1535, 727);
    background('skyblue')
}
function draw() {
background('skyblue');
circle(xpos,height/2,50);
if(keyIsDown(LEFT_ARROW)){
xpos = xpos - 5;

}
if ( xpos < 25){
xpos = 25;

}

}


function draw(){



}



