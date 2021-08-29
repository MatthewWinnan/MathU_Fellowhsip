<?php

include 'math_u_db_connection.php';
include 'math_u_addEmployee_functions.php';

$input = file_get_contents('php://input');
/*$input = '{
        "company_id": 1,
        "company_name": "Google",
        "company_industry": "IT & Telecommunications",
        "number_of_reports": 0,
        "comapny_logo": "",
        "company_description": "",
        "company_URL": ""
    }';*/
$data = json_decode($input, true);

$company_id = $data['company_id'];

viewEmployees($mysqli, $company_id);

 ?>
