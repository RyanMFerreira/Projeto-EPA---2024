var blockSize = 20;
var rows = 20;
var cols = 40;
var board;
var context;

var snakeX = [blockSize * (cols / 2)];
var snakeY = [blockSize * (rows / 2)];

var snakeSize = 3;

var velocityX = 0;
var velocityY = 0;

var foodX;
var foodY;

var score = 0;

var gameOver = false;

var count = 0;
let lastKey = '';

function start() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    var startGameButton = document.getElementById('start_game');
    startGameButton.style.display = 'none';

    var showScore = document.getElementById('score');
    showScore.style.display = 'block';

    var gameBoard = document.getElementById('board');
    gameBoard.style.display = 'block';

    placeFood();
    document.addEventListener("keyup", changeDirection);

    setInterval(update, 100);
}

function update() {
    console.log("GameOver");
    console.log("X [0]: " + snakeX[0]);
    console.log("Y [0]: " + snakeY[0]);
    console.log("Size: " + snakeSize);
    console.log("DX: " + velocityX);
    console.log("DY: " + velocityX);
    console.log("Ultima tecla: " + lastKey);

    count++;
    if (count > 1) {
        console.clear();
        count = 0;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX[0] === foodX && snakeY[0] === foodY) {
        placeFood();
        snakeSize++;
        score++;
        updateScore();
    }

    for (let i = snakeSize; i > 0; i--) {
        snakeX[i] = snakeX[i - 1];
        snakeY[i] = snakeY[i - 1];
    }

    snakeX[0] += velocityX * blockSize;
    snakeY[0] += velocityY * blockSize;

    context.fillStyle = "lime";
    for (let i = 0; i < snakeSize; i++) {
        context.fillRect(snakeX[i], snakeY[i], blockSize, blockSize);
    }

    if (snakeX[0] < 0 || snakeX[0] >= cols * blockSize || snakeY[0] < 0 || snakeY[0] >= rows * blockSize) {
        gameOver = true;
    }

    for (let i = 3; i < snakeSize; i++) {
        if (snakeX[0] === snakeX[i] && snakeY[0] === snakeY[i]) {
            gameOver = true;
        }
    }

    if (gameOver === true) {
        gameOverFunction();
    }
}

function changeDirection(e) {
    if (e.code === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
        lastKey = 'up';
    }
    else if (e.code === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
        lastKey = 'down';
    }
    else if (e.code === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
        lastKey = 'left';
    }
    else if (e.code === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
        lastKey = 'right';
    }
}

function restartGame() {
    gameOver = false;

    score = 0;
    snakeSize = 3;

    snakeX = [blockSize * (cols / 2)];
    snakeY = [blockSize * (rows / 2)];

    velocityX = 0;
    velocityY = 0;
}

function gameOverFunction() {
    restartGame();
    openPopUp();
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function updateScore() {
    document.getElementById('score').textContent = "Pontuação: " + score;

    var input = document.getElementById('scoreInput');
    input.value = score;
}

function openPopUp() {
    var popUp = document.getElementById("myModal");
    popUp.style.display = "block";
}

function closePopUp() {
    var popUp = document.getElementById("myModal");
    popUp.style.display = "none";
}