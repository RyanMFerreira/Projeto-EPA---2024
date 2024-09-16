//board
let board;
let boardWidth = 1024; //320
let boardHeight = 640; //640
let context;

//passaro
let birdWidth = 34; //width/height ratio = 408/228 = 17/12
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
let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
let pipeHeight = 512;//espessura ou sei lá modifica a altura maxima pro cano de cima quando menor mais para cima o cano de cima ficará e quando maior mais baixo recomendo deixar em 512 a não ser que queira achatar
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//phisics
let velocityX = -2; //pipes moving left speed
let velocityY = 0; //bird jump speed
let gravity = 0.15; //gravidade dificil de balancear

let gameOver = false;
var score = 0;

function startGame() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    var startGame = document.getElementById('start_game');
    startGame.style.display = 'none';

    var gameBoard = document.getElementById('board');
    gameBoard.style.display = 'block';

    //draw flappy bard
    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);

    //load images
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
    setInterval(placePipes, 1500); //every 1.5 seconds
    document.addEventListener("keydown", moveBird);
}

function update() {
    if (!gameOver) {
        requestAnimationFrame(update);
        context.clearRect(0, 0, board.width, board.height);

        //bard
        velocityY += gravity;
        // bird.y += velocityY;
        bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y, limit the bird.y to top of the canvas
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
                score += 0.5; //0.5 because there are 2 pipes! so 0.5*2 = 1, 1 for each set of pipes
                updateScore();
                console.log(score);
                pipe.passed = true;
            }

            if (detectCollision(bird, pipe)) {
                gameOver = true;
            }
        }

        //clear canos
        while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
            pipeArray.shift(); //removes first element from the array
        }

        //score
        context.fillStyle = "white";
        context.font = "45px sans-serif";
        context.fillText("Pontuação: " + score, 5, 45);

        if (gameOver) {
            context.fillText("Pressione espaço para recomeçar", 5, 90);
            openPopUp();
        }
    }
}

//bagulho de colocar canos
function placePipes() {
    //(0-1) * pipeHeight/2.
    // 0 -> -128 (pipeHeight/4)
    // 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight

    //coisas para modificar o espaçamento dos canos 
    let randomPipeY = pipeY - pipeHeight / 3 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 2;

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
        //jump
        velocityY = -6;

        //reset geme dudu
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
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
        a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
        a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
        a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
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
    // gambiarra pra enviar a pontuação para php. é meio tosco, mas é o que temos por hoje
    var input = document.getElementById('scoreInput');
    input.value = score;
}