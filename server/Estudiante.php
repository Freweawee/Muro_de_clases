<?php
    require 'conexion.php';

    class Estudiante extends Conexion{
        public function Clase(){
            parent::__construct();
        }
    
        public function Buscar($idEstudiante){

            try{

                $sql = 'SELECT * FROM estudiante WHERE RutE="'.$idEstudiante.'"';

                $stmt = $this->conexion_db->prepare($sql);
                $stmt->execute();
                $result_class = $stmt->fetch();

                $Json_info = array(
                    'RutE' => $result_class['RutE'],
                    'Nombre' => $result_class['Nombre'],
                    'Apellidos' => $result_class['Apellidos']
                );

                return $Json_info;

            }catch(Exception $e){
                $error = array (
                    "Error" => $e
                );
                return $error;
            }
        }
    }
?>