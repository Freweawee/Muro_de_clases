<?php
    require 'Inscripcion.php';

    try{
        $rut = $_POST['rut'];
        $idclase = $_POST['idclase'];
        $inscripcion = new Inscripcion();

        $respuesta = $inscripcion->Insertar($rut, $idclase);
        
        if($respuesta==1){
            echo 1;
        }else{
            echo 0;
        }

    }catch(Exception $e){

        $error = array (
            "Error" => $e
        );

        echo json_encode($error, JSON_PRETTY_PRINT);
    }
    
?>