<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" , content="width=device-width, initial-scale=1.0">
    <title>Flappy Bird</title>

    <link rel="stylesheet" href="../style/catalog.css">
    <link rel="stylesheet" href="../global.css">
    <link rel="stylesheet" href="../style/navBar.css">
    <link rel="stylesheet" href="../style/sideMenu.css">
    <link rel="stylesheet" href="../style/gameOverPopUp.css">
    <link rel="stylesheet" href="../style/flappybird.css">

    <script src="../script.js"></script>

    <script src="../script/menuScript.js"></script>
    <script src="../script/flappybird.js"></script>
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

    <div class="main center" id="game_container">
        <canvas id="board"></canvas>
        <div id="game_controls">
            <button onclick="startGame()" class="gameStart" id="start_game">Iniciar Jogo</button>
        </div>

        <div id="gameOverPopUp" class="popUp">
            <div class="popUp-content">
                <div class="popUp-header">
                    <h2>Game Over!</h2>
                </div>
                <div class="popUp-footer">
                    <form method="POST">
                        <label for="name">Insira seu nome:</label><br>
                        <input class="input" type="text" name="name" id="name">
                        <input style="display: none" type="text" name="scoreInput" id="scoreInput" readonly>
                        <button class="send" type="submit" name="restart_game" id="restart_game"
                            value="salvar">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="tLeft">
            <h3>Como jogar?</h3>
            <ul>
                <li>Utilize a seta para cima ou espaço para subir.</li>
            </ul>
        </div>
        <div class="tRight">
            <h3>Créditos:</h3>
            <ul>
                <li>Feito por Arthur Martin.</li>
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

</html>
<?php
if (filter_input(type: INPUT_POST, var_name: 'restart_game')) {
    $nome = filter_input(type: INPUT_POST, var_name: 'name');
    $pontucacao = filter_input(type: INPUT_POST, var_name: 'scoreInput');

    $dados = array(
        'name' => $nome,
        'score' => $pontucacao
    );

    include_once '../class/flappyBirdScore.php';
    $bird = new FlappyBird();

    $bird->setJsonDados(jsonDados: json_encode(value: $dados));

    $msg = $bird->salvar() === true ? "Erro ao salvar!" : "Dados salvos! :)";

    echo "<script type='text/javascript'>alert('$msg');</script>";
}
?>