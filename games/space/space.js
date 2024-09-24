function start() {
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;

    document.getElementById('center').style.display = 'block';
    document.getElementById('game_controls').style.display = 'none';

    const player = {
        x: 50,
        y: canvas.height / 2,
        width: 30,
        height: 30,
        color: "lime",
        speed: canvas.height / 15,
    };

    const bullets = [];
    const enemy = {
        x: canvas.width,
        y: Math.random() * (canvas.height / 15),
        width: 30,
        height: 30,
        speed: -3,
        color: "red",
    };

    let score = 0;
    let lives = 4;
    let gameOver = false;

    function atualizarJogo() {
        document.getElementById('lives').textContent = "Vidas: " + lives;

        if (gameOver) {
            mostrarGameOver();
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);

        ctx.fillStyle = "red";
        for (let i = 0; i < bullets.length; i++) {
            const bullet = bullets[i];
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        }

        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

        for (let i = 0; i < bullets.length; i++) {
            const bullet = bullets[i];
            bullet.x += bullet.speed;
            if (bullet.x > canvas.width) {
                bullets.splice(i, 1);
                i--;
            }
        }

        enemy.x += enemy.speed;
        if (enemy.x + enemy.width < 0) {
            enemy.x = canvas.width;

            lives -= 1;

            console.log("Lives: " + lives)
        }

        for (let i = 0; i < bullets.length; i++) {
            const bullet = bullets[i];
            if (bullet.x <= enemy.x + enemy.width &&
                bullet.x + bullet.width >= enemy.x &&
                bullet.y <= enemy.y + enemy.height &&
                bullet.y + bullet.height >= enemy.y) {

                atualizarPontuacao();

                bullets.splice(i, 1);
                i--;

                console.log("PosX Bullet: " + bullet.x)
                console.log("PosX Enemy: " + enemy.x)

                enemy.x = canvas.width;
                enemy.y = Math.random() * (canvas.height - 30);
            }
        }

        if (lives <= 0) {
            gameOver = true;
            console.log("Game Over: " + gameOver)
        }

        requestAnimationFrame(atualizarJogo);
    }

    function moverJogador(direcao) {
        switch (direcao) {
            case "ArrowLeft":
                player.x -= player.speed;
                break;
            case "ArrowRight":
                player.x += player.speed;
                break;
            case "ArrowUp":
                player.y -= player.speed;
                break;
            case "ArrowDown":
                player.y += player.speed;
                break;
        }
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
    }

    function mostrarGameOver() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillText(`Fim de Jogo!`, canvas.width / 2 - 100, canvas.height / 2 - 40);
        ctx.fillText(`Pontuação: ${score}`, canvas.width / 2 - 100, canvas.height / 2);
        openPopUp();
        resetarJogo();
    }

    function resetarJogo() {
        score = 0;
        lives = 4;
        enemy.x = canvas.width;
        gameOver = false;
        atualizarJogo();
    }

    window.addEventListener("keydown", (e) => {
        if (gameOver && e.key === "r") {
            resetarJogo();
        }
        moverJogador(e.key);

        if (e.key === " ") {
            const bullet = {
                x: player.x + player.width,
                y: player.y + 10,
                width: 10,
                height: 5,
                speed: 7,
            };
            bullets.push(bullet);
        }
    });

    function atualizarPontuacao() {
        score += 1;
        document.getElementById('score').textContent = "Pontuação: " + score;

        // gambiarra pra enviar a pontuação para php. é meio tosco, mas é o que temos por hoje
        var input = document.getElementById('scoreInput');
        input.value = score;
    }

    atualizarJogo();
}

function openPopUp() {
    var popUp = document.getElementById("myModal");
    popUp.style.display = "block";
}

function closePopUp() {
    var popUp = document.getElementById("myModal");
    popUp.style.display = "none";

    restartGame();
}