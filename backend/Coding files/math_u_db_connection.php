
<?php

//Specifying the correct timezone
date_default_timezone_set ("Africa/Johannesburg");
//dB Credentials 
$user='root';
$pass='';

//dB Name 
$dBName='math_u_fellows';

//Establishing connection 
$mysqli = new mysqli('localhost', $user, $pass, $dBName);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
//How to run it? 
//Move file to C:\xampp\htdocs
//Open browser and type http://localhost/math_u_db_connection.php
?>