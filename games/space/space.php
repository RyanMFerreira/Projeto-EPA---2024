<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> 
    <title>Jogo</title>
</head>
<body>
    <div id="menu" class="text-center mt-5">
        <h1>Bem-vindo ao Jogo!</h1>
        <p>Made by Matheus Souza De Faria</p>
        <button id="startButton">Iniciar</button>
        <button id="instructionsButton">Instruções</button>
    </div>
    
    <canvas id="gameCanvas"></canvas>

    <div id="scoreBoard">Pontuação: 0</div>
    <div id="livesBoard">Vidas: 4</div>

    <div id="gameOverScreen" style="display: none; text-align: center; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); color: white;">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: <span id="finalScore"></span></p>
        <button id="restartButton">Reiniciar Jogo</button>
    </div>
    
    <audio id="hitSound" src="hit.mp3"></audio>
    <audio id="powerUpSound" src="powerup.mp3"></audio>
    <audio id="shootSound" src="shoot.mp3"></audio>

    <script src="game.js"></script>
</body>
</html>
