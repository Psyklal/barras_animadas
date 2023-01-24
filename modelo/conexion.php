<?php
	class Conexion
	{
		public function conectar()
		{
			$usuario="root";
			$password="";
			$host="localhost";
			$db="barras_animadas";

			$conexion= new PDO("mysql:host=$host;dbname=$db;charset=utf8", $usuario, $password);
			 
			return $conexion;
		}
	}

?>