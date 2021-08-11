<?php

$url="localhost";
$username = "root";
$password = "";
$dbname = "math_u_fellows";
$conn = mysqli_connect($url, $username, $password, $dbname);
//Database Connection End============================================
//Check Connection.....
$date_edited = date("Y-m-d");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());

} else {
    //echo "CONNECTED<br>";


}

?>