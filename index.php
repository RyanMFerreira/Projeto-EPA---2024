<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="global.css">
    <link rel="stylesheet" href="style/main.css">
    <link rel="stylesheet" href="style/navBar.css">
    <link rel="stylesheet" href="style/sideMenu.css">

    <script src="script/menuScript.js"></script>

    <title>Início</title>
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
        <li class="active"><a href="#">Início</a></li>
        <li><a href="catalog.php">Catálogo</a></li>
        <li><a href="score.php">Placar</a></li>
        <li class="right">
            <a class="openbtn" onclick="toggleMenu()" href="#">Menu</a>
        </li>
    </ul>

    <div class="main">
    <div class="content">
        <h1 class="title">Projeto EPA - 2024</h1>
        <a href="catalog.php"><button class="start">Começar a jogar!</button></a><br>
        <p>Explore mini-jogos, acompanhe seu placar <br>e divirta-se em nosso Projeto!</p>
    </div>
    <div class="side">
        <div class="mainImage"><img src="assets/main.png" alt="Imagem Principal"></div>
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
    </footer>
</body>

</html>

<?php
