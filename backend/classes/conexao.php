<?php
class Conexao{
    public function conectatDB(){
        try{
            $connect =  new PDO("mysql:host=localhost;dbname=livraria","root","");
            return $connect;
        }
        catch (PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}

