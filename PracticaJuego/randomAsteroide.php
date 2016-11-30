<?php

$mapaHeight = $_POST["height"];
$random = rand(0, intval($mapaHeight));

$respuesta = '{"random":"' .$random.'"}';

echo $respuesta;
?>

