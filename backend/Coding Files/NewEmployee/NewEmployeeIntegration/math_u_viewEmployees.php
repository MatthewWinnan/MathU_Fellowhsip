<?php

include 'math_u_db_connection.php';
include 'math_u_addEmployee_functions.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$company_id = $data['company_id'];

viewEmployees($mysqli, $company_id);

 ?>
