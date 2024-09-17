<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quiz_game";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Salvando pontuação
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = $_POST['score'];
    $sql = "INSERT INTO scores (score) VALUES ('$score')";

    if ($conn->query($sql) === TRUE) {
        echo "Pontuação salva com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
