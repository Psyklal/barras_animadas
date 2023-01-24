<?php
    error_reporting(E_ALL);
    ini_set('display_error', "1");
    require_once("../modelo/modelo.php");

    $nombre_contacto=$_POST["nombre_contacto"];
    $clase_contacto=$_POST["clase_contacto"];
    $tel_celular_contacto=$_POST["tel_celular_contacto"];
    $input_img_formulario=$_POST["input_img_formulario"];

    $modelo=new Administrador();
    $respuesta=$modelo->registrar($nombre_contacto,$clase_contacto,$tel_celular_contacto,$input_img_formulario);


    print_r($respuesta);
?>