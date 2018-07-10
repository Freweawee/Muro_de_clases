<?php
    session_start();

    $_SESSION["nombre"] = "Cesar";
    $_SESSION["rut"] = "19.121.841-8";

    $Json_info = array(
        "nombre" => $_SESSION['nombre'],
        "rut" => $_SESSION['rut']
    );

    echo json_encode($Json_info, JSON_PRETTY_PRINT);
?>