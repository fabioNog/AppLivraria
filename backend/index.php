<?php
    include("./classes/livro.class.php");
    $livro = new livro();

    /*$livro->setValue('nome_livro',"1984");
    $livro->setValue('ano_criacao',"1945-08-01");
    $livro->setValue('categoria',"acao");
    $livro->setValue('sinopse',"Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, 1984 é uma fábula sobre o poder. Narra a vitoria da classe operaria.");
    $livro->value_pk = 2;*/
    
    
    //$livro->delete($livro);

    $livro->selectFields($livro);

    while($res = $livro->returnDates()):
        echo $res->nome_livro.' : ' .$res->ano_criacao.' : ' .$res->categoria.' : ' .$res->sinopse. "<br/>" ;
    endwhile;

    echo '<pre>';    
    print_r($livro);
    echo '<pre>';
    echo $livro->affect_row. ' Registros incluidos com sucesso';
?>
