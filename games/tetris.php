<!DOCTYPE p>
<p lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tetris</title>

    <link rel="stylesheet" href="../style/catalog.css">
    <link rel="stylesheet" href="../global.css">
    <link rel="stylesheet" href="../style/navBar.css">
    <link rel="stylesheet" href="../style/sideMenu.css">
    <link rel="stylesheet" href="../style/gameOverPopUp.css">

    <script src="../script.js"></script>
    <script src="../script/menuScript.js"></script>

    <link rel="stylesheet" href="../style/tetris.css">
</head>

<body>
    <div id="mySidepanel" class="sidepanel">
        <a href="#" class="closebtn" onclick="toggleMenu()">&times;</a>
        <a href="#">Sobre</a>
        <a href="#">Créditos</a>
        <a href="#" onclick="showUILimiters()">Exibir limites UI</a>
    </div>

    <ul class="navBar">
        <li><a class="logoText" href="#">Projeto EPA 2024</a></li>
        <li><a href="../index.php">Início</a></li>
        <li><a href="../catalog.php">Catálogo</a></li>
        <li><a href="../score.php">Placar</a></li>
        <li class="right">
            <a class="openbtn" onclick="toggleMenu()" href="#">Menu</a>
        </li>
    </ul>

    <a class="backA" href="../catalog.php">Voltar ao catálogo</a>
    <div class="main" id="game_container">
        <div class="center">
            <div id="score">Score: 0</div>
            <canvas id="tetris" width="200" height="400"></canvas>
        </div>
        <div id="game_controls">
            <button id="start_game">Iniciar Jogo</button>
        </div>

        <div id="myModal" class="popUp">
            <div class="popUp-content">
                <div class="popUp-header">
                    <h2>Game Over!</h2>
                </div>
                <div class="popUp-body">
                    <div>
                        <label for="name">Insira seu nome:</label><br>
                        <input class="input" type="text" name="name" id="name">
                    </div>
                </div>
                <div class="popUp-footer">
                    <button class="send" id="restart_game" disabled>Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="tLeft">
            <h3>Como jogar?</h3>
            <ul>
                <li>Utilize as setas esquerda/direita para mover.</li>
                <li>Seta para cima para rotacionar a peça.</li>
                <li>Seta para baixo para aumentar a velocidade de caída.</li>
            </ul>
        </div>
        <div class="tRight">
            <h3>Créditos:</h3>
            <ul>
                <li>Feito por Murilo Andrade.</li>
                <li>Aprimorado por Ryan Ferreira.</li>
            </ul>
        </div>
    </div>
    <script src="../script/tetris.js"></script>

    <footer class="footer">
        <div class="footerInline">
            <div class="footerDiv">
                <h4>Membros:</h4>
                <ul>
                    <li>Ryan Ferreira</li>
                    <li>Arthur Martin</li>
                    <li>Murilo Rossi</li>
                    <li>Matheus Faria</li>
                </ul>
            </div>
            <div>
                <h4>Info:</h4>
                <ul>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </div>
        </div>
    </footer>
</body>

</p>