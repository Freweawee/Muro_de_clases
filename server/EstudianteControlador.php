<?php
    require 'Estudiante.php';

    $cmd = $_POST['cmd'];
    $idEstudiante = $_POST['idEstudiante'];

    $estudiante = new Estudiante();

    switch($cmd){
        case 'Buscar':
            $JsonInfo = $estudiante->Buscar($idEstudiante);
            echo json_encode($JsonInfo, JSON_PRETTY_PRINT);
    }
?>