<?php
class Snake
{
    private $url = 'https://epa-project-2024-default-rtdb.firebaseio.com/';
    private $jsonDados;

    var $posicao = 1;

    public function getJsonDados()
    {
        return $this->jsonDados;
    }

    public function setJsonDados($jsonDados): void
    {
        $this->jsonDados = $jsonDados;
    }

    public function salvar()
    {
        $caminho = curl_init($this->url . 'snake.json');

        curl_setopt($caminho, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($caminho, CURLOPT_POSTFIELDS, $this->jsonDados);
        curl_setopt($caminho, CURLOPT_RETURNTRANSFER, true);

        $resposta = curl_exec($caminho);
        curl_close($caminho);

        return $resposta;
    }

    public function listar()
    {
        $caminho = curl_init($this->url . 'snake.json');

        curl_setopt($caminho, CURLOPT_RETURNTRANSFER, true);

        $resposta = curl_exec($caminho);
        curl_close($caminho);

        return $dados = json_decode($resposta, true);
    }
}