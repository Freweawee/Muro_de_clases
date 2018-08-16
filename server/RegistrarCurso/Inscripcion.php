<?php
    require 'conexion.php';

    class Inscripcion extends Conexion{

        public function Inscripcion(){
            parent::__construct();
        }

        public function Buscar($rut, $idclase){
            $sql = 'SELECT * FROM estudiante_has_class WHERE RutE="'.$rut.'" and idClase="'.$idclase.'"';
            $stmt = $this->conexion_db->prepare($sql);
            $stmt->execute();

            $stmt->closeCursor();

            return $stmt->rowCount();
        }

        public function Insertar($rut, $idclase){

            if($this->Buscar($rut, $idclase)!=0){
                return 0;
            }else{
                $sql = 'INSERT INTO estudiante_has_class VALUES ("'.$rut.'", "'.$idclase.'")';
                $stmt = $this->conexion_db->prepare($sql);
                $stmt->execute();

                $stmt->closeCursor();

                return $stmt->rowCount();
            }
        }

        public function Eliminar($rut, $idclase){

            $sql = 'DELETE FROM estudiante_has_class WHERE RutE="'.$rut.'" and idClase="'.$idclase.'"';
            $stmt = $this->conexion_db->prepare($sql);
            $stmt->execute();
            $stmt->closeCursor();
        }
    }
?>