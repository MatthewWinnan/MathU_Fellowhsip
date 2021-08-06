<?php
require 'hash_password.php';
$pass = "B12456";
echo "Actual Password ".$pass."--->";
$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);
echo  "HASHED: ".$hashed_pass;
?>