/**
 * landscape
 * Anthony & Jake
 * 
 * the nocturnal pig finds an apple
 */

"use strict";

/**
 * setup
*/
function setup() {

    createCanvas(1000,1000);
}


/**
 * art
*/
function draw() {

    // background
    background(0,0,50);

    // moon
    push();
    fill(255,255,200);
    ellipse(200, 150, 150);
    pop();

    // half moon
     push();
    fill(0,0,50);
    ellipse(235, 135, 135);
    pop();

    // ground
    push();
    fill(50, 110, 84);
    rect(-1, 750, 1002, 251);
    pop();

    // tree
    push();
    stroke(112, 87, 37);
    fill(112, 87, 37);
    rect(750, 500, 75, 250);
    pop();

    // leaves
    push();
    stroke(28, 92, 75);
    fill(28, 92, 75);
    triangle(725, 525, 875, 525, 785, 375);
    pop();

    // pig body
    push();
    stroke(163, 54, 140);
    fill(163, 54, 140);
    rect(200, 700, 60, 30);
    pop();

    // pig legs
    push();
    stroke(163, 54, 140);
    fill(163, 54, 140);
    rect(200, 730, 10, 30);
    pop();

    push();
    stroke(163, 54, 140);
    fill(163, 54, 140);
    rect(250, 730, 10, 30);
    pop();

    // pig head
    push();
    stroke(163, 54, 140);
    fill(163, 54, 140);
    rect(250, 690, 30, 30);
    pop();

    // nose
    push();
    stroke(156, 114, 147);
    fill(156, 114, 147);
    rect(275, 705, 10, 10);
    pop();

    // eye
    push();
    stroke(207, 204, 206);
    fill(0,0,0);
    rect(269, 695, 5, 5);
    pop();

    // tail
    push();
    stroke(163, 54, 140);
    noFill();
    ellipse(195, 710, 10);
    pop();

    push();
    stroke(163, 54, 140);
    noFill();
    ellipse(192, 711, 9);
    pop();

    push();
    stroke(163, 54, 140);
    noFill();
    ellipse(190, 713, 8);
    pop();


    // apple
    push();
    stroke(158, 32, 32);
    fill(158, 32, 32);
    ellipse(670, 745, 15);
    pop();

    // stem for apple
    push();
    stroke(77, 64, 31);
    fill(77, 64, 31);
    rect(669, 734, 3, 10);
    pop();



}