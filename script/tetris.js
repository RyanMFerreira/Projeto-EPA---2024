(function () {
    const canvas = document.getElementById("tetris");
    const context = canvas.getContext("2d");
    context.scale(20, 20);

    const colors = [
        null,
        '#FF5733', // 1
        '#40E0D0', // 2
        '#3357FF', // 3
        '#0000CD', // 4
        '#FF33F6', // 5
        '#FF0000', // 6
        '#FFBF00'  // 7
    ];

    function makeMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }

    function makePiece(type) {
        switch (type) {
            case "t": return [[0, 5, 0],
            [5, 5, 5],
            [0, 0, 0]];

            case "o": return [[7, 7],
            [7, 7]];

            case "l": return [[0, 4, 0],
            [0, 4, 0],
            [0, 4, 4]];

            case "j": return [[0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]];

            case "i": return [[0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]];

            case "s": return [[0, 3, 3],
            [3, 3, 0],
            [0, 0, 0]];

            case "z": return [[6, 6, 0],
            [0, 6, 6],
            [0, 0, 0]];
        }
    }

    function points() {
        let rowCount = 1;
        outer: for (let y = area.length - 1; y >= 0; --y) {
            for (let x = 0; x < area[y].length; ++x) {
                if (area[y][x] === 0) {
                    continue outer;
                }
            }
            const row = area.splice(y, 1)[0].fill(0);
            area.unshift(row);
            player.score += rowCount * 100;
            updateScore();
            rowCount *= 2;
        }
    }

    function collide(area, player) {
        const [m, o] = [player.matrix, player.pos];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 && (area[y + o.y] && area[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    function drawMatrix(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    context.fillStyle = colors[value];
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);

                    context.strokeStyle = "#000";
                    context.lineWidth = 0.1;
                    context.strokeRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    function merge(area, player) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    area[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    function rotate(matrix, dir) {
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
            }
        }
        if (dir > 0) {
            matrix.forEach(row => row.reverse());
        } else {
            matrix.reverse();
        }
    }

    function playerReset() {
        const pieces = "ijlostz";
        player.matrix = makePiece(pieces[Math.floor(Math.random() * pieces.length)]);
        player.pos.y = 0;
        player.pos.x = Math.floor(area[0].length / 2) - Math.floor(player.matrix[0].length / 2);

        if (collide(area, player)) {
            area.forEach(row => row.fill(0));
            player.score = 0;
            updateScore();
            gameOver();
        }
    }

    function playerDrop() {
        player.pos.y++;
        if (collide(area, player)) {
            player.pos.y--;
            merge(area, player);
            points();
            playerReset();
        }
    }

    function playerMove(dir) {
        player.pos.x += dir;
        if (collide(area, player)) {
            player.pos.x -= dir;
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#3245";
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawMatrix(area, { x: 0, y: 0 });
        drawMatrix(player.matrix, player.pos);
    }

    function update() {
        if (!gameRun) return;
        time++;
        if (time >= dropInterval) {
            playerDrop();
            time = 0;
        }
        draw();
    }

    function updateScore() {
        document.getElementById('score').textContent = "Score: " + player.score;
    }

    function gameOver() {
        clearInterval(gameLoop);

        var gameOver = document.getElementById('game_over');
        gameOver.style.display = 'block';

        var restartGameButton = document.getElementById('restart_game');
        restartGameButton.style.display = 'block';

        document.getElementById('game_over').textContent = "Game Over";
        document.getElementById("start_game").disabled = true;
        document.getElementById("restart_game").disabled = false;
    }

    function restartGame() {
        var tetrisElement = document.getElementById('tetris');
        tetrisElement.style.display = 'block';

        var scoreElement = document.getElementById('score');
        scoreElement.style.display = 'block';

        var startGame = document.getElementById('start_game');
        startGame.style.display = 'none';

        area = makeMatrix(10, 20);
        player = {
            matrix: makePiece("t"),
            pos: { x: 0, y: 0 },
            score: 0
        };
        time = 0;
        gameRun = true;
        dropInterval = 30;
        gameLoop = setInterval(update, dropInterval);
        document.getElementById("start_game").disabled = true;
        document.getElementById("restart_game").disabled = true;
        document.getElementById('game_over').textContent = "";
        updateScore();
    }

    let area = makeMatrix(10, 20);
    let player = {
        matrix: makePiece("t"),
        pos: { x: 0, y: 0 },
        score: 0
    };
    let dropInterval = 100;
    let time = 0;
    let gameRun = false;
    let gameLoop;

    function increaseSpeed() {
        if (dropInterval > 20) {
            dropInterval -= 10;
        }
    }

    document.getElementById("start_game").addEventListener("click", () => {
        if (!gameRun) {
            restartGame();
        }
    });

    document.getElementById("restart_game").addEventListener("click", () => restartGame());

    document.addEventListener("keydown", (e) => {
        if (!gameRun) return;
        if (e.key === "ArrowLeft") {
            playerMove(-1);
        } else if (e.key === "ArrowRight") {
            playerMove(1);
        } else if (e.key === "ArrowDown") {
            playerDrop();
        } else if (e.key === "ArrowUp") {
            rotate(player.matrix, 1);
        }
    });


    setInterval(() => {
        if (gameRun) {
            increaseSpeed();
        }
    }, 1000);
})();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}