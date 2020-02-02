<?php
    include("./classes/livro.class.php");
    $livro = new livro();

    $livro->setValue('nome_livro',"A Revolucao dos bichos:Um conto de fadas");
    $livro->setValue('ano_criacao',"1945-07-01");
    $livro->setValue('categoria',"acao");
    $livro->setValue('sinopse',"Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.");
    $livro->insert($livro);
    /*echo '<pre>';    
    print_r($livro);
    echo '<pre>';*/
?>
