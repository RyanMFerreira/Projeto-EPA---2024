<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" , content="width=device-width, initial-scale=1.0">
    <title>Forca</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="stylesheet" href="../style/catalog.css">
    <link rel="stylesheet" href="../global.css">
    <link rel="stylesheet" href="../style/navBar.css">
    <link rel="stylesheet" href="../style/sideMenu.css">
    <link rel="stylesheet" href="../style/gameOverPopUp.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/forca.css" media="screen">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <script src="../script.js"></script>
    <script src="../script/menuScript.js"></script>
    <script src="./js/forca.js"></script>
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



        <div id="game_controls">
            <button onclick="startGame()" id="start_game">Iniciar Jogo</button>
        </div>


        <div> <!-- jogo inteiro-->
            <div class="container">
                <div id="imagem"></div>

                <div id="palavra-secreta">
                    <!-- <div class="letras">A</div>
            <div class="letras">F</div>
            <div class="letras">G</div>
            <div class="letras">A</div>
            <div class="letras">S</div>
            <div class="letras">M</div> -->
                </div>

                <div id="teclado">
                    <div class="teclas">
                        <button id="tecla-A" onclick="verificaLetraEscolhida('A')">A</button>
                        <button id="tecla-B" onclick="verificaLetraEscolhida('B')">B</button>
                        <button id="tecla-C" onclick="verificaLetraEscolhida('C')">C</button>
                        <button id="tecla-D" onclick="verificaLetraEscolhida('D')">D</button>
                        <button id="tecla-E" onclick="verificaLetraEscolhida('E')">E</button>
                        <button id="tecla-F" onclick="verificaLetraEscolhida('F')">F</button>
                        <button id="tecla-G" onclick="verificaLetraEscolhida('G')">G</button>
                        <button id="tecla-H" onclick="verificaLetraEscolhida('H')">H</button>
                        <button id="tecla-I" onclick="verificaLetraEscolhida('I')">I</button>
                    </div>
                    <div class="teclas">
                        <button id="tecla-J" onclick="verificaLetraEscolhida('J')">J</button>
                        <button id="tecla-K" onclick="verificaLetraEscolhida('K')">K</button>
                        <button id="tecla-L" onclick="verificaLetraEscolhida('L')">L</button>
                        <button id="tecla-M" onclick="verificaLetraEscolhida('M')">M</button>
                        <button id="tecla-N" onclick="verificaLetraEscolhida('N')">N</button>
                        <button id="tecla-O" onclick="verificaLetraEscolhida('O')">O</button>
                        <button id="tecla-P" onclick="verificaLetraEscolhida('P')">P</button>
                        <button id="tecla-Q" onclick="verificaLetraEscolhida('Q')">Q</button>
                        <button id="tecla-R" onclick="verificaLetraEscolhida('R')">R</button>
                    </div>
                    <div class="teclas">
                        <button id="tecla-S" onclick="verificaLetraEscolhida('S')">S</button>
                        <button id="tecla-T" onclick="verificaLetraEscolhida('T')">T</button>
                        <button id="tecla-U" onclick="verificaLetraEscolhida('U')">U</button>
                        <button id="tecla-V" onclick="verificaLetraEscolhida('V')">V</button>
                        <button id="tecla-W" onclick="verificaLetraEscolhida('W')">W</button>
                        <button id="tecla-X" onclick="verificaLetraEscolhida('X')">X</button>
                        <button id="tecla-Y" onclick="verificaLetraEscolhida('Y')">Y</button>
                        <button id="tecla-Z" onclick="verificaLetraEscolhida('Z')">Z</button>
                        <button id="btnReiniciar">🎮</button>
                    </div>
                </div>

                <div id="categoria">
                    <!-- CATEGORIA -->
                </div>

                <!-- inicio modal Bootstrap-->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" id="modalBody"></div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fim modal Bootstrap-->

                <!-- Modal Adicionar Palavra -->
                <div id="modal-alerta" class="modal-container">
                    <div class="modal-add-palavra">
                        <div class="modal-header-add-palavra" id="modal-titulo">
                            <span id="fechaModal" class="close">&times;</span>
                            <h2>ADICIONAR PALAVRA</h2>
                        </div>
                        <div class="modal-body-add-palavra" id="modal-mensagem">
                            <input id="addPalavra" type="text" placeholder="PALAVRA" required>
                            <input id="addCategoria" type="text" placeholder="CATEGORIA" required>
                            <button onclick="adicionarPalavra()">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="status">Modo Automático</div>
            <button id="abreModalAddPalavra"><i class='bx bx-message-square-add'></i></button>
            <img src="img/jogarNovamente.gif" id="jogarNovamente"></img>
            <button id="recarregar" onclick="sortear()"><i class='bx bx-refresh'></i></button>
            <button id="jogarAutomatico" onclick="listaAutomatica()"><i class='bx bx-pause-circle'></i></button>

        </div>



        
        <div id="gameOverPopUp" class="popUp">
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
                    <button class="send" onclick="closePopUp()">Enviar</button>
                </div>
            </div>
        </div>

    </div>
    <div class="main">
        <div class="tLeft">
            <h3>Como jogar?</h3>
            <ul>
                <li>Clique na letra que deseja escolher</li>
            </ul>
        </div>
        <div class="tRight">
            <h3>Créditos:</h3>
            <ul>
                <li>Feito por Matheus Ferreira.</li>
                <li>Aprimorado por Ryan Ferreira.</li>
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
    <script src="js/forca.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

</html>

<?php
