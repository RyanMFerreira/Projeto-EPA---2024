<?php
class Quiz
{
    private $url = 'https://epa-project-2024-default-rtdb.firebaseio.com/';
    private $jsonDados;

public function getJsonDados()

    {
        return $this->jsonDados;
    }

    public function setJsonDados($jsonDados): void
    {
        $this->jsonDados = $jsonDados;
    }

    public function salvar(): bool|string
    {
        $caminho = curl_init(url: $this->url . 'Quiz.json');

        curl_setopt(handle: $caminho, option: CURLOPT_CUSTOMREQUEST, value: "POST");
        curl_setopt(handle: $caminho, option: CURLOPT_POSTFIELDS, value: $this->jsonDados);
        curl_setopt(handle: $caminho, option: CURLOPT_RETURNTRANSFER, value: true);

        $resposta = curl_exec(handle: $caminho);
        curl_close(handle: $caminho);

        return $resposta;
    }

    public function listar()
    {
        $caminho = curl_init($this->url . 'Quiz.json');

        curl_setopt($caminho, CURLOPT_RETURNTRANSFER, true);

        $resposta = curl_exec($caminho);
        curl_close($caminho);

        return $dados = json_decode($resposta, true);
    }
}