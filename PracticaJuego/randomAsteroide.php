<?php

$mapaHeight = $_POST["height"];
$random = rand(0, intval($mapaHeight));
$random2 = rand(10, intval($mapaHeight)/3);

$respuesta = '{"random":"' .$random.'","random2":"'.$random2.'"}';

echo $respuesta;
?>

