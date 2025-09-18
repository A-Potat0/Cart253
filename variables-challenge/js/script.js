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

//how random randome is
let randomevalue = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,

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

    mrFurious.size = constrain(mrFurious.size += random(-5 , 5), 50, 400)
    
    pop();

  // draw the bird
    push();
    stroke(0);
    fill(bird.fill.r,bird.fill.g,bird.fill.b);
    
    bird.fill.r = constrain(bird.fill.r += random(randomevalue.a += random(-5, 3), randomevalue.b += random(-5, 8)), 50, 255)
    bird.fill.g = constrain(bird.fill.g += random(randomevalue.c += random(-3, 4), randomevalue.d += random(-2, 1)), 50, 255)
    bird.fill.b = constrain(bird.fill.b += random(randomevalue.e += random(-9, 3), randomevalue.f += random(-6, 7)), 50, 255)

    ellipse(bird.x - 2,bird.y,bird.beak.size,bird.beak.height);
    ellipse(bird.x,bird.y,bird.body.size,bird.body.height);
    ellipse(bird.x + 3,bird.y,bird.wing.size,bird.wing.height);

    bird.x = constrain(bird.x - random(-5, 5), 40, 360);
    bird.y = constrain(bird.y + random(-5, 5), 20, 150);

    print(mrFurious.size)
    pop();
}