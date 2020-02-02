<?php
    abstract class banco{
        public $server         = "localhost:3306";
        public $user           = "root";
        public $password       = "";
        public $database_name  = "livraria";
        public $conection      = "NULL";
        public $dataset        = "NULL";
        public $affect_row     = -1;

        //Meus Metodos construtor e destrutor
        public function __construct()
        {
            $this->conect();
        }//construtor da classe para chamada de rotinas

        public function __destruct()
        {
            if($this->conection != NULL): 
                mysqli_close($this->conection);
            endif;
        }

        public function conect(){
            
            $this->conection = mysqli_connect($this->server,$this->user,$this->password,$this->database_name,TRUE) 
            or die($this->handle_erro(__FILE__,__FUNCTION__,mysqli_errno($this->conection),mysqli_error($this->conection),TRUE));
            mysqli_query($this->conection,"SET NAMES 'utf8");
            mysqli_query($this->conection,"SET character_set_connection=utf8");
            mysqli_query($this->conection,"SET character_set_client=utf8");
            mysqli_query($this->conection,"SET character_set_results=utf8");
            echo("Metodo conectar foi chamado");
        }//Classe ao qual conectara ao banco

        //Rotina para tratamento de erros
        public function handle_erro($file=NULL,$routine=NULL,$number_erro=NULL,$msg_erro=NULL,$generation_except=FALSE){
            if($file == NULL) $file="Nao Informado";
            if($routine == NULL) $routine="Nao Informada";
            if($number_erro == NULL) $number_erro=mysqli_errno($this->conection);
            if($msg_erro == NULL) $msg_erro=mysqli_error($this->conection);
            $result = 'Ocorreu um erro com o seguintes detalhes: <br/>
            <strong>Arquivo:</strong>' .$file.'<br/>
            <strong>Rotina:</strong> ' .$routine.'<br/>
            <strong>Codigo:</strong>' .$number_erro.'<br/>
            <strong>Messagem:</strong>' .$msg_erro;
            if($generation_except == FALSE):
                echo($result);
            
            else:
                die($result);
            endif;
        }
    }//Fim da minha class Banco

    

?>