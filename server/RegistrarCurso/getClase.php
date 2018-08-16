<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include('conexion.php');

    try{

        $idclase = $_POST['idclase'];

        $sql = 'SELECT * FROM clase WHERE idClase="'.$idclase.'"';

        $stmt = $db->prepare($sql);
        $stmt->execute();
        $result_class = $stmt->fetch();
            
        $sql = 'SELECT NombreT,ApellidosT,PerfilT FROM tutor WHERE RutT="'.$result_class['RutT'].'"';

        $stmt = $db->prepare($sql);
        $stmt->execute();
        $result_tutor = $stmt->fetch();

        $Json_info = array(
            'idClase' => $result_class['idClase'],
            'Materia' => $result_class['Materia'],
            'Titulo' => $result_class['Titulo'],
            'Descripcion' => $result_class['Descripcion'],
            'Fecha' => $result_class['fecha'],
            'NombreT' => $result_tutor['NombreT'],
            'ApellidosT' => $result_tutor['ApellidosT'],
            'PerfilT' => $result_tutor['PerfilT']
        );

        echo json_encode($Json_info, JSON_PRETTY_PRINT);
        
    }catch(Exception $e){
        echo $e;
    }
    
?>