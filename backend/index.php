<?php

/*header('Access-Control-Allow-Origin', '*');
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');*/    
    //include("./classes/livro.class.php");

    include("./classes/conexao.class.php");
    $livro = [];
    $sql = "SELECT * FROM  livro";
    $conect = new conexao();
        if($result  = mysqli_query($conect->conection,$sql)){
            $cr = 0;
            while($row = mysqli_fetch_assoc($result)){
                $livro[$cr]['id'] = $row['id_autor'];
                $livro[$cr]['nome'] = $row['nome_livro'];
                $livro[$cr]['ano'] = $row['ano_criacao'];
                $livro[$cr]['categoria'] = $row['categoria'];
                $livro[$cr]['sinopse'] = $row['sinopse'];
                $cr++;
            }
            echo json_encode($livro);
        }
    //$livro = new livro();

    /*$livro->setValue('nome_livro',"1984");
    $livro->setValue('ano_criacao',"1945-08-01");
    $livro->setValue('categoria',"acao");
    $livro->setValue('sinopse',"Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, 1984 é uma fábula sobre o poder. Narra a vitoria da classe operaria.");
    $livro->value_pk = 2;*/
    
    
    //$livro->delete($livro);

    /*$livro->selectFields($livro);

    while($res = $livro->returnDates()):
        echo ($res->id_autor. ' : '.$res->nome_livro.' : ' .$res->ano_criacao.' : ' .$res->categoria.' : ' .$res->sinopse. "<br/>" );
    endwhile;*/



     

/*    if(isset($_POST['save'])):
        $livro->setValue('nome_livro',$_POST['nome_livro']);
        $livro->setValue('ano_criacao',$_POST['ano_criacao']);
        $livro->setValue('categoria',$_POST['categirua']);
        $livro->setValue('sinopse',$_POST['sinopse']);
        $livro->insert($livro);
    endif;

    echo '<pre>';    
    print_r($livro);
    echo '<pre>';
    echo $livro->affect_row. ' Registros incluidos com sucesso';*/
?>
