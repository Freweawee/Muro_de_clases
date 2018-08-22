<?php
    require 'PublicacionAlumno.php';

    $cmd = $_POST['cmd'];

    $publicacion = new PublicacionAlumno();

    switch($cmd){
        case 'Insertar':
            $params = array(
                'rutEstudiante' => $_POST['rutEstudiante'],
                'materia' => $_POST['materia'],
                'titulo' => $_POST['titulo'],
                'descripcion' => $_POST['descripcion'],
                'email' => $_POST['email'],
                'telefono' => $_POST['telefono'],
                'direccion' => $_POST['direccion']
            );

            $respuesta = $publicacion->Insertar($params);

            echo $respuesta;

            break;
        case 'Listar':
            $respuesta = $publicacion->Listar();
            echo $respuesta;
            
            break;
        case 'Buscar':
            $respuesta = $publicacion->Buscar($_POST['idAnuncio']);
    }
?>