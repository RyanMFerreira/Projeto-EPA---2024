<?php
class Snake
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
        $caminho = curl_init(url: $this->url . 'snake.json');

        curl_setopt(handle: $caminho, option: CURLOPT_CUSTOMREQUEST, value: "POST");
        curl_setopt(handle: $caminho, option: CURLOPT_POSTFIELDS, value: $this->jsonDados);
        curl_setopt(handle: $caminho, option: CURLOPT_RETURNTRANSFER, value: true);

        $resposta = curl_exec(handle: $caminho);
        curl_close(handle: $caminho);

        return $resposta;
    }
}