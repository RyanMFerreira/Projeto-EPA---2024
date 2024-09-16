<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style/score.css">
    <link rel="stylesheet" href="global.css">
    <link rel="stylesheet" href="style/navBar.css">
    <link rel="stylesheet" href="style/sideMenu.css">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/score.js"></script>
    <script src="script/menuScript.js"></script>

    <title>Placar de Jogadores</title>
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
        <li><a href="catalog.php">Catálogo</a></li>
        <li class="active"><a href="#">Placar</a></li>
        <li class="right">
            <a class="openbtn" onclick="toggleMenu()" href="#">Menu</a>
        </li>
    </ul>

    <div class="main">
        <h2>Placar de jogadores:</h2>

        <div class="tabs">
            <button class="tab-link tab" data-tab="jogo1">Snake</button>
            <button class="tab-link tab" data-tab="jogo2">Flappy Bird</button>
            <button class="tab-link tab" data-tab="jogo3">Tetris</button>
            <button class="tab-link tab" data-tab="jogo4">Jogo 4</button>
        </div>

        <div id="jogo1" class="tab-content">
            <table>
                <tr>
                    <th id="pos">Posição</th>
                    <th>Nome</th>
                    <th class="topRightBorder">Pontuação</th>
                </tr>

                <?php
                    include_once 'class/snakeScore.php';

                    $snake = new Snake();
                    $listar = $snake->listar();

                    if (!empty($listar)) {
                        $scores = array_column($listar, 'score');
                        array_multisort($scores, SORT_DESC, $listar);

                        $posicao = 1;

                        foreach ($listar as $mostrar) {
                        $showPosition = "#" . $posicao;
                            ?>
                            <tr>
                                <td scope="row"><?= $showPosition ?></td>
                                <td><?= $mostrar['name'] ?></td>
                                <td><?= $mostrar['score'] ?></td>
                            </tr>
                            <?php
                            $posicao++; 
                        }
                    }
                ?>

                <tr>
                    <td class="bottomLeftBorder color"></td>
                    <td class="color"></td>
                    <td class="bottomRightBorder color"></td>
                </tr>
            </table>
        </div>

        <div id="jogo2" class="tab-content">
            <table>
                <tr>
                    <th >Posição</th>
                    <th>Nome</th>
                    <th class="topRightBorder">Pontuação</th>
                </tr>

                <?php
                    include_once 'class/flappyBirdScore.php';

                    $bird = new FlappyBird();
                    $listar = $bird->listar();

                    if (!empty($listar)) {
                        $scores = array_column($listar, 'score');
                        array_multisort($scores, SORT_DESC, $listar);

                        $posicao = 1;

                        foreach ($listar as $mostrar) {
                        $showPosition = "#" . $posicao;
                            ?>
                            <tr>
                                <td scope="row"><?= $showPosition ?></td>
                                <td><?= $mostrar['name'] ?></td>
                                <td><?= $mostrar['score'] ?></td>
                            </tr>
                            <?php
                            $posicao++; 
                        }
                    }
                ?>

                <tr>
                    <td class="bottomLeftBorder color"></td>
                    <td class="color"></td>
                    <td class="bottomRightBorder color"></td>
                </tr>
            </table>
        </div>

        <div id="jogo3" class="tab-content">
            <table>
                <tr>
                    <th >Posição</th>
                    <th>Nome</th>
                    <th class="topRightBorder">Pontuação</th>
                </tr>

                <?php
                    include_once 'class/snakeScore.php';

                    $snake = new Snake();
                    $listar = $snake->listar();

                    if (!empty($listar)) {
                        $scores = array_column($listar, 'score');
                        array_multisort($scores, SORT_DESC, $listar);

                        $posicao = 1;

                        foreach ($listar as $mostrar) {
                        $showPosition = "#" . $posicao;
                            ?>
                            <tr>
                                <td scope="row"><?= $showPosition ?></td>
                                <td><?= $mostrar['name'] ?></td>
                                <td><?= $mostrar['score'] ?></td>
                            </tr>
                            <?php
                            $posicao++; 
                        }
                    }
                ?>

                <tr>
                    <td class="bottomLeftBorder color"></td>
                    <td class="color"></td>
                    <td class="bottomRightBorder color"></td>
                </tr>
            </table>
        </div>

        <div id="jogo4" class="tab-content">
            <table>
                <tr>
                    <th >Posição</th>
                    <th>Nome</th>
                    <th class="topRightBorder">Pontuação</th>
                </tr>

                <?php
                    include_once 'class/snakeScore.php';

                    $snake = new Snake();
                    $listar = $snake->listar();

                    if (!empty($listar)) {
                        $scores = array_column($listar, 'score');
                        array_multisort($scores, SORT_DESC, $listar);

                        $posicao = 1;

                        foreach ($listar as $mostrar) {
                        $showPosition = "#" . $posicao;
                            ?>
                            <tr>
                                <td scope="row"><?= $showPosition ?></td>
                                <td><?= $mostrar['name'] ?></td>
                                <td><?= $mostrar['score'] ?></td>
                            </tr>
                            <?php
                            $posicao++; 
                        }
                    }
                ?>

                <tr>
                    <td class="bottomLeftBorder color"></td>
                    <td class="color"></td>
                    <td class="bottomRightBorder color"></td>
                </tr>
            </table>
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