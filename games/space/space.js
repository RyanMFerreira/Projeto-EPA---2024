const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

const player = {
    x: 50,
    y: canvas.height / 2 - 15,
    width: 30,
    height: 30,
    color: "blue",
    speed: 5,
    bulletType: "normal"
};

const bullets = [];
const enemies = [];
const powerUps = [];
let score = 0;
let lives = 4;
let enemySpawnRate = 1800; 
let gameOver = false;
let phaseDuration = 1000000; 
let phaseStartTime;

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
    ctx.fillStyle = "red";
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
}

function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

function drawPowerUps() {
    powerUps.forEach(powerUp => {
        ctx.fillStyle = "gold";
        ctx.fillRect(powerUp.x, powerUp.y, powerUp.width, powerUp.height);
    });
}

function update() {
    if (gameOver) {
        displayGameOver();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    drawEnemies();
    drawPowerUps();

    bullets.forEach((bullet, bulletIndex) => {
        bullet.x += bullet.speed;
        if (bullet.x > canvas.width) {
            bullets.splice(bulletIndex, 1);
        }
    });

    enemies.forEach((enemy, enemyIndex) => {
        enemy.x += enemy.speed;
        if (enemy.x + enemy.width < 0) {
            enemies.splice(enemyIndex, 1);
            lives--;
            document.getElementById("livesBoard").innerText = `Vidas: ${lives}`;
            if (lives <= 0) {
                gameOver = true;
            }
        }
    });

    powerUps.forEach((powerUp, powerUpIndex) => {
        powerUp.x += powerUp.speed;
        if (powerUp.x + powerUp.width < 0) {
            powerUps.splice(powerUpIndex, 1);
        }
    });

    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            if (bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y) {
                score++;
                document.getElementById("scoreBoard").innerText = `Pontuação: ${score}`;
                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
                document.getElementById("hitSound").play();
            }
        });
    });

    powerUps.forEach((powerUp, powerUpIndex) => {
        if (player.x < powerUp.x + powerUp.width &&
            player.x + player.width > powerUp.x &&
            player.y < powerUp.y + powerUp.height &&
            player.y + player.height > powerUp.y) {
            powerUps.splice(powerUpIndex, 1);
            player.bulletType = "power"; 
            document.getElementById("powerUpSound").play();
        }
    });

    if (score > 0 && score % 5 === 0) {
        enemySpawnRate = Math.max(1000, enemySpawnRate - 200); 
    }

    if (Date.now() - phaseStartTime >= phaseDuration) {
        endPhase();
    }

    requestAnimationFrame(update);
}

function spawnEnemy() {
    if (gameOver) return;

    const enemy = {
        x: canvas.width,
        y: Math.random() * (canvas.height - 30),
        width: 30 + Math.random() * 20,
        height: 30 + Math.random() * 20,
        speed: -3 - Math.random() * 2,
        color: ["green", "orange", "purple"][Math.floor(Math.random() * 3)],
    };
    enemies.push(enemy);
}

function spawnPowerUp() {
    if (Math.random() < 0.3) {
        const powerUp = {
            x: canvas.width,
            y: Math.random() * (canvas.height - 20),
            width: 20,
            height: 20,
            speed: -2,
        };
        powerUps.push(powerUp);
    }
}

function movePlayer(directionX, directionY) {
    player.x += directionX * player.speed;
    player.y += directionY * player.speed;

    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        const bullet = {
            x: player.x + player.width,
            y: player.y + 10,
            width: 10,
            height: 5,
            speed: player.bulletType === "normal" ? 5 : 10,
        };
        bullets.push(bullet);
        document.getElementById("shootSound").play();
    }
});

const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false
};

window.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
});

function updateMovement() {
    let directionX = 0;
    let directionY = 0;

    if (keys.ArrowLeft) directionX = -1;
    if (keys.ArrowRight) directionX = 1;
    if (keys.ArrowUp) directionY = -1;
    if (keys.ArrowDown) directionY = 1;

    movePlayer(directionX, directionY);
}

function endPhase() {
    gameOver = true;
    displayGameOver();
}

function displayGameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText(`Fim de Jogo!`, canvas.width / 2 - 100, canvas.height / 2 - 40);
    ctx.fillText(`Pontuação: ${score}`, canvas.width / 2 - 100, canvas.height / 2);
    ctx.font = "20px Arial";
    ctx.fillText(`Pressione R para reiniciar`, canvas.width / 2 - 130, canvas.height / 2 + 40);
    
    document.getElementById("gameOverScreen").style.display = "block"; 
    document.getElementById("finalScore").innerText = score; 
}

function resetPhase() {
    score = 0;
    lives = 4;
    enemies.length = 0;
    powerUps.length = 0;
    gameOver = false;
    phaseStartTime = Date.now();
    document.getElementById("scoreBoard").innerText = `Pontuação: ${score}`;
    document.getElementById("livesBoard").innerText = `Vidas: ${lives}`;
    update();
    document.getElementById("gameOverScreen").style.display = "none"; 
}

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";
    resetPhase(); 
    setInterval(spawnEnemy, enemySpawnRate);
    setInterval(spawnPowerUp, 5000);
});

document.getElementById("instructionsButton").addEventListener("click", () => {
    alert("Use a barra de espaço para atirar. Use as setas para mover em todas as direções. Colete power-ups para melhorar sua munição. Tente sobreviver o máximo possível!");
});

window.addEventListener("keydown", (e) => {
    if (gameOver && e.key === "r") {
        resetPhase();
    }
});

update();
setInterval(updateMovement, 1000 / 60);
document.getElementById("restartButton").addEventListener("click", resetPhase);
