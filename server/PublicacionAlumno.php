<?php
    require 'conexion.php';

    class PublicacionAlumno extends Conexion{
        public function Clase(){
            parent::__construct();
        }
    
        public function Insertar($publicacion){
            try{

                $sql = 'INSERT INTO anuncioAlumno(rutEstudiante, materia, titulo, descripcion, email, telefono, direccion) VALUES("'.$publicacion['rutEstudiante'].'", 
                                                                                                                                    "'.$publicacion['materia'].'", 
                                                                                                                                    "'.$publicacion['titulo'].'", 
                                                                                                                                    "'.$publicacion['descripcion'].'", 
                                                                                                                                    "'.$publicacion['email'].'", 
                                                                                                                                    "'.$publicacion['telefono'].'", 
                                                                                                                                    "'.$publicacion['direccion'].'")';

                $stmt = $this->conexion_db->prepare($sql);
                $stmt->execute();

                return $stmt->rowCount();

            }catch(Exception $e){
                $error = array (
                    "Error" => $e
                );
                return $error;
            }
        }

        public function Listar(){
            try{
                $sql = 'SELECT * FROM anuncioAlumno';

                $stmt = $this->conexion_db->prepare($sql);
                $stmt->execute();
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                return json_encode($result, JSON_PRETTY_PRINT);

            }catch(Exception $e){
                $error = array (
                    "Error" => $e
                );
                return json_encode($error, JSON_PRETTY_PRINT);
            }
        }

        public function Buscar($idAnuncio){
            try{
                $sql = 'SELECT * FROM anuncioAlumno WHERE idAnunucio=".$idAnuncio."';

                $stmt = $this->conexion_db->prepare($sql);
                $stmt->execute();
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                return json_encode($result, JSON_PRETTY_PRINT);

            }catch(Exception $e){
                $error = array (
                    "Error" => $e
                );
                return json_encode($error, JSON_PRETTY_PRINT);
            }
        }
    }
?>