/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0.1,
        y: 3
    }
};

const ball2 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: -0.5,
        y: 5
    }
};

const ball3 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 1,
        y: 2
    }
};

const ball4 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0.3,
        y: 4
    }
};

const ball5 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: -0.8,
        y: 1
    }
};

const ball6 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: -0.2,
        y: 3.5
    }
};

const ball7 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0.6,
        y: 2.5
    }
};

const ball8 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: -0.7,
        y: 1.5
    }
};

const ball9 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: -0.4,
        y: 3.5
    }
};

const ball10 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0.4,
        y: 5.5
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 50,
    height: 5
};

const paddle2 = {
    x: 300,
    y: 280,
    width: 50,
    height: 5
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddlePos(paddle);
    movePaddleNeg(paddle2);

    moveBall(ball);
    moveBall(ball2);
    moveBall(ball3);
    moveBall(ball4);
    moveBall(ball5);
    moveBall(ball6);
    moveBall(ball7);
    moveBall(ball8);
    moveBall(ball9);
    moveBall(ball10);

    handleBounce(ball, paddle || paddle2);
    handleBounce(ball2, paddle || paddle2);
    handleBounce(ball3, paddle || paddle2);
    handleBounce(ball4, paddle || paddle2);
    handleBounce(ball5, paddle || paddle2);
    handleBounce(ball6, paddle || paddle2);
    handleBounce(ball7, paddle || paddle2);
    handleBounce(ball8, paddle || paddle2);
    handleBounce(ball9, paddle || paddle2);
    handleBounce(ball10, paddle || paddle2);

    drawPaddle(paddle);
    drawPaddle(paddle2);

    drawBall(ball);
    drawBall(ball2);
    drawBall(ball3);
    drawBall(ball4);
    drawBall(ball5);
    drawBall(ball6);
    drawBall(ball7);
    drawBall(ball8);
    drawBall(ball9);
    drawBall(ball10);
}

/**
 * Moves the paddle
 */
function movePaddlePos(paddle) {
    paddle.x = mouseX

}

/**
 * Moves the paddle in the opposite direction
 */
function movePaddleNeg(paddle) {
    paddle.x = width - mouseX

}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x = ball.x + ball.velocity.x
    ball.y = ball.y + ball.velocity.y

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if (checkOverlap(ball, paddle)){
        ball.velocity.y = ball.velocity.y * -1
    }
    if (ball.y <= -1 ){
    ball.velocity.y = ball.velocity.y * -1
    }
    if (ball.x <= -1 ){
    ball.velocity.x = ball.velocity.x * -1
    }
    if (ball.x >= 601 ){
    ball.velocity.x = ball.velocity.x * -1
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}