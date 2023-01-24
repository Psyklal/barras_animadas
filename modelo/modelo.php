<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once("conexion.php");
date_default_timezone_set("America/mexico_City");

class Administrador{
    public function registrar($nombre_contacto,$clase_contacto,$tel_celular_contacto,$input_img_formulario){
        $modelo=new Conexion();
        $conexion=$modelo->conectar();
       
        $id_contacto="";
        
        $sql_peticion="SELECT ";

        $sql = "INSERT INTO datos_contacto(id_contacto,nombre_contacto,clase_contacto,tel_celular_contacto,input_img_formulario) 
                values(:id_contacto,:nombre_contacto,:clase_contacto,:tel_celular_contacto,:input_img_formulario)";
                $parametros = $conexion->prepare($sql);
                $parametros->bindParam(":id_contacto",$id_contacto);            
                $parametros->bindParam(":nombre_contacto",$nombre_contacto);
                $parametros->bindParam(":clase_contacto",$clase_contacto);
                $parametros->bindParam(":tel_celular_contacto",$tel_celular_contacto);
                $parametros->bindParam(":input_img_formulario",$input_img_formulario);

                if($parametros->execute())
                {
                    return "succes";
                } 
                else 
                {
                    return $parametros->errorInfo();
                }
       
    }
}
?>