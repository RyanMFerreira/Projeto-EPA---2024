let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

let hitBoxAdjust_xSize = 36;
let hitBoxAdjust_xPosition = 12;

let dinoWidth = 88 - hitBoxAdjust_xSize;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth,
    height: dinoHeight
}

let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

let velocityX = -8;
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");


    dinoImg = new Image();
    dinoImg.src = "../assets/dinoAssets/dino.png";
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cactus1Img = new Image();
    cactus1Img.src = "../assets/dinoAssets/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "../assets/dinoAssets/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "../assets/dinoAssets/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
    document.addEventListener("keydown", moveDino);
}

function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        console.log(gameOver);
        console.log();
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);


    context.fillStyle = "red";
    context.fillRect(dino.x, dino.y, dino.width, dino.height);
    context.drawImage(dinoImg, dino.x  - hitBoxAdjust_xPosition, dino.y, dino.width + hitBoxAdjust_xSize, dino.height);

    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "../assets/dinoAssets/dino-dead.png";
            dinoImg.onload = function () {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width + 24, dino.height);
            }
        }
    }

    context.fillStyle = "black";
    context.font = "20px courier";
    score++;
    context.fillText(score, 5, 20);
}

function moveDino(e) {
    if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        //jump
        velocityY = -10;
    }
    else if (e.code == "ArrowDown" && dino.y == dinoY) {
    }

}

function placeCactus() {

    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random();

    if (placeCactusChance > .90) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) {
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .50) {
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5) {
        cactusArray.shift();
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}