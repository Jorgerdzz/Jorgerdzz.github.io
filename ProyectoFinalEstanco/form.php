<?php
$link = mysqli_connect("localhost", "root","") or die('No se pudo conectar: ' . mysql_error());
$db = mysqli_select_db($link,"bdestanco")or die('No se pudo seleccionar la base de datos');
// volcamos en variables cada uno de los campos que queremos almacenar en la base de datos
// en nuestro caso POST(‘name de cada uno de los imput del formulario )
$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$correo=$_POST['correo'];
$direccion=$_POST['direccion'];
$cp=$_POST['cp'];
$date=date('Y-m-d H:i:s', time());
$totalCompra = $_POST['totalCompra'];
$consulta="INSERT INTO formulario (nombre, telefono, correo, direccion, cp, time, totalCompra)
VALUES ('$nombre','$telefono','$correo','$direccion','$cp', '$date', '$totalCompra')";
// Si queremos visualizar la consulta que se envía al servidor pondremos:
echo "----------------------".$consulta."--";
mysqli_query($link,$consulta) or die ("<h3> Error al insertar en la tabla </h3>");
//Si queremos encriptar la contraseña podemos utilizar la función md5(variable donde se almacena)
echo "¡Graciassss! Hemos recibido sus datos.\n";
?>