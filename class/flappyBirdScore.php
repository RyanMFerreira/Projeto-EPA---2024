<?php
class flappyBird
{
    private $url = 'https://epa-project-2024-default-rtdb.firebaseio.com/';
    private $jsonDados;

    public function getJsonDados(): mixed
    {
        return $this->jsonDados;
    }

    public function setJsonDados($jsonDados): void
    {
        $this->jsonDados = $jsonDados;
    }

    public function salvar()
    {
        $caminho = curl_init($this->url . 'flappyBird.json');

        curl_setopt(handle: $caminho, option: CURLOPT_CUSTOMREQUEST, value: "POST");
        curl_setopt(handle: $caminho, option: CURLOPT_POSTFIELDS, value: $this->jsonDados);
        curl_setopt(handle: $caminho, option: CURLOPT_RETURNTRANSFER, value: true);

        $resposta = curl_exec(handle: $caminho);
        curl_close(handle: $caminho);

        return $resposta;
    }
}