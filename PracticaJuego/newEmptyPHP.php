<?php

session_start();
$respuesta = '{"usuarios":[';

if(!isset($_SESSION["usuarios"])){
    $usuario = array();
    $usuario[$_POST["usuarioNombre"]] = 0;
    $_SESSION["usuarios"] = $usuario;
}else{
    $usuarios = $_SESSION["usuarios"];
    $usuarios[$_POST["usuarioNombre"]] = 0;
    $_SESSION["usuarios"] = $usuarios;
    
    foreach($usuarios as $usuario=>$puntuacion){
        $respuesta.='{"name":"'.$usuario.'"}';
    }
    $respuesta.=']}';
}
echo $respuesta;

?>
