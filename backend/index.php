<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Livraria</title>
</head>
<body>
    <?php
        include("./classes/conexao.php");
        $conexao = new Conexao();
       var_dump( $conexao->conectatDB());
    ?>
</body>
</html>