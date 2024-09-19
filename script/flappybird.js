//board
let board;
let boardWidth = 1024; 
let boardHeight = 640;
let context;

//passáro
let birdWidth = 34; //razão de altura para largura = 17/12
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

//canos
let pipeArray = [];
let pipeWidth = 64; 
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//fisicas
let velocityX = -8; //velocidade dos canos movendo para a esquerda
let velocityY = 0;
let gravity = 0.25; //gravidade dificil de balancear

let gameOver = false;
var score = 0;

function startGame() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    var startGame = document.getElementById('start_game');
    startGame.style.display = 'none';

    var gameBoard = document.getElementById('board');
    gameBoard.style.display = 'block';

    //carrega images
    birdImg = new Image();
    birdImg.src = "./../assets/flappyBirdAssets/flappybird.png";
    birdImg.onload = function () {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "../assets/flappyBirdAssets/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "../assets/flappyBirdAssets/bottompipe.png";

    //velocidade de aparecimento dos canos 
    requestAnimationFrame(update);
    setInterval(placePipes, 1000); //gera um cano a cada 1.5 segundos
    document.addEventListener("keydown", moveBird);
}

function update() {
    if (!gameOver) {
        requestAnimationFrame(update);
        context.clearRect(0, 0, board.width, board.height);
        velocityY += gravity;
                bird.y = Math.max(bird.y + velocityY, 0);
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

        if (bird.y > board.height) {
            gameOver = true;
        }

        //canos
        for (let i = 0; i < pipeArray.length; i++) {
            let pipe = pipeArray[i];
            pipe.x += velocityX;
            context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

            if (!pipe.passed && bird.x > pipe.x + pipe.width) {
                score += 0.5; //0.5 pois tem 2 canos
                updateScore();
                console.log(score);
                pipe.passed = true;
            }

            if (detectCollision(bird, pipe)) {
                gameOver = true;
            }
        }

        //limpar canos
        while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
            pipeArray.shift();
        }

        //pontuação
        context.fillStyle = "white";
        context.font = "45px sans-serif";
        context.fillText("Pontuação: " + score, 5, 45);

        if (gameOver) {
            context.fillText("Pressione espaço para recomeçar", 5, 90);
            openPopUp();
        }
    }
}

//função para colocar canos
function placePipes() {

    //variaveis para modificar o espaçamento dos canos 
    let randomPipeY = pipeY - pipeHeight / 2 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 4;

    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArray.push(bottomPipe);
}


//pulo e finalizar jogo
function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //altura do pulo
        velocityY = -6;

        //reiniciar jogo
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

//colisão
function detectCollision(a, b) {
    return a.x < b.x + b.width &&  
        a.x + a.width > b.x &&  
        a.y < b.y + b.height &&  
        a.y + a.height > b.y;
}

function openPopUp() {
    var popUp = document.getElementById("gameOverPopUp");
    popUp.style.display = "block";
}

function closePopUp() {
    var popUp = document.getElementById("gameOverPopUp");
    popUp.style.display = "none";
}

function updateScore() {
    var input = document.getElementById('scoreInput');
    input.value = score;
}