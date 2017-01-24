<?php

session_start();

if (!isset($_SESSION["click"])) {
    $_SESSION["click"] = -1;
    $_SESSION["ficha2"] = "";
}

$srcImg2 = "";
$iguales = "";
$carta_anterior = "";
$ficha = $_POST["carta"];
$id = $_POST["id"];
$fichas = ["champiñon.jpg", "estrella.jpg", "flor_fuego.jpg", "moneda.jpg", "platano.jpg", "shell_blue.jpg",
    "estrella.jpg", "champiñon.jpg", "shell_blue.jpg", "platano.jpg", "moneda.jpg", "flor_fuego.jpg"];
$a = $fichas[$ficha];
if ($_SESSION["click"] == -1) {
    $_SESSION["click"] = $id;
    $_SESSION["ficha2"] = $ficha;
    $respuesta = '{"ficha":"' . $a . '",'
            . '"id":"' . $id . '",'
            . '"ficha2":"-1",'
            . '"id2":"-1"}';
    echo $respuesta;
} else {
   

    $iguales = "si";
    $carta_anterior = $_SESSION['ficha2'];

    if ($fichas[$ficha] == $fichas[$carta_anterior]) {
        $iguales = "no";
    }
    $srcImg2 = $fichas[$carta_anterior];
 


    $respuesta = '{"ficha":"' . $a . '",'
            . '"id":"' . $id . '",'
            . '"ficha2":"' .$srcImg2  . '",'
            . '"id2":"' . $_SESSION["click"] . '"}';
    
    $_SESSION["click"] = -1;
    echo $respuesta;
}
?>