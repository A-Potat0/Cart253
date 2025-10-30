/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let ball1 = undefined; // Will create it with createBall()

let  balls = [];

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  // Create the ball
  ball1 = createBall();

  balls.push (createBall());
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    x: width/2,
    y: height/2,
    size: 20,
    // Colour
    fill1: random(0,255),
    fill2: random(150,255),
    // Movement
    velocity: {
      x: random(-10, 10),
      y: random(-10, 10)
    }
  };
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");
  
    for (ball of balls) {
      moveBall(ball);
      bounceBall(ball);
      drawBall(ball);
    }

}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x > width || ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y > height || ball.y < 0);
  // Check if the ball hit the corner
  const corner1 = (ball.x < 1 && ball.y < 1);
  const corner2 = (ball.x < 1 && ball.y > (height - 1) );
  const corner3 = (ball.x > (width - 1) && ball.y < 1);
  const corner4 = (ball.x > (width - 1) && ball.y > (height - 1));
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity.y *= -1;
  }


  let hitCorner = false;
  // Handle corners
  if (corner1) {
    ball.velocity.y += 1.5;
    ball.velocity.x += 1.5;
    ball.size -= 1;
    ball.fill1 -= 1.5;
    balls.push (createBall());
    // print(index);
    hitCorner = true;
  }
  if (corner2) {
    ball.velocity.y -= 1.5;
    ball.velocity.x += 1.5;
    ball.size -= 1;
    ball.fill1 -= 1.5;
    // print(index);
    hitCorner = true;
  }
  if (corner3) {
    ball.velocity.y += 1.5;
    ball.velocity.x -= 1.5;
    ball.size -= 1;
    ball.fill2 -= 0.5;
    balls.push (createBall());
    // print(index);
    hitCorner = true;
  }
  if (corner4) {
    ball.velocity.y -= 1.5;
    ball.velocity.x -= 1.5;
    ball.size -= 1;
    ball.fill2 -= 0.5;
    // print(index);
    hitCorner = true;
  }

  if (hitCorner) {
    // ball hit a corner
    const index = balls.indexOf(ball);
    print(index);
  }

  if (ball.size <= 0) {
    ball.fill2 -= 1
  }

}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
  push();
  noStroke();
  fill(ball.fill1, ball.fill2);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}

/**
 * adding balls by doing stuff
 */
function mousePressed() {
    balls.push (createBall());
}

function keyPressed() {
    balls.push (createBall());
}