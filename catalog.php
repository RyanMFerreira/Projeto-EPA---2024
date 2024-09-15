<!DOCTYPE php>
<php lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style/catalog.css">
    <link rel="stylesheet" href="global.css">
    <link rel="stylesheet" href="style/navBar.css">
    <link rel="stylesheet" href="style/sideMenu.css">

    <script src="script/menuScript.js"></script>

    <title>Catálogo</title>
</head>

<body>
    <div id="mySidepanel" class="sidepanel">
        <a href="#" class="closebtn" onclick="toggleMenu()">×</a>
        <a href="#">Sobre</a>
        <a href="#">Créditos</a>
        <a href="#" onclick="showUILimiters()">Exibir limites UI</a>
    </div>

    <ul class="navBar">
        <li><a class="logoText" href="#">Projeto EPA 2024</a></li>
        <li><a href="index.php">Início</a></li>
        <li class="active"><a href="#">Catálogo</a></li>
        <li><a href="score.php">Placar</a></li>
        <li class="right">
            <a class="openbtn" onclick="toggleMenu()" href="#">Menu</a>
        </li>
    </ul>

    <div class="main x">
        <h2>Catálogo:</h2>
        <div class="inline">
            <div class="card">
                <a href="games/tetris.php">
                    <div class="temp"></div>
                    <div class="container">
                        <h4><b>Tetris</b></h4>
                        <p>Feito por Murilo Andrade.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="games/flappybird.php">
                    <div class="temp"></div>
                    <div class="container">
                        <h4><b>Flappy Bird</b></h4>
                        <p>Feito por Arthur Martin.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="games/snake.php">
                    <div class="temp"></div>
                    <div class="container">
                        <h4><b>Snake</b></h4>
                        <p>Feito por Ryan Ferreira.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="naoSeiSeChamarOMatheusFoiRealmenteUmaBoaIdeia/forca.php">
                    <div class="temp"></div>
                    <div class="container">
                        <h4><b>Forca</b></h4>
                        <p>Feito por Matheus Faria.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <div class="temp"></div>
                <div class="container">
                    <h4><b>Jogo #5</b></h4>
                    <p>Descrição...</p>
                </div>
            </div>
        </div>
    </div>

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
        </div>
    </footer>
</body>

</php>

<?php
