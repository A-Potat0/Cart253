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
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}