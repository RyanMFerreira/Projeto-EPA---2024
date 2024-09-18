<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Quiz</title>
    <link rel="stylesheet" href="../style/Quiz.css">
</head>

<body>
    <div class="quiz-container">
        <h1>Quiz de Conhecimentos Gerais</h1>
        <div id="question-container" class="hide">
            <div id="question">Pergunta aqui</div>
            <div id="answer-buttons" class="btn-grid"></div>
        </div>
        <div class="controls">
            <button id="start-btn" class="btn start-btn">Começar</button>
            <button id="next-btn" class="btn hide">Próxima</button>
        </div>
        <div id="score-container" class="hide">
            <p id="score">Pontuação: 0</p>
        </div>
        <div id="final-container" class="hide">
            <h2>Parabéns!</h2>
            <p id="final-score">Você fez <span id="final-points"></span> pontos!</p>
            <button id="restart-btn" class="btn">Jogar novamente</button>
        </div>
    </div>
    <script src="../script/Quiz.js"></script>
</body>

</html>

<?php
if (filter_input(type: INPUT_POST, var_name: 'restart_game')) {
    $nome = filter_input(type: INPUT_POST, var_name: 'name');
    $pontucacao = filter_input(type: INPUT_POST, var_name: 'final-points');

    $dados = array(
        'name' => $nome,
        'score' => $pontucacao
    );

    include_once '../class/QuizScore.php';
    $snake = new Quiz();

    $snake->setJsonDados(jsonDados: json_encode(value: $dados));

    $msg = $snake->salvar() === true ? "Erro ao salvar!" : "Dados salvos! :)";

    echo "<script type='text/javascript'>alert('$msg');</script>";
}