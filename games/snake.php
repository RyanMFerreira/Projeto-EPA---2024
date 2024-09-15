<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake</title>
    <link rel="stylesheet" href="../style/snake.css">

    <link rel="stylesheet" href="../style/gameOverPopUp.css">
    <link rel="stylesheet" href="../style/catalog.css">
    <link rel="stylesheet" href="../global.css">
    <link rel="stylesheet" href="../style/navBar.css">
    <link rel="stylesheet" href="../style/sideMenu.css">

    <script src="../script.js"></script>
    <script src="../script/menuScript.js"></script>

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
            <h2 name="score" id="score">Pontuação:</h2>
            <canvas id="board"></canvas>
        </div>
        <div id="game_controls">
            <button onclick="start()" id="start_game">Iniciar Jogo</button>
        </div>

        <div id="myModal" class="popUp">
            <div class="popUp-content">
                <div class="popUp-header">
                    <h2>Game Over!</h2>
                </div>
                <div class="popUp-body">
                    <div>
                        <form method="POST">
                            <label for="name">Insira seu nome:</label><br>
                            <input class="input" type="text" name="name" id="name">
                            <label for="name">Pontuação: </label><br>
                            <input class="input" type="number" name="score" id="score">
                            <button type="submit" name="restart_game" id="restart_game" value="salvar">Enviar</button>
                        </form>
                    </div>
                </div>
                <div class="popUp-footer">
                </div>
            </div>
        </div>

        <script src="../script/snake.js"></script>

    </div>
    <div class="main">
        <div class="tLeft">
            <h3>Como jogar?</h3>
            <ul>
                <li>Utilize as setas para se mover pelas quatro direções.</li>
            </ul>
        </div>
        <div class="tRight">
            <h3>Créditos:</h3>
            <ul>
                <li>Feito por Ryan Ferreira.</li>
            </ul>
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

<?php
if (filter_input(INPUT_POST, 'restart_game')) {
    $nome = filter_input(INPUT_POST, 'name');
    $pontuacao = filter_input(INPUT_POST, 'score');

    $dados = array(
        'name' => $nome,
        'score' => $pontucacao
    );

    include_once '../class/snakeScore.php';
    $snake = new Snake();

    $snake->setJsonDados(json_encode($dados));

    $msg = $snake->salvar() === true ? "Erro" : "Dados salvo";

    echo "<script type='text/javascript'>alert('$msg');</script>";
}