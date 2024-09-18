<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> 
    <title>Jogo</title>
</head>
<body>
    <div id="menu">
        <h1>Bem-vindo ao Jogo!</h1>
        <button id="startButton">Iniciar</button>
        <button id="instructionsButton">Instruções</button>
    </div>
    
    <canvas id="gameCanvas"></canvas>
    
    <div id="scoreBoard">Pontuação: 0</div>
    <div id="livesBoard">Vidas: 4</div>

    <div id="gameOverScreen">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: <span id="finalScore"></span></p>
        <p>Pressione R para reiniciar</p>
        <button id="restartButton">Reiniciar</button>
    </div>

    <audio id="hitSound" src="hit.mp3"></audio>
    <audio id="powerUpSound" src="powerup.mp3"></audio>
    <audio id="shootSound" src="shoot.mp3"></audio>

    <script src="game.js"></script>
</body>
</html>
