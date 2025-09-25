/**
 * Circle Master
 * Anthony Patient & ???
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 400,
  y: 400,
  size: 100,
  fill: "#ff0000",
  fills: {
    noOverlap: "#ff0000", // red for no overlap
    overlap: "#00ff00" // green for overlap
  }
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(800, 800);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  // Move puck
  movePuck()

  // Move target
  moveTarget()

  //wrap the elements
  wrapTarget()
  wrapUser()
  wrapPuck()

  // Draw the user and puck
  drawUser();
  drawPuck();

  //draw target
  drawTarget();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

//check the overlapping of the circiles
function movePuck() {
  // Check overlap

  const diffX = abs(puck.x - user.x) / 10
  const diffY = abs(puck.y - user.y) / 10

  // Calculate distance between circles' centres
  const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = (d < user.size / 2 + puck.size / 2);
  // Set fill based on whether they overlap
  if (overlap && user.x < puck.x && user.y < puck.y) {
    puck.x = puck.x + diffX;
    puck.y = puck.y + diffY;
  }
  else if (overlap && user.x > puck.x && user.y > puck.y) {
    puck.x = puck.x - diffX;
    puck.y = puck.y - diffY;
  }
  else if (overlap && user.x < puck.x && user.y > puck.y) {
    puck.x = puck.x + diffX;
    puck.y = puck.y - diffY;
  }
  else if (overlap && user.x > puck.x && user.y < puck.y) {
    puck.x = puck.x - diffX;
    puck.y = puck.y + diffY;
  }


}

// moving both targets
function moveTarget() {
  const newX = target.x + random(-1, 1) * (random(-1, 1) * 25);
  const newY = target.y + random(-1, 1) * (random(-1, 1) * 25);
  target.x = newX,
    target2.x = newX,
    target.y = newY,
    target2.y = newY
}

function drawTarget() {
  const d = dist(target.x, target.y, puck.x, puck.y);
  const overlap = (d < puck.size / 2 + target.size / 2);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping
  if (overlap) {
    target.fill = target.fills.overlap;
    target2.fill = target2.fills.overlap;
  }
  else {
    target.fill = target.fills.noOverlap;
    target2.fill = target2.fills.noOverlap;
  }


  push();
  fill(target.fill)
  ellipse(target.x, target.y, target.size);
  fill(target2.fill)
  ellipse(target2.x, target2.y, target2.size / 2);
  pop();


}

let target = {
  x: 150,
  y: 50,
  size: 50,
  fills: {
    noOverlap: "#fff",
    overlap: "#00ff00"
  }
}

let target2 = {
  x: 150,
  y: 50,
  size: 50,
  fills: {
    noOverlap: "#ff0000",
    overlap: "#ff00ff"
  }

}


/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

/**
 * If the mover goes off the canvas, wrap it around
 */
function wrapTarget() {
  // We need to check if the mover has gone off the left or right, top or bottom, one at a time

  // Left or right
  if (target.x < 0) {
    target.x = width;
  }
  else if (target.x > width) {
    // In this case width minus the target's x will move it to the
    // other side! Math!
    target.x = 0;
  }

  // Top or bottom
  if (target.y < 0) {
    target.y = height;
  }
  else if (target.y > height) {
    // Same idea
    target.y = 0;
  }
}

function wrapPuck() {
  // We need to check if the puck has gone off the left or right, top or bottom, one at a time

  // Left or right
  if (puck.x < 0) {
    puck.x = width;
  }
  else if (puck.x > width) {
    // In this case width minus the puck's x will move it to the
    // other side! Math!
    puck.x = 0;
  }

  // Top or bottom
  if (puck.y < 0) {
    puck.y = height;
  }
  else if (puck.y > height) {
    // Same idea
    puck.y = 0;
  }
}
// this is intentionnally weird
function wrapUser() {
  // We need to check if the user has gone off the left or right, top or bottom, one at a time

  // Left or right
  if (user.x < 0 || user.x > width) {
    // In this case width minus the user's x will move it to the
    // other side! Math!
    user.x = width - user.x;
  }

  // Top or bottom
  if (user.y < 0 || user.y > height) {
    // Same idea
    user.y = height - user.y;
  }
}