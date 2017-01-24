<?php

$nave = $_POST["nave"];
$naves = ["ship01.png", "ship02.png","ship03.png"];
$a = $naves[$nave];

$random = rand(0, intval($a));

$respuesta = '{"random":"' .$random.'"}';
echo $respuesta;
?>

