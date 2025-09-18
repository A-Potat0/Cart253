/**
 *  Mr. Furious
 * Anthnoy Patient
 * 
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

// sky settings
let sky = {
    //colour
    fill: {
        r: 160,
        g: 180,
        b: 200,
    }

}

//bird settings
let bird = {
   // bird Position 
    x: 200,
    y: 100,
   // Body ize
   body: {
     size: 25,
     height: 15,
   },
   //Wing size
   wing: {
     size: 10,
     height: 5,
   },
   //beak size
  beak: {
     size: 30,
     height: 5,
   },

    //collor
    fill: {
        r: 255,
        g: 238,
        b: 0,
    },

};



/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(constrain(sky.fill.r -= 0.1, 0, 160), constrain(sky.fill.g -= 0.1, 50, 180), constrain(sky.fill.b -= 0.1, 100, 200));
  
  // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(constrain(mrFurious.fill.r += 1, 0, 255),constrain(mrFurious.fill.g -= 1, 105, 255),constrain(mrFurious.fill.b -= 1, 105, 255));
    ellipse(mrFurious.x, mrFurious.y, constrain(mrFurious.size += random(-5, 5), 0, 400));
    pop();

  // draw the bird
    push();
    stroke(0);
    fill(constrain(bird.fill.r += random(-5, 5), 50, 255),constrain(bird.fill.g += random(-5, 5), 50, 255),constrain(bird.fill.b += random(-5, 5), 50, 255));
    
    ellipse(bird.x - 2,bird.y,bird.beak.size,bird.beak.height);
    ellipse(bird.x,bird.y,bird.body.size,bird.body.height);
    ellipse(bird.x + 3,bird.y,bird.wing.size,bird.wing.height);

    bird.x = constrain(bird.x - random(-5, 5), 40, 360);
    bird.y = constrain(bird.y + random(-5, 5), 20, 150);

    pop();
}