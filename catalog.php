<!DOCTYPE html>
<html lang="en">

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
                    <div class="temp" style="background-image: url(assets/catalogAssets/tetris.png); background-size: 256px"></div>
                    <div class="container">
                        <h4><b>Tetris</b></h4>
                        <p>Feito por Murilo Andrade.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="games/flappybird.php">
                    <div class="temp" style="background-image: url(assets/catalogAssets/flappyBird.png); background-size: 256px"></div>
                    <div class="container">
                        <h4><b>Flappy Bird</b></h4>
                        <p>Feito por Arthur Martin.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="games/snake.php">
                    <div class="temp" style="background-image: url(assets/catalogAssets/snake.png); background-size: 256px"></div>
                    <div class="container">
                        <h4><b>Snake</b></h4>
                        <p>Feito por Ryan Ferreira.</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="games/dino.php">
                <div class="temp" style="background-image: url(assets/catalogAssets/dino.png); background-size: 256px"></div>
                <div class="container">
                    <h4><b>Dino Game</b></h4>
                    <p>Feito por Ryan Ferreira.</p>
                </div>
                </a>
            </div>
            <div class="card">
                <a href="games/breakout.php">
                    <div class="temp" style="background-image: url(assets/catalogAssets/breakout.png); background-size: 256px"></div>
                    <div class="container">
                        <h4><b>Breakout</b></h4>
                        <p>Feito por Arthur Martin.</p>
                    </div>
                </a>
            </div>            
            <div class="card">
                <a href="games/space.php">
                    <div class="temp" style="background-image: url(assets/catalogAssets/space.png); background-size: 256px;"></div>
                    <div class="container">
                        <h4><b>Space</b></h4>
                        <p>Feito por Matheus Faria.</p>
                    </div>
                </a>
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

</html>

<?php
