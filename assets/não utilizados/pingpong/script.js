const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


canvas.width = 800;
canvas.height = 600;


const player = {
    width: 10,
    height: 100,
    x: 10,
    y: canvas.height / 2 - 50,
    dy: 0,
    speed: 6,
    color: 'white',
    score: 0
};


const computer = {
    width: 10,
    height: 100,
    x: canvas.width - 20,
    y: canvas.height / 2 - 50,
    dy: 4,
    color: 'white',
    score: 0
};


const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    dx: 5,
    dy: 4,
    color: 'white'
};


const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");


function drawPaddle(paddle) {
    ctx.fillStyle = paddle.color;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}


function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    
    if (ball.x - ball.radius < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx *= -1;
    }

    
    if (ball.x + ball.radius > computer.x && ball.y > computer.y && ball.y < computer.y + computer.height) {
        ball.dx *= -1;
    }

    
    if (ball.x + ball.radius < 0) {
        computer.score++;
        updateScore();
        resetBall();
    }

    if (ball.x - ball.radius > canvas.width) {
        player.score++;
        updateScore();
        resetBall();
    }
}


function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = Math.abs(ball.dx) * (Math.random() > 0.5 ? 1 : -1); 
    ball.dy = Math.abs(ball.dy) * (Math.random() > 0.5 ? 1 : -1); 
}


function movePlayer() {
    player.y += player.dy;

    if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
    }
}


function moveComputer() {
    if (computer.y + computer.height / 2 < ball.y) {
        computer.y += computer.dy;
    } else {
        computer.y -= computer.dy;
    }

    if (computer.y < 0) {
        computer.y = 0;
    } else if (computer.y + computer.height > canvas.height) {
        computer.y = canvas.height - computer.height;
    }
}


function updateScore() {
    playerScoreEl.textContent = player.score;
    computerScoreEl.textContent = computer.score;
}


function update() {
    movePlayer();
    moveBall();
    moveComputer();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle(player);
    drawPaddle(computer);
    drawBall();
}


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        player.dy = -player.speed;
    } else if (e.key === "ArrowDown") {
        player.dy = player.speed;
    }
});

document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        player.dy = 0;
    }
});

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
